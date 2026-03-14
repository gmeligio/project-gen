# pnpm Digest Auto-Update via Renovate

## Problem

When Renovate creates PRs to bump the pnpm version in `version.json`, it updates `currentValue` and `currentVersion` but leaves `currentDigest` (the `sha512` integrity hash) unchanged. This requires a manual step: running `corepack use pnpm@<version>`, extracting the new hash, and pasting it into `version.json`.

## Root Cause

The pnpm `currentDigest` in `version.json` is stored in **corepack hex format** (`sha512.<hex>`). Renovate's npm datasource returns integrity hashes in **SRI format** (`sha512-<base64>`). Because the formats don't match, Renovate doesn't recognize the field as a digest it can update.

## Solution

Store the pnpm `currentDigest` in SRI format (what the npm datasource returns), and convert to corepack format in code when building the `packageManager` field.

### 1. Data Format Change — `version.json`

Convert the pnpm `currentDigest` from corepack hex format to SRI format:

```
Before: "sha512.41872f037ad22f7348e3b1debbaf7e867cfd448f2726d9cf74c08f19507c31d2c8e7a11525b983febc2df640b5438dee6023ebb1f84ed43cc2d654d2bc326264"
After:   "sha512-QYcvA3rSLzRI47Ed67p/hofP1EjyJtnc90wI8ZVAPTHS0jrlyYWL+/LC+kOUNjfpkI678U6TKQLS2UVLMCY2Q=="
```

This is a one-time conversion. The underlying hash data is identical — only the encoding changes.

### 2. Code Change — `src/patch/JsiiProjectPatch.ts`

Add a function to convert SRI → corepack format:

1. Strip the `sha512-` prefix
2. Decode the base64 string to a `Buffer`
3. Encode the buffer as hex
4. Prefix with `sha512.`

Apply this conversion when building the `packageManager` field (line 73):

```typescript
// Before
this.addFields({
  packageManager: `pnpm@${pnpmVersion}+${pnpmDigest}`,
});

// After
const corepackDigest = sriToHexDigest(pnpmDigest);
this.addFields({
  packageManager: `pnpm@${pnpmVersion}+${corepackDigest}`,
});
```

### 3. Self-Mutation Safety

The conversion produces the **exact same** `packageManager` value as today. Projen self-mutation will see no diff after the initial change.

When Renovate updates pnpm in `version.json` (now including the digest in SRI format), the subsequent CI self-mutation build will:

1. Read the new SRI digest from `version.json`
2. Convert it to corepack hex format
3. Write the correct `packageManager` field to `package.json`
4. Self-mutation commits the updated `package.json`

No changes needed to CI workflows.

### 4. What Stays the Same

- `.projenrc.ts` — no changes
- `renovate.json5` — no changes; `pinDigests: true` already applies to `version.json` entries
- Custom regex manager — no changes; it already captures `currentDigest`
- GitHub Actions digests — unaffected; those use git commit SHAs, not npm integrity hashes

### 5. Testing

- Unit test for the SRI → corepack hex conversion function
- Manual verification: convert the current hex digest to SRI, put it in `version.json`, run `npx projen`, confirm `package.json` output is unchanged

## Files Changed

| File | Change |
|------|--------|
| `version.json` | Convert pnpm `currentDigest` from `sha512.<hex>` to `sha512-<base64>` |
| `src/patch/JsiiProjectPatch.ts` | Add SRI → corepack conversion when building `packageManager` string |
| Tests | Add unit test for the conversion function |
