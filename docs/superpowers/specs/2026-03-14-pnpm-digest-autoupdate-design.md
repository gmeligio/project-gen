# pnpm Digest Auto-Update via Renovate

## Problem

When Renovate creates PRs to bump the pnpm version in `version.json`, it updates `currentValue` and `currentVersion` but leaves `currentDigest` (the `sha512` integrity hash) unchanged. This requires a manual step: running `corepack use pnpm@<version>`, extracting the new hash, and pasting it into `version.json`.

## Root Cause

The pnpm `currentDigest` in `version.json` is stored in **corepack hex format** (`sha512.<hex>`). Renovate's npm datasource returns integrity hashes in **SRI format** (`sha512-<base64>`). Because the formats don't match, Renovate doesn't recognize the field as a digest it can update.

**Note:** This hypothesis should be verified with a Renovate dry-run or log inspection after implementation to confirm the npm datasource supports digest updates via custom regex managers. If it does not, a fallback approach (e.g., `postUpgradeTasks`) may be needed.

## Solution

Store the pnpm `currentDigest` in SRI format (what the npm datasource returns), and convert to corepack format in code when building the `packageManager` field.

### 1. Data Format Change — `version.json`

Convert the pnpm `currentDigest` from corepack hex format to SRI format:

```
Before: "sha512.41872f037ad22f7348e3b1debbaf7e867cfd448f2726d9cf74c08f19507c31d2c8e7a11525b983febc2df640b5438dee6023ebb1f84ed43cc2d654d2bc326264"
After:   "sha512-QYcvA3rSL3NI47Heu69+hnz9RI8nJtnPdMCPGVB8MdLI56EVJbmD/rwt9kC1Q43uYCPrsfhO1DzC1lTSvDJiZA=="
```

This is a one-time conversion. The underlying hash data is identical — only the encoding changes.

### 2. Code Change — `src/patch/JsiiProjectPatch.ts`

Add an **exported** function `sriToHexDigest` (in `src/patch/JsiiProjectPatch.ts`) to convert SRI → corepack format:

1. Validate the input starts with `sha512-`; throw a clear error if not
2. Strip the `sha512-` prefix
3. Decode the base64 string to a `Buffer`
4. Validate the decoded buffer is exactly 64 bytes (512 bits); throw if not
5. Encode the buffer as hex
6. Prefix with `sha512.`

The function is exported so it can be unit-tested directly.

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

- Unit test for the `sriToHexDigest` conversion function (valid input, invalid prefix, wrong length)
- Manual verification: convert the current hex digest to SRI, put it in `version.json`, run `npx projen`, confirm `package.json` output is unchanged
- Verify the SRI value in `version.json` matches what the npm registry returns for `pnpm@10.28.2` (run `npm view pnpm@10.28.2 dist.integrity`)

### 6. Maintenance Note

Add a comment in `JsiiProjectPatch.ts` near the digest conversion explaining that the pnpm digest in `version.json` must be in SRI format (`sha512-<base64>`) for Renovate compatibility. This prevents future maintainers from accidentally reverting to hex format.

## Files Changed

| File | Change |
|------|--------|
| `version.json` | Convert pnpm `currentDigest` from `sha512.<hex>` to `sha512-<base64>` |
| `src/patch/JsiiProjectPatch.ts` | Add SRI → corepack conversion when building `packageManager` string |
| Tests | Add unit test for the conversion function |
