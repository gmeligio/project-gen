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
