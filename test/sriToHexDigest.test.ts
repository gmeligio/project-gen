import { sriToHexDigest } from '../src/patch/sriToHexDigest';

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
