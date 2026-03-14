# pnpm Digest Auto-Update Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enable Renovate to automatically update the pnpm `currentDigest` in `version.json` by storing it in SRI format (which the npm datasource returns), and converting to corepack hex format in code.

**Architecture:** Add an exported `sriToHexDigest` function to `src/patch/JsiiProjectPatch.ts` that converts SRI-format integrity hashes (`sha512-<base64>`) to corepack hex format (`sha512.<hex>`). Update `version.json` to store the pnpm digest in SRI format. The conversion is applied when building the `packageManager` field in `package.json`.

**Tech Stack:** TypeScript, Node.js Buffer API, Jest, projen

**Spec:** `docs/superpowers/specs/2026-03-14-pnpm-digest-autoupdate-design.md`

---

## Chunk 1: Implementation

### Task 1: Add `sriToHexDigest` function with TDD

**Files:**
- Modify: `src/patch/JsiiProjectPatch.ts`
- Create: `test/sriToHexDigest.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `test/sriToHexDigest.test.ts`:

```typescript
import { sriToHexDigest } from '../src/patch';

describe('sriToHexDigest', () => {
  test('converts SRI sha512 digest to corepack hex format', () => {
    const sri = 'sha512-QYcvA3rSL3NI47Heu69+hnz9RI8nJtnPdMCPGVB8MdLI56EVJbmD/rwt9kC1Q43uYCPrsfhO1DzC1lTSvDJiZA==';
    const expected = 'sha512.41872f037ad22f7348e3b1debbaf7e867cfd448f2726d9cf74c08f19507c31d2c8e7a11525b983febc2df640b5438dee6023ebb1f84ed43cc2d654d2bc326264';
    expect(sriToHexDigest(sri)).toBe(expected);
  });

  test('throws if input does not start with sha512-', () => {
    expect(() => sriToHexDigest('sha256-abc')).toThrow('must start with "sha512-"');
  });

  test('throws if decoded buffer is not 64 bytes', () => {
    // 'AQID' is base64 for 3 bytes [1,2,3] — not 64 bytes
    expect(() => sriToHexDigest('sha512-AQID')).toThrow('64 bytes');
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `rtk npx jest test/sriToHexDigest.test.ts --no-coverage`
Expected: FAIL — `sriToHexDigest` is not exported from `../src/patch`

- [ ] **Step 3: Implement `sriToHexDigest`**

Add to `src/patch/JsiiProjectPatch.ts`, before the `JsiiProjectPatch` class definition:

```typescript
/**
 * Converts an SRI-format integrity hash (sha512-<base64>) to corepack hex format (sha512.<hex>).
 *
 * The pnpm digest in version.json is stored in SRI format for Renovate compatibility —
 * the npm datasource returns digests in this format, enabling automatic updates.
 * Corepack requires the hex format in the packageManager field of package.json.
 */
export function sriToHexDigest(sri: string): string {
  if (!sri.startsWith('sha512-')) {
    throw new Error(`Invalid SRI digest: must start with "sha512-", got "${sri.slice(0, 10)}..."`);
  }

  const base64 = sri.slice('sha512-'.length);
  const buffer = Buffer.from(base64, 'base64');

  if (buffer.length !== 64) {
    throw new Error(`Invalid SRI digest: decoded to ${buffer.length} bytes, expected 64 bytes (512 bits)`);
  }

  return `sha512.${buffer.toString('hex')}`;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `rtk npx jest test/sriToHexDigest.test.ts --no-coverage`
Expected: PASS — all 3 tests green

- [ ] **Step 5: Commit**

```bash
rtk git add src/patch/JsiiProjectPatch.ts test/sriToHexDigest.test.ts
rtk git commit -m "feat: add sriToHexDigest conversion function with tests"
```

---

### Task 2: Wire up `sriToHexDigest` in constructor

**Files:**
- Modify: `src/patch/JsiiProjectPatch.ts:72-74`

- [ ] **Step 1: Update the `packageManager` field construction**

In `src/patch/JsiiProjectPatch.ts`, change lines 72-74 from:

```typescript
this.addFields({
  packageManager: `pnpm@${pnpmVersion}+${pnpmDigest}`,
});
```

To:

```typescript
// Convert SRI digest (sha512-<base64>) to corepack hex format (sha512.<hex>).
// version.json stores SRI format for Renovate npm datasource compatibility.
const corepackDigest = sriToHexDigest(pnpmDigest);
this.addFields({
  packageManager: `pnpm@${pnpmVersion}+${corepackDigest}`,
});
```

- [ ] **Step 2: Update `version.json` to SRI format**

Change the pnpm `currentDigest` in `version.json` from:

```json
"currentDigest": "sha512.41872f037ad22f7348e3b1debbaf7e867cfd448f2726d9cf74c08f19507c31d2c8e7a11525b983febc2df640b5438dee6023ebb1f84ed43cc2d654d2bc326264",
```

To:

```json
"currentDigest": "sha512-QYcvA3rSL3NI47Heu69+hnz9RI8nJtnPdMCPGVB8MdLI56EVJbmD/rwt9kC1Q43uYCPrsfhO1DzC1lTSvDJiZA==",
```

- [ ] **Step 3: Run projen to verify no self-mutation diff**

Run: `rtk npx projen`
Then: `rtk git diff`
Expected: Only the changes we made (version.json + JsiiProjectPatch.ts). The generated `package.json` `packageManager` field should be **unchanged** — the conversion produces the same hex value as before.

- [ ] **Step 4: Run the full test suite**

Run: `rtk npx projen test`
Expected: All tests pass, including the new `sriToHexDigest` tests.

- [ ] **Step 5: Verify SRI value matches npm registry**

Run: `npm view pnpm@10.28.2 dist.integrity`
Expected: The output should match the SRI value in `version.json`. If it differs, update `version.json` to use the registry value and re-run step 3.

- [ ] **Step 6: Commit**

```bash
rtk git add version.json src/patch/JsiiProjectPatch.ts
rtk git commit -m "feat: store pnpm digest in SRI format for Renovate auto-update"
```
