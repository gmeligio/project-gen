# project-gen


## Contributing

### Changes in Renovate configuration

1. Run `renovate-config-validator`

## TODO

1. Handle renovate updates in Github Actions with pinned digests and tags.
    - Problems with the workaround of version.json is that the PR is modified outside renovate and then shows up a warning of not autorebasing.
        - Then it (maybe) can't automerge because of this.
    - Maybe submit feature to support pinned tags to upstream projen.
    - See example of workarounds in https://github.com/cdktf/cdktf-provider-project/blob/main/src/index.ts
