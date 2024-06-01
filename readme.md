# project-gen


## Contributing

### Updates in PNPM version

Renovates takes care of suggesting updates of new PNPM version. When that happens, the build job in Github CI will most likely fail. Follow these steps to upgrade the version and fix the build job:

1. Get the suggested version from the pull request that Renovate created. Let's say 9.1.4
1. Run locally
    
    ```bash
    corepack use pnpm@9.1.4
    ```

1. Get the security hash that corepack updated in package.json > packageManager. For example if the packageManager field is:

    ```json
    // ...
    "packageManager": "pnpm@9.1.4+sha512.9df9cf27c91715646c7d675d1c9c8e41f6fce88246f1318c1aa6a1ed1aeb3c4f032fcdf4ba63cc69c4fe6d634279176b5358727d8f2cc1e65b65f43ce2f8bfb0"
    // ...
    ```

then the security hash is `sha512.9df9cf27c91715646c7d675d1c9c8e41f6fce88246f1318c1aa6a1ed1aeb3c4f032fcdf4ba63cc69c4fe6d634279176b5358727d8f2cc1e65b65f43ce2f8bfb0`.
1. Update the security hash in version.json > pnpm > currentDigest.

### Changes in Renovate configuration

1. Run `renovate-config-validator`

## TODO

1. Handle renovate updates in Github Actions with pinned digests and tags.
    - Problems with the workaround of version.json is that the PR is modified outside renovate and then shows up a warning of not autorebasing.
        - Then it (maybe) can't automerge because of this.
    - Maybe submit feature to support pinned tags to upstream projen.
    - See example of workarounds in https://github.com/cdktf/cdktf-provider-project/blob/main/src/index.ts
