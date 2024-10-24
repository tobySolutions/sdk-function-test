# Changelog

## 3.4.0

### Minor Changes

- f61a0bd: add sgx to support to functions proxy and sdk

## 3.3.0

### Minor Changes

- 2980e99: Introduces Blake3Hash field

### Patch Changes

- 2980e99: Tweak FN Wasm errors, shouldn't require arg.

## 3.2.0

### Minor Changes

- 319fc04: add sgx flag to function deployment

## 3.1.0

### Minor Changes

- 7e75010: add Folder nagivation support for Fleek storage

## 3.0.0

### Major Changes

- d8c9fef: Distribute ESM for web and CJS for NodeJs. Using the exports and fallback node package.json protocols

## 2.3.0

### Minor Changes

- c95a0c4: Rationalise the SDK build processes

## 2.2.1

### Patch Changes

- 4733921: handle 429 error on sdk

## 2.2.0

### Minor Changes

- 9ed8752: The SDK Nodejs exclusive error message is now about SDK feature

### Patch Changes

- 00e3b1a: Extend exports with upload pin responses
- 94cf417: Bump versions for CI

## 2.1.5

### Patch Changes

- e25f154: skip backing up functions on permenant storage layers

## 2.1.4

### Patch Changes

- ab7a8c7: Update to environment variables

## 2.1.2

### Patch Changes

- d106194: Fix private file upload

## 2.1.1

### Patch Changes

- fda42e5: Upload files to private storage in storage client

## 2.1.0

### Minor Changes

- 95dbaf2: Single purpose for text utilities

## 2.1.0

### Minor Changes

- da2190b: Add EMAIL channel

## 2.0.0

### Major Changes

- 61bcbe9: Add the serverless functions service

### Minor Changes

- e553fdd: Retry logic that make upload of very big files more reliable
- 8a88f28: Resolves DNS configuration display issues, introduces a non-blocking update notification system, and corrects terminology from 'whitelabel' to 'whitelisting', among other enhancements.
- c36112d: Replace white label domains with white list domains

## 1.4.0

### Minor Changes

- dcdc34d: Given that SDK uses a bundler, move bundled dependencies to package.json's devDependencies.

## 1.3.3

### Patch Changes

- @fleekxyz/gql-client-utils@1.2.3

## 1.3.2

### Patch Changes

- Updated dependencies [34123e6]
  - @fleekxyz/errors@1.3.0
  - @fleekxyz/gql-client-utils@1.2.2
  - @fleekxyz/auth@1.1.1

## 1.3.1

### Patch Changes

- @fleekxyz/gql-client-utils@1.2.1

## 1.3.0

### Minor Changes

- 209599d: Deprecate client generated process, favouring SDK. Further improvements for the NPM packaging for CLI dependencies which is used as POC, to surface most of the work that'll be required across the project packages. Modifies ESLint custom plugins to be importable in ESM vs CJS. The CLI builder is now deprecated in favour of Typescript's tsc. The CLI is now a ESM.

### Patch Changes

- Updated dependencies [209599d]
  - @fleekxyz/auth@1.1.0
  - @fleekxyz/env-guards@1.2.0
  - @fleekxyz/errors@1.2.0
  - @fleekxyz/gql-client-utils@1.2.0

## 1.2.0

### Minor Changes

- 074e0dc: Deprecate client-generated in-package schemas, to favour the SDK package as its origin.

### Patch Changes

- Updated dependencies [074e0dc]
  - @fleekxyz/gql-client-utils@1.1.0
  - @fleekxyz/env-guards@1.1.0
  - @fleekxyz/errors@1.1.1
  - @fleekxyz/auth@1.0.5

## 1.1.0

### Minor Changes

- 0793cc0: Add DNSLink improvements and refactor

### Patch Changes

- Updated dependencies [0793cc0]
  - @fleekxyz/errors@1.1.0
  - @fleekxyz/auth@1.0.4

## 1.0.3

### Patch Changes

- ef29866: add delete endpoint on proxy and on sdk and cli

## 1.0.2

### Patch Changes

- @fleekxyz/errors@1.0.3
- @fleekxyz/auth@1.0.3

## 1.0.1

### Patch Changes

- @fleekxyz/errors@1.0.2
- @fleekxyz/auth@1.0.2

## 1.0.0

### Major Changes

- 84dd190: feat: [APP2-126] [DNS Link for sites] - BE

### Patch Changes

- Updated dependencies [84dd190]
  - @fleekxyz/secrets@1.0.0
  - @fleekxyz/errors@0.0.1
  - @fleekxyz/auth@0.0.1

## 0.7.2 (2023-10-26)

### Features

- **app, graphql:** add mutation for cache purge ([#1450](https://github.com/FleekHQ/fleek/issues/1450)) ([c601e71](https://github.com/FleekHQ/fleek/commit/c601e71679d6c6d90385bb27d188666b3d3c409c))
- **app:** build failed reasons ([#1553](https://github.com/FleekHQ/fleek/issues/1553)) ([b5d017b](https://github.com/FleekHQ/fleek/commit/b5d017b5ad2f0485698ff72d8eaf1cc8a005ec7e))
- **app:** store build logs and create Github API Gateway ([#1292](https://github.com/FleekHQ/fleek/issues/1292)) ([3efcc32](https://github.com/FleekHQ/fleek/commit/3efcc3254a839099ac4b1f274099d3caf468090d))
- Automatically run Docker with MySQL server for integration tests if it doesn't exist ([#1385](https://github.com/FleekHQ/fleek/issues/1385)) ([122cf2e](https://github.com/FleekHQ/fleek/commit/122cf2e8fce2e9abc257b8493c46672f1dafaa5f))
- **cli, sdk:** CLI 0.7.0 and SDK 0.7.0 ([#1763](https://github.com/FleekHQ/fleek/issues/1763)) ([3ba7f98](https://github.com/FleekHQ/fleek/commit/3ba7f986d484aa622a0dcf78196b3c4f0cd5a59e))
- ENS Integration ([#1045](https://github.com/FleekHQ/fleek/issues/1045)) ([d0cf4b0](https://github.com/FleekHQ/fleek/commit/d0cf4b02aeabba6176d32dd38506e06a8f8159f4))
- **graphql,prisma:** managed secrets / env variables ([#1318](https://github.com/FleekHQ/fleek/issues/1318)) ([d23efde](https://github.com/FleekHQ/fleek/commit/d23efde413feaca7b5019045c5d018e1d77824e5))
- **graphql:** custom trigger deployment workflow + check for invalid deployments ([#1747](https://github.com/FleekHQ/fleek/issues/1747)) ([dd8a608](https://github.com/FleekHQ/fleek/commit/dd8a60830a21936fd6d956c532b5084ae06d1990))
- **graphql:** optional emails, removing web3auth provider ([#1489](https://github.com/FleekHQ/fleek/issues/1489)) ([ec9c1d9](https://github.com/FleekHQ/fleek/commit/ec9c1d9acf02d8cc3f2d539294d06e5b436a1a78))
- **graphql:** support creating multiple ENS for one IPNS ([#1229](https://github.com/FleekHQ/fleek/issues/1229)) ([d600c6a](https://github.com/FleekHQ/fleek/commit/d600c6a21a4e221a6170709eb2c77da195056b6a))
- **graphql:** use redirect_uri query param for Github callback URL definition ([#1605](https://github.com/FleekHQ/fleek/issues/1605)) ([191d0c2](https://github.com/FleekHQ/fleek/commit/191d0c2ba6962efee2694c1de6f5fcaf39e876d0))
- managed deployments, aws cdk and state machines ([#979](https://github.com/FleekHQ/fleek/issues/979)) ([06040a7](https://github.com/FleekHQ/fleek/commit/06040a7e157feee927384642ee8580f02d9b6dab))
- pgw hard delete ([#1801](https://github.com/FleekHQ/fleek/issues/1801)) ([3e29cdf](https://github.com/FleekHQ/fleek/commit/3e29cdfee3620f5b45400d2a452ec33854a80e74))
- primary domain ([#1829](https://github.com/FleekHQ/fleek/issues/1829)) ([8260fd8](https://github.com/FleekHQ/fleek/commit/8260fd8c091d213cdef0c912ec7f28e4e7a753b5))
- **prisma, graphql:** Delete user with all dependencies ([89c52dd](https://github.com/FleekHQ/fleek/commit/89c52ddfcba914ca9288399af9f4f4dcad285c4d))
- **prisma, graphql:** Delete user with all dependencies ([60ac694](https://github.com/FleekHQ/fleek/commit/60ac694cba6fef10624814c7acd3713480160150))
- propagate commit hash to graphql/sdk/cli ([#1498](https://github.com/FleekHQ/fleek/issues/1498)) ([3e83511](https://github.com/FleekHQ/fleek/commit/3e83511c150bcd7e0bbf6e2828a2440abedc578d))
- sdk tests ([#1176](https://github.com/FleekHQ/fleek/issues/1176)) ([201e038](https://github.com/FleekHQ/fleek/commit/201e038a07d6c88e7f3ed424ce4a3898cf6e99f0))
- **sdk:** integration tests for IPFS client ([857e7aa](https://github.com/FleekHQ/fleek/commit/857e7aa0f90f6bffd51b94a2d68ef51c36027984))
- **sdk:** ipfs client - integration tests ([9526fdd](https://github.com/FleekHQ/fleek/commit/9526fdd410ca6b5d2523777b65af5f9161aca0ac))
- **sdk:** missing integration tests ([ee7f5be](https://github.com/FleekHQ/fleek/commit/ee7f5befbb88219366d7566a6939101b125cbdc8))
- **sdk:** missing tests for IPNS client ([2635540](https://github.com/FleekHQ/fleek/commit/26355407ed61d6e03e8c2ad8e5685376505712ff))
- Site dependencies for deleting confirmation dialog ([#1774](https://github.com/FleekHQ/fleek/issues/1774)) ([0b59f14](https://github.com/FleekHQ/fleek/commit/0b59f144e73502f7c164bc2102c3501bfad6b37f))
- Site dependencies for deleting confirmation dialog ([#1774](https://github.com/FleekHQ/fleek/issues/1774)) ([cc16980](https://github.com/FleekHQ/fleek/commit/cc169803b7e35b47dc0e188cd2f48fa433db3cb5))
- site soft delete ([#1725](https://github.com/FleekHQ/fleek/issues/1725)) ([a3718cb](https://github.com/FleekHQ/fleek/commit/a3718cb0d250d6c675855350cb9d1b58b9627adc))
- site soft delete ([#1725](https://github.com/FleekHQ/fleek/issues/1725)) ([71352e1](https://github.com/FleekHQ/fleek/commit/71352e140862e6cff57de930353e3471ead3e89a))
- **sites,graphql,sdk:** Pass options to `generateSlug` to avoid impolite slugs ([#1846](https://github.com/FleekHQ/fleek/issues/1846)) ([18eee7f](https://github.com/FleekHQ/fleek/commit/18eee7f572fdbf9293fae6febae3a3d5dc297564))
- storage backup providers ([#1495](https://github.com/FleekHQ/fleek/issues/1495)) ([0fabad8](https://github.com/FleekHQ/fleek/commit/0fabad88415cedb2c3c21548afa14a949a088954))
- storage pins ([#1370](https://github.com/FleekHQ/fleek/issues/1370)) ([9ad1bac](https://github.com/FleekHQ/fleek/commit/9ad1bacca1c6d0775fbb60282de3d0e8d91b98d2))
- **tester, sdk:** integrate IPFS mock directly via tester package ([61b439a](https://github.com/FleekHQ/fleek/commit/61b439a0ed35f0881c19fd33c044d64dc15ccbc3))
- united prisma ([#1198](https://github.com/FleekHQ/fleek/issues/1198)) ([e92f5b5](https://github.com/FleekHQ/fleek/commit/e92f5b5881d574b6e8b390d46c2e884481f4ddc3))

### Bug Fixes

- application white-labeled domain ([#1463](https://github.com/FleekHQ/fleek/issues/1463)) ([3b46df6](https://github.com/FleekHQ/fleek/commit/3b46df632cd1134f7ab59e21f518d57cb50e1b7e))
- **graphql:** store pin to global pin table before adding it to deployment relation ([#1469](https://github.com/FleekHQ/fleek/issues/1469)) ([4028cf1](https://github.com/FleekHQ/fleek/commit/4028cf1d8af69458d9f4c634ae39aaca05c454ba))
- ipfs sdk ([#1165](https://github.com/FleekHQ/fleek/issues/1165)) ([37e72b6](https://github.com/FleekHQ/fleek/commit/37e72b62fd29d4cce90625926d0c7d71e5897bc1))
- screenshot color scheme ([#1839](https://github.com/FleekHQ/fleek/issues/1839)) ([93391ef](https://github.com/FleekHQ/fleek/commit/93391ef88ed6cc9cda7a48051094870b3bf36b86))
- **sdk:** correct types field in package.json ([#1837](https://github.com/FleekHQ/fleek/issues/1837)) ([621cc52](https://github.com/FleekHQ/fleek/commit/621cc526be6a99a64934a6bc3aadb8df3a4a37ab))
- **sdk:** integratin tests ([c55adc1](https://github.com/FleekHQ/fleek/commit/c55adc1a64035fdb264fcedd04f160de4813229b))
- **sdk:** integratin tests ([7ce300e](https://github.com/FleekHQ/fleek/commit/7ce300ec1d152a786e406fc79582df99ecef2c2a))

### Miscellaneous Chores

- release 0.5.0 ([#1169](https://github.com/FleekHQ/fleek/issues/1169)) ([df8e574](https://github.com/FleekHQ/fleek/commit/df8e574c8efbe896023d9b74fc057989744f3b82))
- release 0.6.0. ([#1238](https://github.com/FleekHQ/fleek/issues/1238)) ([11a5bbd](https://github.com/FleekHQ/fleek/commit/11a5bbd7ffef6b4082d2ec0ea7bca50d84876508))
- release 0.7.1. ([3c7ad09](https://github.com/FleekHQ/fleek/commit/3c7ad09dbad205bcbeea76f3becae2d343fa1d59))
- release 0.7.1. ([32fb11b](https://github.com/FleekHQ/fleek/commit/32fb11b36d8bbdd70e98a5330918d289aec91a63))
- release 0.7.1. ([99469dc](https://github.com/FleekHQ/fleek/commit/99469dc145cb90cd5b4d7b81bf796fc79ab07215))
- release 0.7.2. ([3993a37](https://github.com/FleekHQ/fleek/commit/3993a37776ca5054ef64c0358e32c9e8fc99c4a5))

## 0.7.1 (2023-10-12)

### Features

- **app, graphql:** add mutation for cache purge ([#1450](https://github.com/FleekHQ/fleek/issues/1450)) ([c601e71](https://github.com/FleekHQ/fleek/commit/c601e71679d6c6d90385bb27d188666b3d3c409c))
- **app:** build failed reasons ([#1553](https://github.com/FleekHQ/fleek/issues/1553)) ([b5d017b](https://github.com/FleekHQ/fleek/commit/b5d017b5ad2f0485698ff72d8eaf1cc8a005ec7e))
- application credentials ([#946](https://github.com/FleekHQ/fleek/issues/946)) ([0f06797](https://github.com/FleekHQ/fleek/commit/0f0679788f26cd5e515fb3669686fe9537eed34f))
- application credentials cli ([#1007](https://github.com/FleekHQ/fleek/issues/1007)) ([a3cf51d](https://github.com/FleekHQ/fleek/commit/a3cf51d86beb8368aa2e41741aedb9631495d5b3))
- **app:** store build logs and create Github API Gateway ([#1292](https://github.com/FleekHQ/fleek/issues/1292)) ([3efcc32](https://github.com/FleekHQ/fleek/commit/3efcc3254a839099ac4b1f274099d3caf468090d))
- Automatically run Docker with MySQL server for integration tests if it doesn't exist ([#1385](https://github.com/FleekHQ/fleek/issues/1385)) ([122cf2e](https://github.com/FleekHQ/fleek/commit/122cf2e8fce2e9abc257b8493c46672f1dafaa5f))
- **cli, sdk:** CLI 0.7.0 and SDK 0.7.0 ([#1763](https://github.com/FleekHQ/fleek/issues/1763)) ([3ba7f98](https://github.com/FleekHQ/fleek/commit/3ba7f986d484aa622a0dcf78196b3c4f0cd5a59e))
- **cli:** command to list projects, option name to switch or create … ([#1145](https://github.com/FleekHQ/fleek/issues/1145)) ([9c9a794](https://github.com/FleekHQ/fleek/commit/9c9a794b56b2795ac3a970a0dab4692a88a44929))
- ENS Integration ([#1045](https://github.com/FleekHQ/fleek/issues/1045)) ([d0cf4b0](https://github.com/FleekHQ/fleek/commit/d0cf4b02aeabba6176d32dd38506e06a8f8159f4))
- **graphql,prisma:** managed secrets / env variables ([#1318](https://github.com/FleekHQ/fleek/issues/1318)) ([d23efde](https://github.com/FleekHQ/fleek/commit/d23efde413feaca7b5019045c5d018e1d77824e5))
- **graphql:** custom trigger deployment workflow + check for invalid deployments ([#1747](https://github.com/FleekHQ/fleek/issues/1747)) ([dd8a608](https://github.com/FleekHQ/fleek/commit/dd8a60830a21936fd6d956c532b5084ae06d1990))
- **graphql:** optional emails, removing web3auth provider ([#1489](https://github.com/FleekHQ/fleek/issues/1489)) ([ec9c1d9](https://github.com/FleekHQ/fleek/commit/ec9c1d9acf02d8cc3f2d539294d06e5b436a1a78))
- **graphql:** queries mutations schema for pgw ([#987](https://github.com/FleekHQ/fleek/issues/987)) ([ef4a14d](https://github.com/FleekHQ/fleek/commit/ef4a14d5b5d6c24f7eea31b5fdb957e4aa4d5b80))
- **graphql:** support creating multiple ENS for one IPNS ([#1229](https://github.com/FleekHQ/fleek/issues/1229)) ([d600c6a](https://github.com/FleekHQ/fleek/commit/d600c6a21a4e221a6170709eb2c77da195056b6a))
- **graphql:** use redirect_uri query param for Github callback URL definition ([#1605](https://github.com/FleekHQ/fleek/issues/1605)) ([191d0c2](https://github.com/FleekHQ/fleek/commit/191d0c2ba6962efee2694c1de6f5fcaf39e876d0))
- managed deployments, aws cdk and state machines ([#979](https://github.com/FleekHQ/fleek/issues/979)) ([06040a7](https://github.com/FleekHQ/fleek/commit/06040a7e157feee927384642ee8580f02d9b6dab))
- pgw hard delete ([#1801](https://github.com/FleekHQ/fleek/issues/1801)) ([3e29cdf](https://github.com/FleekHQ/fleek/commit/3e29cdfee3620f5b45400d2a452ec33854a80e74))
- primary domain ([#1829](https://github.com/FleekHQ/fleek/issues/1829)) ([8260fd8](https://github.com/FleekHQ/fleek/commit/8260fd8c091d213cdef0c912ec7f28e4e7a753b5))
- **prisma, graphql:** Delete user with all dependencies ([89c52dd](https://github.com/FleekHQ/fleek/commit/89c52ddfcba914ca9288399af9f4f4dcad285c4d))
- **prisma, graphql:** Delete user with all dependencies ([60ac694](https://github.com/FleekHQ/fleek/commit/60ac694cba6fef10624814c7acd3713480160150))
- propagate commit hash to graphql/sdk/cli ([#1498](https://github.com/FleekHQ/fleek/issues/1498)) ([3e83511](https://github.com/FleekHQ/fleek/commit/3e83511c150bcd7e0bbf6e2828a2440abedc578d))
- sdk tests ([#1176](https://github.com/FleekHQ/fleek/issues/1176)) ([201e038](https://github.com/FleekHQ/fleek/commit/201e038a07d6c88e7f3ed424ce4a3898cf6e99f0))
- **sdk:** every service now use unified graphql service ([#969](https://github.com/FleekHQ/fleek/issues/969)) ([33fe0ea](https://github.com/FleekHQ/fleek/commit/33fe0eab6e736e2c71120672d5ce421836d84995))
- **sdk:** integration tests for IPFS client ([857e7aa](https://github.com/FleekHQ/fleek/commit/857e7aa0f90f6bffd51b94a2d68ef51c36027984))
- **sdk:** ipfs client - integration tests ([9526fdd](https://github.com/FleekHQ/fleek/commit/9526fdd410ca6b5d2523777b65af5f9161aca0ac))
- **sdk:** missing integration tests ([ee7f5be](https://github.com/FleekHQ/fleek/commit/ee7f5befbb88219366d7566a6939101b125cbdc8))
- **sdk:** missing tests for IPNS client ([2635540](https://github.com/FleekHQ/fleek/commit/26355407ed61d6e03e8c2ad8e5685376505712ff))
- Site dependencies for deleting confirmation dialog ([#1774](https://github.com/FleekHQ/fleek/issues/1774)) ([0b59f14](https://github.com/FleekHQ/fleek/commit/0b59f144e73502f7c164bc2102c3501bfad6b37f))
- Site dependencies for deleting confirmation dialog ([#1774](https://github.com/FleekHQ/fleek/issues/1774)) ([cc16980](https://github.com/FleekHQ/fleek/commit/cc169803b7e35b47dc0e188cd2f48fa433db3cb5))
- site ipns improvements ([#988](https://github.com/FleekHQ/fleek/issues/988)) ([3e6913f](https://github.com/FleekHQ/fleek/commit/3e6913f3fd72775a6114ffbca652425efc39c23b))
- site soft delete ([#1725](https://github.com/FleekHQ/fleek/issues/1725)) ([a3718cb](https://github.com/FleekHQ/fleek/commit/a3718cb0d250d6c675855350cb9d1b58b9627adc))
- site soft delete ([#1725](https://github.com/FleekHQ/fleek/issues/1725)) ([71352e1](https://github.com/FleekHQ/fleek/commit/71352e140862e6cff57de930353e3471ead3e89a))
- **sites-prisma, graphql, sdk, cli:** add a IpnsRecord for a Site and automatic publishing during deployment ([#925](https://github.com/FleekHQ/fleek/issues/925)) ([ebdd18f](https://github.com/FleekHQ/fleek/commit/ebdd18ff27082f4f7857ebc0d95cf86288f2887f))
- **sites,graphql,sdk:** Pass options to `generateSlug` to avoid impolite slugs ([#1846](https://github.com/FleekHQ/fleek/issues/1846)) ([18eee7f](https://github.com/FleekHQ/fleek/commit/18eee7f572fdbf9293fae6febae3a3d5dc297564))
- storage backup providers ([#1495](https://github.com/FleekHQ/fleek/issues/1495)) ([0fabad8](https://github.com/FleekHQ/fleek/commit/0fabad88415cedb2c3c21548afa14a949a088954))
- storage pins ([#1370](https://github.com/FleekHQ/fleek/issues/1370)) ([9ad1bac](https://github.com/FleekHQ/fleek/commit/9ad1bacca1c6d0775fbb60282de3d0e8d91b98d2))
- **tester, sdk:** integrate IPFS mock directly via tester package ([61b439a](https://github.com/FleekHQ/fleek/commit/61b439a0ed35f0881c19fd33c044d64dc15ccbc3))
- united prisma ([#1198](https://github.com/FleekHQ/fleek/issues/1198)) ([e92f5b5](https://github.com/FleekHQ/fleek/commit/e92f5b5881d574b6e8b390d46c2e884481f4ddc3))

### Bug Fixes

- application white-labeled domain ([#1463](https://github.com/FleekHQ/fleek/issues/1463)) ([3b46df6](https://github.com/FleekHQ/fleek/commit/3b46df632cd1134f7ab59e21f518d57cb50e1b7e))
- **graphql:** store pin to global pin table before adding it to deployment relation ([#1469](https://github.com/FleekHQ/fleek/issues/1469)) ([4028cf1](https://github.com/FleekHQ/fleek/commit/4028cf1d8af69458d9f4c634ae39aaca05c454ba))
- ipfs sdk ([#1165](https://github.com/FleekHQ/fleek/issues/1165)) ([37e72b6](https://github.com/FleekHQ/fleek/commit/37e72b62fd29d4cce90625926d0c7d71e5897bc1))
- release cli deploy ([#975](https://github.com/FleekHQ/fleek/issues/975)) ([0c08844](https://github.com/FleekHQ/fleek/commit/0c088448d9fdcb6af4caf42dbb0aebc6beaf7ed7))
- screenshot color scheme ([#1839](https://github.com/FleekHQ/fleek/issues/1839)) ([93391ef](https://github.com/FleekHQ/fleek/commit/93391ef88ed6cc9cda7a48051094870b3bf36b86))
- **sdk:** `axios` replaced by `isomorphic-fetch` to prevent errors in UI ([#1021](https://github.com/FleekHQ/fleek/issues/1021)) ([3b261e5](https://github.com/FleekHQ/fleek/commit/3b261e5e93f9ca39dd9cd94da8cb9ff2b64c482f))
- **sdk:** `axios` replaced by `isomorphic-fetch` to prevent errors in UI ([#1021](https://github.com/FleekHQ/fleek/issues/1021)) ([cc8dc1c](https://github.com/FleekHQ/fleek/commit/cc8dc1c4eaaa0e36454987865032e9e7be785cd0))
- **sdk:** correct types field in package.json ([#1837](https://github.com/FleekHQ/fleek/issues/1837)) ([621cc52](https://github.com/FleekHQ/fleek/commit/621cc526be6a99a64934a6bc3aadb8df3a4a37ab))
- **sdk:** integratin tests ([c55adc1](https://github.com/FleekHQ/fleek/commit/c55adc1a64035fdb264fcedd04f160de4813229b))
- **sdk:** integratin tests ([7ce300e](https://github.com/FleekHQ/fleek/commit/7ce300ec1d152a786e406fc79582df99ecef2c2a))

### Miscellaneous Chores

- **cli, sdk:** release 0.4.0 ([61edcd4](https://github.com/FleekHQ/fleek/commit/61edcd4acd72e1a47f1166333c0bb8d9e75c216f))
- release 0.5.0 ([#1169](https://github.com/FleekHQ/fleek/issues/1169)) ([df8e574](https://github.com/FleekHQ/fleek/commit/df8e574c8efbe896023d9b74fc057989744f3b82))
- release 0.6.0. ([#1238](https://github.com/FleekHQ/fleek/issues/1238)) ([11a5bbd](https://github.com/FleekHQ/fleek/commit/11a5bbd7ffef6b4082d2ec0ea7bca50d84876508))
- release 0.7.1. ([3c7ad09](https://github.com/FleekHQ/fleek/commit/3c7ad09dbad205bcbeea76f3becae2d343fa1d59))
- release 0.7.1. ([32fb11b](https://github.com/FleekHQ/fleek/commit/32fb11b36d8bbdd70e98a5330918d289aec91a63))
- release 0.7.1. ([99469dc](https://github.com/FleekHQ/fleek/commit/99469dc145cb90cd5b4d7b81bf796fc79ab07215))

## 0.7.0 (2023-09-12)

### Features

- add metadata and Site relation for Pins ([#961](https://github.com/FleekHQ/fleek/issues/961)) ([102e1c3](https://github.com/FleekHQ/fleek/commit/102e1c3a9557367adda157d5b19b56adc94f00da))
- **app, graphql:** add mutation for cache purge ([#1450](https://github.com/FleekHQ/fleek/issues/1450)) ([c601e71](https://github.com/FleekHQ/fleek/commit/c601e71679d6c6d90385bb27d188666b3d3c409c))
- **app:** build failed reasons ([#1553](https://github.com/FleekHQ/fleek/issues/1553)) ([b5d017b](https://github.com/FleekHQ/fleek/commit/b5d017b5ad2f0485698ff72d8eaf1cc8a005ec7e))
- application credentials ([#946](https://github.com/FleekHQ/fleek/issues/946)) ([0f06797](https://github.com/FleekHQ/fleek/commit/0f0679788f26cd5e515fb3669686fe9537eed34f))
- application credentials cli ([#1007](https://github.com/FleekHQ/fleek/issues/1007)) ([a3cf51d](https://github.com/FleekHQ/fleek/commit/a3cf51d86beb8368aa2e41741aedb9631495d5b3))
- **app:** store build logs and create Github API Gateway ([#1292](https://github.com/FleekHQ/fleek/issues/1292)) ([3efcc32](https://github.com/FleekHQ/fleek/commit/3efcc3254a839099ac4b1f274099d3caf468090d))
- Automatically run Docker with MySQL server for integration tests if it doesn't exist ([#1385](https://github.com/FleekHQ/fleek/issues/1385)) ([122cf2e](https://github.com/FleekHQ/fleek/commit/122cf2e8fce2e9abc257b8493c46672f1dafaa5f))
- **cli, sdk:** CLI 0.7.0 and SDK 0.7.0 ([#1763](https://github.com/FleekHQ/fleek/issues/1763)) ([3ba7f98](https://github.com/FleekHQ/fleek/commit/3ba7f986d484aa622a0dcf78196b3c4f0cd5a59e))
- **cli:** command to list projects, option name to switch or create … ([#1145](https://github.com/FleekHQ/fleek/issues/1145)) ([9c9a794](https://github.com/FleekHQ/fleek/commit/9c9a794b56b2795ac3a970a0dab4692a88a44929))
- ENS Integration ([#1045](https://github.com/FleekHQ/fleek/issues/1045)) ([d0cf4b0](https://github.com/FleekHQ/fleek/commit/d0cf4b02aeabba6176d32dd38506e06a8f8159f4))
- **graphql,prisma:** managed secrets / env variables ([#1318](https://github.com/FleekHQ/fleek/issues/1318)) ([d23efde](https://github.com/FleekHQ/fleek/commit/d23efde413feaca7b5019045c5d018e1d77824e5))
- **graphql:** delete personal access token returns PersonalAccessToken ([#873](https://github.com/FleekHQ/fleek/issues/873)) ([c3677a6](https://github.com/FleekHQ/fleek/commit/c3677a6b747f7cd27242dffbc1c382b356e4e07e))
- **graphql:** integration tests with prisma ([#790](https://github.com/FleekHQ/fleek/issues/790)) ([fbf2a61](https://github.com/FleekHQ/fleek/commit/fbf2a616bc32b9233d73fcb65453ce089c7aafe8))
- **graphql:** optional emails, removing web3auth provider ([#1489](https://github.com/FleekHQ/fleek/issues/1489)) ([ec9c1d9](https://github.com/FleekHQ/fleek/commit/ec9c1d9acf02d8cc3f2d539294d06e5b436a1a78))
- **graphql:** queries mutations schema for pgw ([#987](https://github.com/FleekHQ/fleek/issues/987)) ([ef4a14d](https://github.com/FleekHQ/fleek/commit/ef4a14d5b5d6c24f7eea31b5fdb957e4aa4d5b80))
- **graphql:** support creating multiple ENS for one IPNS ([#1229](https://github.com/FleekHQ/fleek/issues/1229)) ([d600c6a](https://github.com/FleekHQ/fleek/commit/d600c6a21a4e221a6170709eb2c77da195056b6a))
- **graphql:** use redirect_uri query param for Github callback URL definition ([#1605](https://github.com/FleekHQ/fleek/issues/1605)) ([191d0c2](https://github.com/FleekHQ/fleek/commit/191d0c2ba6962efee2694c1de6f5fcaf39e876d0))
- managed deployments, aws cdk and state machines ([#979](https://github.com/FleekHQ/fleek/issues/979)) ([06040a7](https://github.com/FleekHQ/fleek/commit/06040a7e157feee927384642ee8580f02d9b6dab))
- **prisma, graphql:** Delete user with all dependencies ([89c52dd](https://github.com/FleekHQ/fleek/commit/89c52ddfcba914ca9288399af9f4f4dcad285c4d))
- **prisma, graphql:** Delete user with all dependencies ([60ac694](https://github.com/FleekHQ/fleek/commit/60ac694cba6fef10624814c7acd3713480160150))
- propagate commit hash to graphql/sdk/cli ([#1498](https://github.com/FleekHQ/fleek/issues/1498)) ([3e83511](https://github.com/FleekHQ/fleek/commit/3e83511c150bcd7e0bbf6e2828a2440abedc578d))
- sdk tests ([#1176](https://github.com/FleekHQ/fleek/issues/1176)) ([201e038](https://github.com/FleekHQ/fleek/commit/201e038a07d6c88e7f3ed424ce4a3898cf6e99f0))
- **sdk, cli:** SDK `ipfs` client exposes `getIpfsFiles` ([#742](https://github.com/FleekHQ/fleek/issues/742)) ([b57c6e3](https://github.com/FleekHQ/fleek/commit/b57c6e331c93375a499fe691ab975669b5dc64f8))
- **sdk:** every service now use unified graphql service ([#969](https://github.com/FleekHQ/fleek/issues/969)) ([33fe0ea](https://github.com/FleekHQ/fleek/commit/33fe0eab6e736e2c71120672d5ce421836d84995))
- **sdk:** integration tests for IPFS client ([857e7aa](https://github.com/FleekHQ/fleek/commit/857e7aa0f90f6bffd51b94a2d68ef51c36027984))
- **sdk:** ipfs client - integration tests ([9526fdd](https://github.com/FleekHQ/fleek/commit/9526fdd410ca6b5d2523777b65af5f9161aca0ac))
- **sdk:** missing integration tests ([ee7f5be](https://github.com/FleekHQ/fleek/commit/ee7f5befbb88219366d7566a6939101b125cbdc8))
- **sdk:** missing tests for IPNS client ([2635540](https://github.com/FleekHQ/fleek/commit/26355407ed61d6e03e8c2ad8e5685376505712ff))
- site ipns improvements ([#988](https://github.com/FleekHQ/fleek/issues/988)) ([3e6913f](https://github.com/FleekHQ/fleek/commit/3e6913f3fd72775a6114ffbca652425efc39c23b))
- **sites-prisma, graphql, sdk, cli:** add a IpnsRecord for a Site and automatic publishing during deployment ([#925](https://github.com/FleekHQ/fleek/issues/925)) ([ebdd18f](https://github.com/FleekHQ/fleek/commit/ebdd18ff27082f4f7857ebc0d95cf86288f2887f))
- storage backup providers ([#1495](https://github.com/FleekHQ/fleek/issues/1495)) ([0fabad8](https://github.com/FleekHQ/fleek/commit/0fabad88415cedb2c3c21548afa14a949a088954))
- storage pins ([#1370](https://github.com/FleekHQ/fleek/issues/1370)) ([9ad1bac](https://github.com/FleekHQ/fleek/commit/9ad1bacca1c6d0775fbb60282de3d0e8d91b98d2))
- **tester, sdk:** integrate IPFS mock directly via tester package ([61b439a](https://github.com/FleekHQ/fleek/commit/61b439a0ed35f0881c19fd33c044d64dc15ccbc3))
- **ui:** IPFS Storage ([#945](https://github.com/FleekHQ/fleek/issues/945)) ([ce7d76b](https://github.com/FleekHQ/fleek/commit/ce7d76b9332b13d1b0702d1c570ceb474c6618f0))
- **ui:** logo in navigation bar is only symbol without the Fleek ([#937](https://github.com/FleekHQ/fleek/issues/937)) ([27e246e](https://github.com/FleekHQ/fleek/commit/27e246e44228d21db222156971a2512c1672669b))
- united prisma ([#1198](https://github.com/FleekHQ/fleek/issues/1198)) ([e92f5b5](https://github.com/FleekHQ/fleek/commit/e92f5b5881d574b6e8b390d46c2e884481f4ddc3))

### Bug Fixes

- application white-labeled domain ([#1463](https://github.com/FleekHQ/fleek/issues/1463)) ([3b46df6](https://github.com/FleekHQ/fleek/commit/3b46df632cd1134f7ab59e21f518d57cb50e1b7e))
- **cli:** errors are propagated from graphql ([#879](https://github.com/FleekHQ/fleek/issues/879)) ([9d87d82](https://github.com/FleekHQ/fleek/commit/9d87d826c6467e54a230bc30ba5fcd332486e84e))
- **graphql:** store pin to global pin table before adding it to deployment relation ([#1469](https://github.com/FleekHQ/fleek/issues/1469)) ([4028cf1](https://github.com/FleekHQ/fleek/commit/4028cf1d8af69458d9f4c634ae39aaca05c454ba))
- hash prompt in `ipns publish` command in cli, fix SDK ipns client ([#892](https://github.com/FleekHQ/fleek/issues/892)) ([eb40258](https://github.com/FleekHQ/fleek/commit/eb402586bb39a9b7cdd1a6f933044f60d2bd4849))
- ipfs sdk ([#1165](https://github.com/FleekHQ/fleek/issues/1165)) ([37e72b6](https://github.com/FleekHQ/fleek/commit/37e72b62fd29d4cce90625926d0c7d71e5897bc1))
- release cli deploy ([#975](https://github.com/FleekHQ/fleek/issues/975)) ([0c08844](https://github.com/FleekHQ/fleek/commit/0c088448d9fdcb6af4caf42dbb0aebc6beaf7ed7))
- **sdk:** `axios` replaced by `isomorphic-fetch` to prevent errors in UI ([#1021](https://github.com/FleekHQ/fleek/issues/1021)) ([3b261e5](https://github.com/FleekHQ/fleek/commit/3b261e5e93f9ca39dd9cd94da8cb9ff2b64c482f))
- **sdk:** `axios` replaced by `isomorphic-fetch` to prevent errors in UI ([#1021](https://github.com/FleekHQ/fleek/issues/1021)) ([cc8dc1c](https://github.com/FleekHQ/fleek/commit/cc8dc1c4eaaa0e36454987865032e9e7be785cd0))
- **sdk:** integratin tests ([c55adc1](https://github.com/FleekHQ/fleek/commit/c55adc1a64035fdb264fcedd04f160de4813229b))
- **sdk:** integratin tests ([7ce300e](https://github.com/FleekHQ/fleek/commit/7ce300ec1d152a786e406fc79582df99ecef2c2a))
- unified build versions for ipfs-http-client ([#952](https://github.com/FleekHQ/fleek/issues/952)) ([d2909eb](https://github.com/FleekHQ/fleek/commit/d2909eb89756b953cfc61a1b31010934e5116627))

### Miscellaneous Chores

- **cli, sdk:** release 0.4.0 ([61edcd4](https://github.com/FleekHQ/fleek/commit/61edcd4acd72e1a47f1166333c0bb8d9e75c216f))
- release 0.2.2-rc.3 ([#869](https://github.com/FleekHQ/fleek/issues/869)) ([c04c97c](https://github.com/FleekHQ/fleek/commit/c04c97cc55ef3c37ce170335e9b7e55d34756f67))
- release 0.3.0 ([#904](https://github.com/FleekHQ/fleek/issues/904)) ([d45103c](https://github.com/FleekHQ/fleek/commit/d45103caafa8991e2d66da773e3805a6d1d58c3f))
- release 0.3.0-rc.1 ([#900](https://github.com/FleekHQ/fleek/issues/900)) ([17493ed](https://github.com/FleekHQ/fleek/commit/17493edbbf11aa6b69dd005b85eb8f3460806b42))
- release 0.5.0 ([#1169](https://github.com/FleekHQ/fleek/issues/1169)) ([df8e574](https://github.com/FleekHQ/fleek/commit/df8e574c8efbe896023d9b74fc057989744f3b82))
- release 0.6.0. ([#1238](https://github.com/FleekHQ/fleek/issues/1238)) ([11a5bbd](https://github.com/FleekHQ/fleek/commit/11a5bbd7ffef6b4082d2ec0ea7bca50d84876508))
- **sdk:** release 0.2.2-rc.2 ([#860](https://github.com/FleekHQ/fleek/issues/860)) ([babd346](https://github.com/FleekHQ/fleek/commit/babd346a38309fb6a3a241d3369617141e265833))

## 0.6.0 (2023-07-24)

### Features

- add linter rule to enforce newline after block-like statements ([#831](https://github.com/FleekHQ/fleek/issues/831)) ([f3d1e1e](https://github.com/FleekHQ/fleek/commit/f3d1e1e52f033e634f02b598d0ccd20561500e49))
- add metadata and Site relation for Pins ([#961](https://github.com/FleekHQ/fleek/issues/961)) ([102e1c3](https://github.com/FleekHQ/fleek/commit/102e1c3a9557367adda157d5b19b56adc94f00da))
- application credentials ([#946](https://github.com/FleekHQ/fleek/issues/946)) ([0f06797](https://github.com/FleekHQ/fleek/commit/0f0679788f26cd5e515fb3669686fe9537eed34f))
- application credentials cli ([#1007](https://github.com/FleekHQ/fleek/issues/1007)) ([a3cf51d](https://github.com/FleekHQ/fleek/commit/a3cf51d86beb8368aa2e41741aedb9631495d5b3))
- auth-graphql duplication ([#697](https://github.com/FleekHQ/fleek/issues/697)) ([ac1194b](https://github.com/FleekHQ/fleek/commit/ac1194b9cfb6f40c839fc9e574a5452a4dce1570))
- **auth-graphql, sdk, cli:** Management of personal access tokens in auth-graphql, SDK and CLI ([#582](https://github.com/FleekHQ/fleek/issues/582)) ([d8952f3](https://github.com/FleekHQ/fleek/commit/d8952f3df0fcbe8754cdbe4da18a35b2f77bff34))
- change naming from remove to delete ([#571](https://github.com/FleekHQ/fleek/issues/571)) ([865f17e](https://github.com/FleekHQ/fleek/commit/865f17ea06881f24af37e33fffca2cac31feaa14))
- **cli:** command to list projects, option name to switch or create … ([#1145](https://github.com/FleekHQ/fleek/issues/1145)) ([9c9a794](https://github.com/FleekHQ/fleek/commit/9c9a794b56b2795ac3a970a0dab4692a88a44929))
- **cli:** prompt wrappers ([#779](https://github.com/FleekHQ/fleek/issues/779)) ([d7c0a7a](https://github.com/FleekHQ/fleek/commit/d7c0a7acccc0c15d2afcccf74dddd0b826228c62))
- custom domains ([#447](https://github.com/FleekHQ/fleek/issues/447)) ([6ce258c](https://github.com/FleekHQ/fleek/commit/6ce258c2b25f9f54caecda1ab8cd1f0a377f5a62))
- empty line before return ([#190](https://github.com/FleekHQ/fleek/issues/190)) ([77c8468](https://github.com/FleekHQ/fleek/commit/77c8468b1065a772ad2bd0af802514e36b2b67d5))
- ENS Integration ([#1045](https://github.com/FleekHQ/fleek/issues/1045)) ([d0cf4b0](https://github.com/FleekHQ/fleek/commit/d0cf4b02aeabba6176d32dd38506e06a8f8159f4))
- **errors:** better and more universal error handling ([#660](https://github.com/FleekHQ/fleek/issues/660)) ([4574a80](https://github.com/FleekHQ/fleek/commit/4574a8001128ebf920eb827ea801badbdb8728f3))
- eslint valid type names ([#557](https://github.com/FleekHQ/fleek/issues/557)) ([ffac3e1](https://github.com/FleekHQ/fleek/commit/ffac3e1f95ef05b0bbb7eed878f13d8121562bc4))
- **eslint:** added curly rule to linter, fixed non-curly returns and throws ([#505](https://github.com/FleekHQ/fleek/issues/505)) ([087d3c0](https://github.com/FleekHQ/fleek/commit/087d3c0f0e71da687d42e7468af684923e244ce5))
- **eslint:** disable interface and force type in linter ([#476](https://github.com/FleekHQ/fleek/issues/476)) ([bb25d8d](https://github.com/FleekHQ/fleek/commit/bb25d8ddbd7077d4fae4435e93d6ccbf37139de8))
- **eslint:** forbid let usage ([#467](https://github.com/FleekHQ/fleek/issues/467)) ([2365ccd](https://github.com/FleekHQ/fleek/commit/2365ccd8faddbbb55646d757a6b4f412216eba07))
- **graphql:** delete personal access token returns PersonalAccessToken ([#873](https://github.com/FleekHQ/fleek/issues/873)) ([c3677a6](https://github.com/FleekHQ/fleek/commit/c3677a6b747f7cd27242dffbc1c382b356e4e07e))
- **graphql:** integration tests with prisma ([#790](https://github.com/FleekHQ/fleek/issues/790)) ([fbf2a61](https://github.com/FleekHQ/fleek/commit/fbf2a616bc32b9233d73fcb65453ce089c7aafe8))
- **graphql:** queries mutations schema for pgw ([#987](https://github.com/FleekHQ/fleek/issues/987)) ([ef4a14d](https://github.com/FleekHQ/fleek/commit/ef4a14d5b5d6c24f7eea31b5fdb957e4aa4d5b80))
- **graphql:** support creating multiple ENS for one IPNS ([#1229](https://github.com/FleekHQ/fleek/issues/1229)) ([d600c6a](https://github.com/FleekHQ/fleek/commit/d600c6a21a4e221a6170709eb2c77da195056b6a))
- IPNS service improvement ([#215](https://github.com/FleekHQ/fleek/issues/215)) ([f10c656](https://github.com/FleekHQ/fleek/commit/f10c6565f39b7bdbe2d35b4dfa70dc0078468fa8))
- minor updates on pat cli flow ([#663](https://github.com/FleekHQ/fleek/issues/663)) ([9a43324](https://github.com/FleekHQ/fleek/commit/9a43324e950ebbe34127b47106f32b256ff6aa2d))
- PAT name support ([#688](https://github.com/FleekHQ/fleek/issues/688)) ([a4e4110](https://github.com/FleekHQ/fleek/commit/a4e4110c3af2ee2c0e9e967dd9d011dff1022aba))
- pat token serialization ([#690](https://github.com/FleekHQ/fleek/issues/690)) ([40ddb8a](https://github.com/FleekHQ/fleek/commit/40ddb8a6781b14578d10fc7f9e5b06acefa26f5d))
- rename package token to auth ([#199](https://github.com/FleekHQ/fleek/issues/199)) ([3c3c345](https://github.com/FleekHQ/fleek/commit/3c3c345004f09645d06f9c11218c765012ffa557))
- rename workspace to fleekxyz ([#182](https://github.com/FleekHQ/fleek/issues/182)) ([aa40ba3](https://github.com/FleekHQ/fleek/commit/aa40ba3555de4b89a102fe2e84442e2e28912a79))
- sdk default export ([#665](https://github.com/FleekHQ/fleek/issues/665)) ([099f266](https://github.com/FleekHQ/fleek/commit/099f26637e8324871559205281fe9180d93b9f61))
- SDK missing methods ([#185](https://github.com/FleekHQ/fleek/issues/185)) ([8b39852](https://github.com/FleekHQ/fleek/commit/8b398527921b42e3bd00c105005b877dfc9edd8e))
- sdk tests ([#1176](https://github.com/FleekHQ/fleek/issues/1176)) ([201e038](https://github.com/FleekHQ/fleek/commit/201e038a07d6c88e7f3ed424ce4a3898cf6e99f0))
- **sdk, cli:** SDK `ipfs` client exposes `getIpfsFiles` ([#742](https://github.com/FleekHQ/fleek/issues/742)) ([b57c6e3](https://github.com/FleekHQ/fleek/commit/b57c6e331c93375a499fe691ab975669b5dc64f8))
- **sdk:** Browser Support ([#385](https://github.com/FleekHQ/fleek/issues/385)) ([a07416a](https://github.com/FleekHQ/fleek/commit/a07416af9130e1869b1d345205bf19faf4314b78))
- **sdk:** every service now use unified graphql service ([#969](https://github.com/FleekHQ/fleek/issues/969)) ([33fe0ea](https://github.com/FleekHQ/fleek/commit/33fe0eab6e736e2c71120672d5ce421836d84995))
- **sdk:** node env check ([#701](https://github.com/FleekHQ/fleek/issues/701)) ([7ba837d](https://github.com/FleekHQ/fleek/commit/7ba837dd555493d1a0128f966375fbf7555b763d))
- Setup and deploy site ([#161](https://github.com/FleekHQ/fleek/issues/161)) ([adf95ce](https://github.com/FleekHQ/fleek/commit/adf95ce5a681fcb66c00565fc9f7a270fc9ef8d2))
- site ipns improvements ([#988](https://github.com/FleekHQ/fleek/issues/988)) ([3e6913f](https://github.com/FleekHQ/fleek/commit/3e6913f3fd72775a6114ffbca652425efc39c23b))
- **sites-prisma, graphql, sdk, cli:** add a IpnsRecord for a Site and automatic publishing during deployment ([#925](https://github.com/FleekHQ/fleek/issues/925)) ([ebdd18f](https://github.com/FleekHQ/fleek/commit/ebdd18ff27082f4f7857ebc0d95cf86288f2887f))
- **ui:** IPFS Storage ([#945](https://github.com/FleekHQ/fleek/issues/945)) ([ce7d76b](https://github.com/FleekHQ/fleek/commit/ce7d76b9332b13d1b0702d1c570ceb474c6618f0))
- **ui:** logo in navigation bar is only symbol without the Fleek ([#937](https://github.com/FleekHQ/fleek/issues/937)) ([27e246e](https://github.com/FleekHQ/fleek/commit/27e246e44228d21db222156971a2512c1672669b))

### Bug Fixes

- **cli:** errors are propagated from graphql ([#879](https://github.com/FleekHQ/fleek/issues/879)) ([9d87d82](https://github.com/FleekHQ/fleek/commit/9d87d826c6467e54a230bc30ba5fcd332486e84e))
- hash prompt in `ipns publish` command in cli, fix SDK ipns client ([#892](https://github.com/FleekHQ/fleek/issues/892)) ([eb40258](https://github.com/FleekHQ/fleek/commit/eb402586bb39a9b7cdd1a6f933044f60d2bd4849))
- ipfs sdk ([#1165](https://github.com/FleekHQ/fleek/issues/1165)) ([37e72b6](https://github.com/FleekHQ/fleek/commit/37e72b62fd29d4cce90625926d0c7d71e5897bc1))
- release cli deploy ([#975](https://github.com/FleekHQ/fleek/issues/975)) ([0c08844](https://github.com/FleekHQ/fleek/commit/0c088448d9fdcb6af4caf42dbb0aebc6beaf7ed7))
- **sdk:** `axios` replaced by `isomorphic-fetch` to prevent errors in UI ([#1021](https://github.com/FleekHQ/fleek/issues/1021)) ([3b261e5](https://github.com/FleekHQ/fleek/commit/3b261e5e93f9ca39dd9cd94da8cb9ff2b64c482f))
- **sdk:** `axios` replaced by `isomorphic-fetch` to prevent errors in UI ([#1021](https://github.com/FleekHQ/fleek/issues/1021)) ([cc8dc1c](https://github.com/FleekHQ/fleek/commit/cc8dc1c4eaaa0e36454987865032e9e7be785cd0))
- **sdk:** expand envs so it can be replaced with strings during build ([#638](https://github.com/FleekHQ/fleek/issues/638)) ([1b718bf](https://github.com/FleekHQ/fleek/commit/1b718bf1bbb35a3743356ba2c980e877ba0c2199))
- unified build versions for ipfs-http-client ([#952](https://github.com/FleekHQ/fleek/issues/952)) ([d2909eb](https://github.com/FleekHQ/fleek/commit/d2909eb89756b953cfc61a1b31010934e5116627))
- use wrapWithDirectory option when directory is being uploaded ([#284](https://github.com/FleekHQ/fleek/issues/284)) ([a2d1358](https://github.com/FleekHQ/fleek/commit/a2d13584bacb128f8dd9c1b7a917decf1bfd9dca))
- When deployment takes too longer show user different message ([#654](https://github.com/FleekHQ/fleek/issues/654)) ([d1efb09](https://github.com/FleekHQ/fleek/commit/d1efb094c6cb0915dc35991ff0a31e263af11bc4))

### Miscellaneous Chores

- **cli, sdk:** release 0.4.0 ([61edcd4](https://github.com/FleekHQ/fleek/commit/61edcd4acd72e1a47f1166333c0bb8d9e75c216f))
- release 0.2.2-rc.3 ([#869](https://github.com/FleekHQ/fleek/issues/869)) ([c04c97c](https://github.com/FleekHQ/fleek/commit/c04c97cc55ef3c37ce170335e9b7e55d34756f67))
- release 0.3.0 ([#904](https://github.com/FleekHQ/fleek/issues/904)) ([d45103c](https://github.com/FleekHQ/fleek/commit/d45103caafa8991e2d66da773e3805a6d1d58c3f))
- release 0.3.0-rc.1 ([#900](https://github.com/FleekHQ/fleek/issues/900)) ([17493ed](https://github.com/FleekHQ/fleek/commit/17493edbbf11aa6b69dd005b85eb8f3460806b42))
- release 0.5.0 ([#1169](https://github.com/FleekHQ/fleek/issues/1169)) ([df8e574](https://github.com/FleekHQ/fleek/commit/df8e574c8efbe896023d9b74fc057989744f3b82))
- release 0.6.0. ([#1238](https://github.com/FleekHQ/fleek/issues/1238)) ([11a5bbd](https://github.com/FleekHQ/fleek/commit/11a5bbd7ffef6b4082d2ec0ea7bca50d84876508))
- **sdk:** release 0.2.2-rc.2 ([#860](https://github.com/FleekHQ/fleek/issues/860)) ([babd346](https://github.com/FleekHQ/fleek/commit/babd346a38309fb6a3a241d3369617141e265833))

## 0.4.0 (2023-05-31)

### Features

- add linter rule to enforce newline after block-like statements ([#831](https://github.com/FleekHQ/fleek/issues/831)) ([f3d1e1e](https://github.com/FleekHQ/fleek/commit/f3d1e1e52f033e634f02b598d0ccd20561500e49))
- add metadata and Site relation for Pins ([#961](https://github.com/FleekHQ/fleek/issues/961)) ([102e1c3](https://github.com/FleekHQ/fleek/commit/102e1c3a9557367adda157d5b19b56adc94f00da))
- Added SDK baseline, authentication SDK & CLI Login Feature ([#77](https://github.com/FleekHQ/fleek/issues/77)) ([6a83b71](https://github.com/FleekHQ/fleek/commit/6a83b7140f2458f8ef2410919d2f4557e4e320a0))
- application credentials ([#946](https://github.com/FleekHQ/fleek/issues/946)) ([0f06797](https://github.com/FleekHQ/fleek/commit/0f0679788f26cd5e515fb3669686fe9537eed34f))
- application credentials cli ([#1007](https://github.com/FleekHQ/fleek/issues/1007)) ([a3cf51d](https://github.com/FleekHQ/fleek/commit/a3cf51d86beb8368aa2e41741aedb9631495d5b3))
- auth-graphql duplication ([#697](https://github.com/FleekHQ/fleek/issues/697)) ([ac1194b](https://github.com/FleekHQ/fleek/commit/ac1194b9cfb6f40c839fc9e574a5452a4dce1570))
- **auth-graphql, sdk, cli:** Management of personal access tokens in auth-graphql, SDK and CLI ([#582](https://github.com/FleekHQ/fleek/issues/582)) ([d8952f3](https://github.com/FleekHQ/fleek/commit/d8952f3df0fcbe8754cdbe4da18a35b2f77bff34))
- change naming from remove to delete ([#571](https://github.com/FleekHQ/fleek/issues/571)) ([865f17e](https://github.com/FleekHQ/fleek/commit/865f17ea06881f24af37e33fffca2cac31feaa14))
- **cli:** prompt wrappers ([#779](https://github.com/FleekHQ/fleek/issues/779)) ([d7c0a7a](https://github.com/FleekHQ/fleek/commit/d7c0a7acccc0c15d2afcccf74dddd0b826228c62))
- custom domains ([#447](https://github.com/FleekHQ/fleek/issues/447)) ([6ce258c](https://github.com/FleekHQ/fleek/commit/6ce258c2b25f9f54caecda1ab8cd1f0a377f5a62))
- empty line before return ([#190](https://github.com/FleekHQ/fleek/issues/190)) ([77c8468](https://github.com/FleekHQ/fleek/commit/77c8468b1065a772ad2bd0af802514e36b2b67d5))
- **errors:** better and more universal error handling ([#660](https://github.com/FleekHQ/fleek/issues/660)) ([4574a80](https://github.com/FleekHQ/fleek/commit/4574a8001128ebf920eb827ea801badbdb8728f3))
- eslint valid type names ([#557](https://github.com/FleekHQ/fleek/issues/557)) ([ffac3e1](https://github.com/FleekHQ/fleek/commit/ffac3e1f95ef05b0bbb7eed878f13d8121562bc4))
- **eslint:** added curly rule to linter, fixed non-curly returns and throws ([#505](https://github.com/FleekHQ/fleek/issues/505)) ([087d3c0](https://github.com/FleekHQ/fleek/commit/087d3c0f0e71da687d42e7468af684923e244ce5))
- **eslint:** disable interface and force type in linter ([#476](https://github.com/FleekHQ/fleek/issues/476)) ([bb25d8d](https://github.com/FleekHQ/fleek/commit/bb25d8ddbd7077d4fae4435e93d6ccbf37139de8))
- **eslint:** forbid let usage ([#467](https://github.com/FleekHQ/fleek/issues/467)) ([2365ccd](https://github.com/FleekHQ/fleek/commit/2365ccd8faddbbb55646d757a6b4f412216eba07))
- **graphql:** delete personal access token returns PersonalAccessToken ([#873](https://github.com/FleekHQ/fleek/issues/873)) ([c3677a6](https://github.com/FleekHQ/fleek/commit/c3677a6b747f7cd27242dffbc1c382b356e4e07e))
- **graphql:** integration tests with prisma ([#790](https://github.com/FleekHQ/fleek/issues/790)) ([fbf2a61](https://github.com/FleekHQ/fleek/commit/fbf2a616bc32b9233d73fcb65453ce089c7aafe8))
- ipfs storage ([#105](https://github.com/FleekHQ/fleek/issues/105)) ([76ee449](https://github.com/FleekHQ/fleek/commit/76ee44960b3d44368dafe1833623e31fca9eff88))
- IPNS SDK 🔨🌎 ([#123](https://github.com/FleekHQ/fleek/issues/123)) ([bf44f78](https://github.com/FleekHQ/fleek/commit/bf44f7872cedfb8c7dc32e5b60a7d7edded99c5e))
- IPNS service improvement ([#215](https://github.com/FleekHQ/fleek/issues/215)) ([f10c656](https://github.com/FleekHQ/fleek/commit/f10c6565f39b7bdbe2d35b4dfa70dc0078468fa8))
- minor updates on pat cli flow ([#663](https://github.com/FleekHQ/fleek/issues/663)) ([9a43324](https://github.com/FleekHQ/fleek/commit/9a43324e950ebbe34127b47106f32b256ff6aa2d))
- PAT name support ([#688](https://github.com/FleekHQ/fleek/issues/688)) ([a4e4110](https://github.com/FleekHQ/fleek/commit/a4e4110c3af2ee2c0e9e967dd9d011dff1022aba))
- pat token serialization ([#690](https://github.com/FleekHQ/fleek/issues/690)) ([40ddb8a](https://github.com/FleekHQ/fleek/commit/40ddb8a6781b14578d10fc7f9e5b06acefa26f5d))
- rename package token to auth ([#199](https://github.com/FleekHQ/fleek/issues/199)) ([3c3c345](https://github.com/FleekHQ/fleek/commit/3c3c345004f09645d06f9c11218c765012ffa557))
- rename workspace to fleekxyz ([#182](https://github.com/FleekHQ/fleek/issues/182)) ([aa40ba3](https://github.com/FleekHQ/fleek/commit/aa40ba3555de4b89a102fe2e84442e2e28912a79))
- sdk default export ([#665](https://github.com/FleekHQ/fleek/issues/665)) ([099f266](https://github.com/FleekHQ/fleek/commit/099f26637e8324871559205281fe9180d93b9f61))
- SDK missing methods ([#185](https://github.com/FleekHQ/fleek/issues/185)) ([8b39852](https://github.com/FleekHQ/fleek/commit/8b398527921b42e3bd00c105005b877dfc9edd8e))
- **sdk, cli:** SDK `ipfs` client exposes `getIpfsFiles` ([#742](https://github.com/FleekHQ/fleek/issues/742)) ([b57c6e3](https://github.com/FleekHQ/fleek/commit/b57c6e331c93375a499fe691ab975669b5dc64f8))
- **sdk:** Browser Support ([#385](https://github.com/FleekHQ/fleek/issues/385)) ([a07416a](https://github.com/FleekHQ/fleek/commit/a07416af9130e1869b1d345205bf19faf4314b78))
- **sdk:** every service now use unified graphql service ([#969](https://github.com/FleekHQ/fleek/issues/969)) ([33fe0ea](https://github.com/FleekHQ/fleek/commit/33fe0eab6e736e2c71120672d5ce421836d84995))
- **sdk:** node env check ([#701](https://github.com/FleekHQ/fleek/issues/701)) ([7ba837d](https://github.com/FleekHQ/fleek/commit/7ba837dd555493d1a0128f966375fbf7555b763d))
- Setup and deploy site ([#161](https://github.com/FleekHQ/fleek/issues/161)) ([adf95ce](https://github.com/FleekHQ/fleek/commit/adf95ce5a681fcb66c00565fc9f7a270fc9ef8d2))
- site ipns improvements ([#988](https://github.com/FleekHQ/fleek/issues/988)) ([3e6913f](https://github.com/FleekHQ/fleek/commit/3e6913f3fd72775a6114ffbca652425efc39c23b))
- **sites-prisma, graphql, sdk, cli:** add a IpnsRecord for a Site and automatic publishing during deployment ([#925](https://github.com/FleekHQ/fleek/issues/925)) ([ebdd18f](https://github.com/FleekHQ/fleek/commit/ebdd18ff27082f4f7857ebc0d95cf86288f2887f))
- **ui:** IPFS Storage ([#945](https://github.com/FleekHQ/fleek/issues/945)) ([ce7d76b](https://github.com/FleekHQ/fleek/commit/ce7d76b9332b13d1b0702d1c570ceb474c6618f0))
- **ui:** logo in navigation bar is only symbol without the Fleek ([#937](https://github.com/FleekHQ/fleek/issues/937)) ([27e246e](https://github.com/FleekHQ/fleek/commit/27e246e44228d21db222156971a2512c1672669b))
- workflow / enabled turbo cache ([#148](https://github.com/FleekHQ/fleek/issues/148)) ([d00bf87](https://github.com/FleekHQ/fleek/commit/d00bf87564c9b8748041704c052b183645f8839c))

### Bug Fixes

- **cli:** errors are propagated from graphql ([#879](https://github.com/FleekHQ/fleek/issues/879)) ([9d87d82](https://github.com/FleekHQ/fleek/commit/9d87d826c6467e54a230bc30ba5fcd332486e84e))
- fixed organization names ([#110](https://github.com/FleekHQ/fleek/issues/110)) ([f93e7dd](https://github.com/FleekHQ/fleek/commit/f93e7dded5c66c5554cc92e0a71d660a168114e4))
- hash prompt in `ipns publish` command in cli, fix SDK ipns client ([#892](https://github.com/FleekHQ/fleek/issues/892)) ([eb40258](https://github.com/FleekHQ/fleek/commit/eb402586bb39a9b7cdd1a6f933044f60d2bd4849))
- release cli deploy ([#975](https://github.com/FleekHQ/fleek/issues/975)) ([0c08844](https://github.com/FleekHQ/fleek/commit/0c088448d9fdcb6af4caf42dbb0aebc6beaf7ed7))
- sdk conflicts ([102aa32](https://github.com/FleekHQ/fleek/commit/102aa32bb253651290afda18ef3221e2d1b95d8b))
- **sdk:** expand envs so it can be replaced with strings during build ([#638](https://github.com/FleekHQ/fleek/issues/638)) ([1b718bf](https://github.com/FleekHQ/fleek/commit/1b718bf1bbb35a3743356ba2c980e877ba0c2199))
- typo ([00a280f](https://github.com/FleekHQ/fleek/commit/00a280f2d03f96b0b3f64cc1f1f985f259d4f70f))
- unified build versions for ipfs-http-client ([#952](https://github.com/FleekHQ/fleek/issues/952)) ([d2909eb](https://github.com/FleekHQ/fleek/commit/d2909eb89756b953cfc61a1b31010934e5116627))
- use wrapWithDirectory option when directory is being uploaded ([#284](https://github.com/FleekHQ/fleek/issues/284)) ([a2d1358](https://github.com/FleekHQ/fleek/commit/a2d13584bacb128f8dd9c1b7a917decf1bfd9dca))
- When deployment takes too longer show user different message ([#654](https://github.com/FleekHQ/fleek/issues/654)) ([d1efb09](https://github.com/FleekHQ/fleek/commit/d1efb094c6cb0915dc35991ff0a31e263af11bc4))

### Miscellaneous Chores

- **cli, sdk:** release 0.4.0 ([61edcd4](https://github.com/FleekHQ/fleek/commit/61edcd4acd72e1a47f1166333c0bb8d9e75c216f))
- release 0.2.2-rc.3 ([#869](https://github.com/FleekHQ/fleek/issues/869)) ([c04c97c](https://github.com/FleekHQ/fleek/commit/c04c97cc55ef3c37ce170335e9b7e55d34756f67))
- release 0.3.0 ([#904](https://github.com/FleekHQ/fleek/issues/904)) ([d45103c](https://github.com/FleekHQ/fleek/commit/d45103caafa8991e2d66da773e3805a6d1d58c3f))
- release 0.3.0-rc.1 ([#900](https://github.com/FleekHQ/fleek/issues/900)) ([17493ed](https://github.com/FleekHQ/fleek/commit/17493edbbf11aa6b69dd005b85eb8f3460806b42))
- **sdk:** release 0.2.2-rc.2 ([#860](https://github.com/FleekHQ/fleek/issues/860)) ([babd346](https://github.com/FleekHQ/fleek/commit/babd346a38309fb6a3a241d3369617141e265833))

## 0.3.0 (2023-04-17)

### Features

- add linter rule to enforce newline after block-like statements ([#831](https://github.com/FleekHQ/fleek/issues/831)) ([f3d1e1e](https://github.com/FleekHQ/fleek/commit/f3d1e1e52f033e634f02b598d0ccd20561500e49))
- Added SDK baseline, authentication SDK & CLI Login Feature ([#77](https://github.com/FleekHQ/fleek/issues/77)) ([6a83b71](https://github.com/FleekHQ/fleek/commit/6a83b7140f2458f8ef2410919d2f4557e4e320a0))
- auth-graphql duplication ([#697](https://github.com/FleekHQ/fleek/issues/697)) ([ac1194b](https://github.com/FleekHQ/fleek/commit/ac1194b9cfb6f40c839fc9e574a5452a4dce1570))
- **auth-graphql, sdk, cli:** Management of personal access tokens in auth-graphql, SDK and CLI ([#582](https://github.com/FleekHQ/fleek/issues/582)) ([d8952f3](https://github.com/FleekHQ/fleek/commit/d8952f3df0fcbe8754cdbe4da18a35b2f77bff34))
- change naming from remove to delete ([#571](https://github.com/FleekHQ/fleek/issues/571)) ([865f17e](https://github.com/FleekHQ/fleek/commit/865f17ea06881f24af37e33fffca2cac31feaa14))
- **cli:** prompt wrappers ([#779](https://github.com/FleekHQ/fleek/issues/779)) ([d7c0a7a](https://github.com/FleekHQ/fleek/commit/d7c0a7acccc0c15d2afcccf74dddd0b826228c62))
- custom domains ([#447](https://github.com/FleekHQ/fleek/issues/447)) ([6ce258c](https://github.com/FleekHQ/fleek/commit/6ce258c2b25f9f54caecda1ab8cd1f0a377f5a62))
- empty line before return ([#190](https://github.com/FleekHQ/fleek/issues/190)) ([77c8468](https://github.com/FleekHQ/fleek/commit/77c8468b1065a772ad2bd0af802514e36b2b67d5))
- **errors:** better and more universal error handling ([#660](https://github.com/FleekHQ/fleek/issues/660)) ([4574a80](https://github.com/FleekHQ/fleek/commit/4574a8001128ebf920eb827ea801badbdb8728f3))
- eslint valid type names ([#557](https://github.com/FleekHQ/fleek/issues/557)) ([ffac3e1](https://github.com/FleekHQ/fleek/commit/ffac3e1f95ef05b0bbb7eed878f13d8121562bc4))
- **eslint:** added curly rule to linter, fixed non-curly returns and throws ([#505](https://github.com/FleekHQ/fleek/issues/505)) ([087d3c0](https://github.com/FleekHQ/fleek/commit/087d3c0f0e71da687d42e7468af684923e244ce5))
- **eslint:** disable interface and force type in linter ([#476](https://github.com/FleekHQ/fleek/issues/476)) ([bb25d8d](https://github.com/FleekHQ/fleek/commit/bb25d8ddbd7077d4fae4435e93d6ccbf37139de8))
- **eslint:** forbid let usage ([#467](https://github.com/FleekHQ/fleek/issues/467)) ([2365ccd](https://github.com/FleekHQ/fleek/commit/2365ccd8faddbbb55646d757a6b4f412216eba07))
- **graphql:** delete personal access token returns PersonalAccessToken ([#873](https://github.com/FleekHQ/fleek/issues/873)) ([c3677a6](https://github.com/FleekHQ/fleek/commit/c3677a6b747f7cd27242dffbc1c382b356e4e07e))
- **graphql:** integration tests with prisma ([#790](https://github.com/FleekHQ/fleek/issues/790)) ([fbf2a61](https://github.com/FleekHQ/fleek/commit/fbf2a616bc32b9233d73fcb65453ce089c7aafe8))
- ipfs storage ([#105](https://github.com/FleekHQ/fleek/issues/105)) ([76ee449](https://github.com/FleekHQ/fleek/commit/76ee44960b3d44368dafe1833623e31fca9eff88))
- IPNS SDK 🔨🌎 ([#123](https://github.com/FleekHQ/fleek/issues/123)) ([bf44f78](https://github.com/FleekHQ/fleek/commit/bf44f7872cedfb8c7dc32e5b60a7d7edded99c5e))
- IPNS service improvement ([#215](https://github.com/FleekHQ/fleek/issues/215)) ([f10c656](https://github.com/FleekHQ/fleek/commit/f10c6565f39b7bdbe2d35b4dfa70dc0078468fa8))
- minor updates on pat cli flow ([#663](https://github.com/FleekHQ/fleek/issues/663)) ([9a43324](https://github.com/FleekHQ/fleek/commit/9a43324e950ebbe34127b47106f32b256ff6aa2d))
- PAT name support ([#688](https://github.com/FleekHQ/fleek/issues/688)) ([a4e4110](https://github.com/FleekHQ/fleek/commit/a4e4110c3af2ee2c0e9e967dd9d011dff1022aba))
- pat token serialization ([#690](https://github.com/FleekHQ/fleek/issues/690)) ([40ddb8a](https://github.com/FleekHQ/fleek/commit/40ddb8a6781b14578d10fc7f9e5b06acefa26f5d))
- rename package token to auth ([#199](https://github.com/FleekHQ/fleek/issues/199)) ([3c3c345](https://github.com/FleekHQ/fleek/commit/3c3c345004f09645d06f9c11218c765012ffa557))
- rename workspace to fleekxyz ([#182](https://github.com/FleekHQ/fleek/issues/182)) ([aa40ba3](https://github.com/FleekHQ/fleek/commit/aa40ba3555de4b89a102fe2e84442e2e28912a79))
- sdk default export ([#665](https://github.com/FleekHQ/fleek/issues/665)) ([099f266](https://github.com/FleekHQ/fleek/commit/099f26637e8324871559205281fe9180d93b9f61))
- SDK missing methods ([#185](https://github.com/FleekHQ/fleek/issues/185)) ([8b39852](https://github.com/FleekHQ/fleek/commit/8b398527921b42e3bd00c105005b877dfc9edd8e))
- **sdk, cli:** SDK `ipfs` client exposes `getIpfsFiles` ([#742](https://github.com/FleekHQ/fleek/issues/742)) ([b57c6e3](https://github.com/FleekHQ/fleek/commit/b57c6e331c93375a499fe691ab975669b5dc64f8))
- **sdk:** Browser Support ([#385](https://github.com/FleekHQ/fleek/issues/385)) ([a07416a](https://github.com/FleekHQ/fleek/commit/a07416af9130e1869b1d345205bf19faf4314b78))
- **sdk:** node env check ([#701](https://github.com/FleekHQ/fleek/issues/701)) ([7ba837d](https://github.com/FleekHQ/fleek/commit/7ba837dd555493d1a0128f966375fbf7555b763d))
- Setup and deploy site ([#161](https://github.com/FleekHQ/fleek/issues/161)) ([adf95ce](https://github.com/FleekHQ/fleek/commit/adf95ce5a681fcb66c00565fc9f7a270fc9ef8d2))
- workflow / enabled turbo cache ([#148](https://github.com/FleekHQ/fleek/issues/148)) ([d00bf87](https://github.com/FleekHQ/fleek/commit/d00bf87564c9b8748041704c052b183645f8839c))

### Bug Fixes

- **cli:** errors are propagated from graphql ([#879](https://github.com/FleekHQ/fleek/issues/879)) ([9d87d82](https://github.com/FleekHQ/fleek/commit/9d87d826c6467e54a230bc30ba5fcd332486e84e))
- fixed organization names ([#110](https://github.com/FleekHQ/fleek/issues/110)) ([f93e7dd](https://github.com/FleekHQ/fleek/commit/f93e7dded5c66c5554cc92e0a71d660a168114e4))
- hash prompt in `ipns publish` command in cli, fix SDK ipns client ([#892](https://github.com/FleekHQ/fleek/issues/892)) ([eb40258](https://github.com/FleekHQ/fleek/commit/eb402586bb39a9b7cdd1a6f933044f60d2bd4849))
- sdk conflicts ([102aa32](https://github.com/FleekHQ/fleek/commit/102aa32bb253651290afda18ef3221e2d1b95d8b))
- **sdk:** expand envs so it can be replaced with strings during build ([#638](https://github.com/FleekHQ/fleek/issues/638)) ([1b718bf](https://github.com/FleekHQ/fleek/commit/1b718bf1bbb35a3743356ba2c980e877ba0c2199))
- typo ([00a280f](https://github.com/FleekHQ/fleek/commit/00a280f2d03f96b0b3f64cc1f1f985f259d4f70f))
- use wrapWithDirectory option when directory is being uploaded ([#284](https://github.com/FleekHQ/fleek/issues/284)) ([a2d1358](https://github.com/FleekHQ/fleek/commit/a2d13584bacb128f8dd9c1b7a917decf1bfd9dca))
- When deployment takes too longer show user different message ([#654](https://github.com/FleekHQ/fleek/issues/654)) ([d1efb09](https://github.com/FleekHQ/fleek/commit/d1efb094c6cb0915dc35991ff0a31e263af11bc4))

### Miscellaneous Chores

- release 0.2.2-rc.3 ([#869](https://github.com/FleekHQ/fleek/issues/869)) ([c04c97c](https://github.com/FleekHQ/fleek/commit/c04c97cc55ef3c37ce170335e9b7e55d34756f67))
- release 0.3.0 ([#904](https://github.com/FleekHQ/fleek/issues/904)) ([d45103c](https://github.com/FleekHQ/fleek/commit/d45103caafa8991e2d66da773e3805a6d1d58c3f))
- release 0.3.0-rc.1 ([#900](https://github.com/FleekHQ/fleek/issues/900)) ([17493ed](https://github.com/FleekHQ/fleek/commit/17493edbbf11aa6b69dd005b85eb8f3460806b42))
- **sdk:** release 0.2.2-rc.2 ([#860](https://github.com/FleekHQ/fleek/issues/860)) ([babd346](https://github.com/FleekHQ/fleek/commit/babd346a38309fb6a3a241d3369617141e265833))

## 0.3.0-rc.1 (2023-04-17)

### Features

- add linter rule to enforce newline after block-like statements ([#831](https://github.com/FleekHQ/fleek/issues/831)) ([f3d1e1e](https://github.com/FleekHQ/fleek/commit/f3d1e1e52f033e634f02b598d0ccd20561500e49))
- Added SDK baseline, authentication SDK & CLI Login Feature ([#77](https://github.com/FleekHQ/fleek/issues/77)) ([6a83b71](https://github.com/FleekHQ/fleek/commit/6a83b7140f2458f8ef2410919d2f4557e4e320a0))
- auth-graphql duplication ([#697](https://github.com/FleekHQ/fleek/issues/697)) ([ac1194b](https://github.com/FleekHQ/fleek/commit/ac1194b9cfb6f40c839fc9e574a5452a4dce1570))
- **auth-graphql, sdk, cli:** Management of personal access tokens in auth-graphql, SDK and CLI ([#582](https://github.com/FleekHQ/fleek/issues/582)) ([d8952f3](https://github.com/FleekHQ/fleek/commit/d8952f3df0fcbe8754cdbe4da18a35b2f77bff34))
- change naming from remove to delete ([#571](https://github.com/FleekHQ/fleek/issues/571)) ([865f17e](https://github.com/FleekHQ/fleek/commit/865f17ea06881f24af37e33fffca2cac31feaa14))
- **cli:** prompt wrappers ([#779](https://github.com/FleekHQ/fleek/issues/779)) ([d7c0a7a](https://github.com/FleekHQ/fleek/commit/d7c0a7acccc0c15d2afcccf74dddd0b826228c62))
- custom domains ([#447](https://github.com/FleekHQ/fleek/issues/447)) ([6ce258c](https://github.com/FleekHQ/fleek/commit/6ce258c2b25f9f54caecda1ab8cd1f0a377f5a62))
- empty line before return ([#190](https://github.com/FleekHQ/fleek/issues/190)) ([77c8468](https://github.com/FleekHQ/fleek/commit/77c8468b1065a772ad2bd0af802514e36b2b67d5))
- **errors:** better and more universal error handling ([#660](https://github.com/FleekHQ/fleek/issues/660)) ([4574a80](https://github.com/FleekHQ/fleek/commit/4574a8001128ebf920eb827ea801badbdb8728f3))
- eslint valid type names ([#557](https://github.com/FleekHQ/fleek/issues/557)) ([ffac3e1](https://github.com/FleekHQ/fleek/commit/ffac3e1f95ef05b0bbb7eed878f13d8121562bc4))
- **eslint:** added curly rule to linter, fixed non-curly returns and throws ([#505](https://github.com/FleekHQ/fleek/issues/505)) ([087d3c0](https://github.com/FleekHQ/fleek/commit/087d3c0f0e71da687d42e7468af684923e244ce5))
- **eslint:** disable interface and force type in linter ([#476](https://github.com/FleekHQ/fleek/issues/476)) ([bb25d8d](https://github.com/FleekHQ/fleek/commit/bb25d8ddbd7077d4fae4435e93d6ccbf37139de8))
- **eslint:** forbid let usage ([#467](https://github.com/FleekHQ/fleek/issues/467)) ([2365ccd](https://github.com/FleekHQ/fleek/commit/2365ccd8faddbbb55646d757a6b4f412216eba07))
- **graphql:** delete personal access token returns PersonalAccessToken ([#873](https://github.com/FleekHQ/fleek/issues/873)) ([c3677a6](https://github.com/FleekHQ/fleek/commit/c3677a6b747f7cd27242dffbc1c382b356e4e07e))
- **graphql:** integration tests with prisma ([#790](https://github.com/FleekHQ/fleek/issues/790)) ([fbf2a61](https://github.com/FleekHQ/fleek/commit/fbf2a616bc32b9233d73fcb65453ce089c7aafe8))
- ipfs storage ([#105](https://github.com/FleekHQ/fleek/issues/105)) ([76ee449](https://github.com/FleekHQ/fleek/commit/76ee44960b3d44368dafe1833623e31fca9eff88))
- IPNS SDK 🔨🌎 ([#123](https://github.com/FleekHQ/fleek/issues/123)) ([bf44f78](https://github.com/FleekHQ/fleek/commit/bf44f7872cedfb8c7dc32e5b60a7d7edded99c5e))
- IPNS service improvement ([#215](https://github.com/FleekHQ/fleek/issues/215)) ([f10c656](https://github.com/FleekHQ/fleek/commit/f10c6565f39b7bdbe2d35b4dfa70dc0078468fa8))
- minor updates on pat cli flow ([#663](https://github.com/FleekHQ/fleek/issues/663)) ([9a43324](https://github.com/FleekHQ/fleek/commit/9a43324e950ebbe34127b47106f32b256ff6aa2d))
- PAT name support ([#688](https://github.com/FleekHQ/fleek/issues/688)) ([a4e4110](https://github.com/FleekHQ/fleek/commit/a4e4110c3af2ee2c0e9e967dd9d011dff1022aba))
- pat token serialization ([#690](https://github.com/FleekHQ/fleek/issues/690)) ([40ddb8a](https://github.com/FleekHQ/fleek/commit/40ddb8a6781b14578d10fc7f9e5b06acefa26f5d))
- rename package token to auth ([#199](https://github.com/FleekHQ/fleek/issues/199)) ([3c3c345](https://github.com/FleekHQ/fleek/commit/3c3c345004f09645d06f9c11218c765012ffa557))
- rename workspace to fleekxyz ([#182](https://github.com/FleekHQ/fleek/issues/182)) ([aa40ba3](https://github.com/FleekHQ/fleek/commit/aa40ba3555de4b89a102fe2e84442e2e28912a79))
- sdk default export ([#665](https://github.com/FleekHQ/fleek/issues/665)) ([099f266](https://github.com/FleekHQ/fleek/commit/099f26637e8324871559205281fe9180d93b9f61))
- SDK missing methods ([#185](https://github.com/FleekHQ/fleek/issues/185)) ([8b39852](https://github.com/FleekHQ/fleek/commit/8b398527921b42e3bd00c105005b877dfc9edd8e))
- **sdk, cli:** SDK `ipfs` client exposes `getIpfsFiles` ([#742](https://github.com/FleekHQ/fleek/issues/742)) ([b57c6e3](https://github.com/FleekHQ/fleek/commit/b57c6e331c93375a499fe691ab975669b5dc64f8))
- **sdk:** Browser Support ([#385](https://github.com/FleekHQ/fleek/issues/385)) ([a07416a](https://github.com/FleekHQ/fleek/commit/a07416af9130e1869b1d345205bf19faf4314b78))
- **sdk:** node env check ([#701](https://github.com/FleekHQ/fleek/issues/701)) ([7ba837d](https://github.com/FleekHQ/fleek/commit/7ba837dd555493d1a0128f966375fbf7555b763d))
- Setup and deploy site ([#161](https://github.com/FleekHQ/fleek/issues/161)) ([adf95ce](https://github.com/FleekHQ/fleek/commit/adf95ce5a681fcb66c00565fc9f7a270fc9ef8d2))
- workflow / enabled turbo cache ([#148](https://github.com/FleekHQ/fleek/issues/148)) ([d00bf87](https://github.com/FleekHQ/fleek/commit/d00bf87564c9b8748041704c052b183645f8839c))

### Bug Fixes

- **cli:** errors are propagated from graphql ([#879](https://github.com/FleekHQ/fleek/issues/879)) ([9d87d82](https://github.com/FleekHQ/fleek/commit/9d87d826c6467e54a230bc30ba5fcd332486e84e))
- fixed organization names ([#110](https://github.com/FleekHQ/fleek/issues/110)) ([f93e7dd](https://github.com/FleekHQ/fleek/commit/f93e7dded5c66c5554cc92e0a71d660a168114e4))
- hash prompt in `ipns publish` command in cli, fix SDK ipns client ([#892](https://github.com/FleekHQ/fleek/issues/892)) ([eb40258](https://github.com/FleekHQ/fleek/commit/eb402586bb39a9b7cdd1a6f933044f60d2bd4849))
- sdk conflicts ([102aa32](https://github.com/FleekHQ/fleek/commit/102aa32bb253651290afda18ef3221e2d1b95d8b))
- **sdk:** expand envs so it can be replaced with strings during build ([#638](https://github.com/FleekHQ/fleek/issues/638)) ([1b718bf](https://github.com/FleekHQ/fleek/commit/1b718bf1bbb35a3743356ba2c980e877ba0c2199))
- typo ([00a280f](https://github.com/FleekHQ/fleek/commit/00a280f2d03f96b0b3f64cc1f1f985f259d4f70f))
- use wrapWithDirectory option when directory is being uploaded ([#284](https://github.com/FleekHQ/fleek/issues/284)) ([a2d1358](https://github.com/FleekHQ/fleek/commit/a2d13584bacb128f8dd9c1b7a917decf1bfd9dca))
- When deployment takes too longer show user different message ([#654](https://github.com/FleekHQ/fleek/issues/654)) ([d1efb09](https://github.com/FleekHQ/fleek/commit/d1efb094c6cb0915dc35991ff0a31e263af11bc4))

### Miscellaneous Chores

- release 0.2.2-rc.3 ([#869](https://github.com/FleekHQ/fleek/issues/869)) ([c04c97c](https://github.com/FleekHQ/fleek/commit/c04c97cc55ef3c37ce170335e9b7e55d34756f67))
- release 0.3.0-rc.1 ([#900](https://github.com/FleekHQ/fleek/issues/900)) ([17493ed](https://github.com/FleekHQ/fleek/commit/17493edbbf11aa6b69dd005b85eb8f3460806b42))
- **sdk:** release 0.2.2-rc.2 ([#860](https://github.com/FleekHQ/fleek/issues/860)) ([babd346](https://github.com/FleekHQ/fleek/commit/babd346a38309fb6a3a241d3369617141e265833))

## 0.2.2-rc.3 (2023-04-12)

### Features

- add linter rule to enforce newline after block-like statements ([#831](https://github.com/FleekHQ/fleek/issues/831)) ([f3d1e1e](https://github.com/FleekHQ/fleek/commit/f3d1e1e52f033e634f02b598d0ccd20561500e49))
- Added SDK baseline, authentication SDK & CLI Login Feature ([#77](https://github.com/FleekHQ/fleek/issues/77)) ([6a83b71](https://github.com/FleekHQ/fleek/commit/6a83b7140f2458f8ef2410919d2f4557e4e320a0))
- auth-graphql duplication ([#697](https://github.com/FleekHQ/fleek/issues/697)) ([ac1194b](https://github.com/FleekHQ/fleek/commit/ac1194b9cfb6f40c839fc9e574a5452a4dce1570))
- **auth-graphql, sdk, cli:** Management of personal access tokens in auth-graphql, SDK and CLI ([#582](https://github.com/FleekHQ/fleek/issues/582)) ([d8952f3](https://github.com/FleekHQ/fleek/commit/d8952f3df0fcbe8754cdbe4da18a35b2f77bff34))
- change naming from remove to delete ([#571](https://github.com/FleekHQ/fleek/issues/571)) ([865f17e](https://github.com/FleekHQ/fleek/commit/865f17ea06881f24af37e33fffca2cac31feaa14))
- **cli:** prompt wrappers ([#779](https://github.com/FleekHQ/fleek/issues/779)) ([d7c0a7a](https://github.com/FleekHQ/fleek/commit/d7c0a7acccc0c15d2afcccf74dddd0b826228c62))
- custom domains ([#447](https://github.com/FleekHQ/fleek/issues/447)) ([6ce258c](https://github.com/FleekHQ/fleek/commit/6ce258c2b25f9f54caecda1ab8cd1f0a377f5a62))
- empty line before return ([#190](https://github.com/FleekHQ/fleek/issues/190)) ([77c8468](https://github.com/FleekHQ/fleek/commit/77c8468b1065a772ad2bd0af802514e36b2b67d5))
- **errors:** better and more universal error handling ([#660](https://github.com/FleekHQ/fleek/issues/660)) ([4574a80](https://github.com/FleekHQ/fleek/commit/4574a8001128ebf920eb827ea801badbdb8728f3))
- eslint valid type names ([#557](https://github.com/FleekHQ/fleek/issues/557)) ([ffac3e1](https://github.com/FleekHQ/fleek/commit/ffac3e1f95ef05b0bbb7eed878f13d8121562bc4))
- **eslint:** added curly rule to linter, fixed non-curly returns and throws ([#505](https://github.com/FleekHQ/fleek/issues/505)) ([087d3c0](https://github.com/FleekHQ/fleek/commit/087d3c0f0e71da687d42e7468af684923e244ce5))
- **eslint:** disable interface and force type in linter ([#476](https://github.com/FleekHQ/fleek/issues/476)) ([bb25d8d](https://github.com/FleekHQ/fleek/commit/bb25d8ddbd7077d4fae4435e93d6ccbf37139de8))
- **eslint:** forbid let usage ([#467](https://github.com/FleekHQ/fleek/issues/467)) ([2365ccd](https://github.com/FleekHQ/fleek/commit/2365ccd8faddbbb55646d757a6b4f412216eba07))
- ipfs storage ([#105](https://github.com/FleekHQ/fleek/issues/105)) ([76ee449](https://github.com/FleekHQ/fleek/commit/76ee44960b3d44368dafe1833623e31fca9eff88))
- IPNS SDK 🔨🌎 ([#123](https://github.com/FleekHQ/fleek/issues/123)) ([bf44f78](https://github.com/FleekHQ/fleek/commit/bf44f7872cedfb8c7dc32e5b60a7d7edded99c5e))
- IPNS service improvement ([#215](https://github.com/FleekHQ/fleek/issues/215)) ([f10c656](https://github.com/FleekHQ/fleek/commit/f10c6565f39b7bdbe2d35b4dfa70dc0078468fa8))
- minor updates on pat cli flow ([#663](https://github.com/FleekHQ/fleek/issues/663)) ([9a43324](https://github.com/FleekHQ/fleek/commit/9a43324e950ebbe34127b47106f32b256ff6aa2d))
- PAT name support ([#688](https://github.com/FleekHQ/fleek/issues/688)) ([a4e4110](https://github.com/FleekHQ/fleek/commit/a4e4110c3af2ee2c0e9e967dd9d011dff1022aba))
- pat token serialization ([#690](https://github.com/FleekHQ/fleek/issues/690)) ([40ddb8a](https://github.com/FleekHQ/fleek/commit/40ddb8a6781b14578d10fc7f9e5b06acefa26f5d))
- rename package token to auth ([#199](https://github.com/FleekHQ/fleek/issues/199)) ([3c3c345](https://github.com/FleekHQ/fleek/commit/3c3c345004f09645d06f9c11218c765012ffa557))
- rename workspace to fleekxyz ([#182](https://github.com/FleekHQ/fleek/issues/182)) ([aa40ba3](https://github.com/FleekHQ/fleek/commit/aa40ba3555de4b89a102fe2e84442e2e28912a79))
- sdk default export ([#665](https://github.com/FleekHQ/fleek/issues/665)) ([099f266](https://github.com/FleekHQ/fleek/commit/099f26637e8324871559205281fe9180d93b9f61))
- SDK missing methods ([#185](https://github.com/FleekHQ/fleek/issues/185)) ([8b39852](https://github.com/FleekHQ/fleek/commit/8b398527921b42e3bd00c105005b877dfc9edd8e))
- **sdk, cli:** SDK `ipfs` client exposes `getIpfsFiles` ([#742](https://github.com/FleekHQ/fleek/issues/742)) ([b57c6e3](https://github.com/FleekHQ/fleek/commit/b57c6e331c93375a499fe691ab975669b5dc64f8))
- **sdk:** Browser Support ([#385](https://github.com/FleekHQ/fleek/issues/385)) ([a07416a](https://github.com/FleekHQ/fleek/commit/a07416af9130e1869b1d345205bf19faf4314b78))
- **sdk:** node env check ([#701](https://github.com/FleekHQ/fleek/issues/701)) ([7ba837d](https://github.com/FleekHQ/fleek/commit/7ba837dd555493d1a0128f966375fbf7555b763d))
- Setup and deploy site ([#161](https://github.com/FleekHQ/fleek/issues/161)) ([adf95ce](https://github.com/FleekHQ/fleek/commit/adf95ce5a681fcb66c00565fc9f7a270fc9ef8d2))
- workflow / enabled turbo cache ([#148](https://github.com/FleekHQ/fleek/issues/148)) ([d00bf87](https://github.com/FleekHQ/fleek/commit/d00bf87564c9b8748041704c052b183645f8839c))

### Bug Fixes

- fixed organization names ([#110](https://github.com/FleekHQ/fleek/issues/110)) ([f93e7dd](https://github.com/FleekHQ/fleek/commit/f93e7dded5c66c5554cc92e0a71d660a168114e4))
- sdk conflicts ([102aa32](https://github.com/FleekHQ/fleek/commit/102aa32bb253651290afda18ef3221e2d1b95d8b))
- **sdk:** expand envs so it can be replaced with strings during build ([#638](https://github.com/FleekHQ/fleek/issues/638)) ([1b718bf](https://github.com/FleekHQ/fleek/commit/1b718bf1bbb35a3743356ba2c980e877ba0c2199))
- typo ([00a280f](https://github.com/FleekHQ/fleek/commit/00a280f2d03f96b0b3f64cc1f1f985f259d4f70f))
- use wrapWithDirectory option when directory is being uploaded ([#284](https://github.com/FleekHQ/fleek/issues/284)) ([a2d1358](https://github.com/FleekHQ/fleek/commit/a2d13584bacb128f8dd9c1b7a917decf1bfd9dca))
- When deployment takes too longer show user different message ([#654](https://github.com/FleekHQ/fleek/issues/654)) ([d1efb09](https://github.com/FleekHQ/fleek/commit/d1efb094c6cb0915dc35991ff0a31e263af11bc4))

### Miscellaneous Chores

- release 0.2.2-rc.3 ([#869](https://github.com/FleekHQ/fleek/issues/869)) ([c04c97c](https://github.com/FleekHQ/fleek/commit/c04c97cc55ef3c37ce170335e9b7e55d34756f67))
- **sdk:** release 0.2.2-rc.2 ([#860](https://github.com/FleekHQ/fleek/issues/860)) ([babd346](https://github.com/FleekHQ/fleek/commit/babd346a38309fb6a3a241d3369617141e265833))

## 0.2.2-rc.2 (2023-04-11)

### Features

- add linter rule to enforce newline after block-like statements ([#831](https://github.com/FleekHQ/fleek/issues/831)) ([f3d1e1e](https://github.com/FleekHQ/fleek/commit/f3d1e1e52f033e634f02b598d0ccd20561500e49))
- Added SDK baseline, authentication SDK & CLI Login Feature ([#77](https://github.com/FleekHQ/fleek/issues/77)) ([6a83b71](https://github.com/FleekHQ/fleek/commit/6a83b7140f2458f8ef2410919d2f4557e4e320a0))
- auth-graphql duplication ([#697](https://github.com/FleekHQ/fleek/issues/697)) ([ac1194b](https://github.com/FleekHQ/fleek/commit/ac1194b9cfb6f40c839fc9e574a5452a4dce1570))
- **auth-graphql, sdk, cli:** Management of personal access tokens in auth-graphql, SDK and CLI ([#582](https://github.com/FleekHQ/fleek/issues/582)) ([d8952f3](https://github.com/FleekHQ/fleek/commit/d8952f3df0fcbe8754cdbe4da18a35b2f77bff34))
- change naming from remove to delete ([#571](https://github.com/FleekHQ/fleek/issues/571)) ([865f17e](https://github.com/FleekHQ/fleek/commit/865f17ea06881f24af37e33fffca2cac31feaa14))
- **cli:** prompt wrappers ([#779](https://github.com/FleekHQ/fleek/issues/779)) ([d7c0a7a](https://github.com/FleekHQ/fleek/commit/d7c0a7acccc0c15d2afcccf74dddd0b826228c62))
- custom domains ([#447](https://github.com/FleekHQ/fleek/issues/447)) ([6ce258c](https://github.com/FleekHQ/fleek/commit/6ce258c2b25f9f54caecda1ab8cd1f0a377f5a62))
- empty line before return ([#190](https://github.com/FleekHQ/fleek/issues/190)) ([77c8468](https://github.com/FleekHQ/fleek/commit/77c8468b1065a772ad2bd0af802514e36b2b67d5))
- **errors:** better and more universal error handling ([#660](https://github.com/FleekHQ/fleek/issues/660)) ([4574a80](https://github.com/FleekHQ/fleek/commit/4574a8001128ebf920eb827ea801badbdb8728f3))
- eslint valid type names ([#557](https://github.com/FleekHQ/fleek/issues/557)) ([ffac3e1](https://github.com/FleekHQ/fleek/commit/ffac3e1f95ef05b0bbb7eed878f13d8121562bc4))
- **eslint:** added curly rule to linter, fixed non-curly returns and throws ([#505](https://github.com/FleekHQ/fleek/issues/505)) ([087d3c0](https://github.com/FleekHQ/fleek/commit/087d3c0f0e71da687d42e7468af684923e244ce5))
- **eslint:** disable interface and force type in linter ([#476](https://github.com/FleekHQ/fleek/issues/476)) ([bb25d8d](https://github.com/FleekHQ/fleek/commit/bb25d8ddbd7077d4fae4435e93d6ccbf37139de8))
- **eslint:** forbid let usage ([#467](https://github.com/FleekHQ/fleek/issues/467)) ([2365ccd](https://github.com/FleekHQ/fleek/commit/2365ccd8faddbbb55646d757a6b4f412216eba07))
- ipfs storage ([#105](https://github.com/FleekHQ/fleek/issues/105)) ([76ee449](https://github.com/FleekHQ/fleek/commit/76ee44960b3d44368dafe1833623e31fca9eff88))
- IPNS SDK 🔨🌎 ([#123](https://github.com/FleekHQ/fleek/issues/123)) ([bf44f78](https://github.com/FleekHQ/fleek/commit/bf44f7872cedfb8c7dc32e5b60a7d7edded99c5e))
- IPNS service improvement ([#215](https://github.com/FleekHQ/fleek/issues/215)) ([f10c656](https://github.com/FleekHQ/fleek/commit/f10c6565f39b7bdbe2d35b4dfa70dc0078468fa8))
- minor updates on pat cli flow ([#663](https://github.com/FleekHQ/fleek/issues/663)) ([9a43324](https://github.com/FleekHQ/fleek/commit/9a43324e950ebbe34127b47106f32b256ff6aa2d))
- PAT name support ([#688](https://github.com/FleekHQ/fleek/issues/688)) ([a4e4110](https://github.com/FleekHQ/fleek/commit/a4e4110c3af2ee2c0e9e967dd9d011dff1022aba))
- pat token serialization ([#690](https://github.com/FleekHQ/fleek/issues/690)) ([40ddb8a](https://github.com/FleekHQ/fleek/commit/40ddb8a6781b14578d10fc7f9e5b06acefa26f5d))
- rename package token to auth ([#199](https://github.com/FleekHQ/fleek/issues/199)) ([3c3c345](https://github.com/FleekHQ/fleek/commit/3c3c345004f09645d06f9c11218c765012ffa557))
- rename workspace to fleekxyz ([#182](https://github.com/FleekHQ/fleek/issues/182)) ([aa40ba3](https://github.com/FleekHQ/fleek/commit/aa40ba3555de4b89a102fe2e84442e2e28912a79))
- sdk default export ([#665](https://github.com/FleekHQ/fleek/issues/665)) ([099f266](https://github.com/FleekHQ/fleek/commit/099f26637e8324871559205281fe9180d93b9f61))
- SDK missing methods ([#185](https://github.com/FleekHQ/fleek/issues/185)) ([8b39852](https://github.com/FleekHQ/fleek/commit/8b398527921b42e3bd00c105005b877dfc9edd8e))
- **sdk, cli:** SDK `ipfs` client exposes `getIpfsFiles` ([#742](https://github.com/FleekHQ/fleek/issues/742)) ([b57c6e3](https://github.com/FleekHQ/fleek/commit/b57c6e331c93375a499fe691ab975669b5dc64f8))
- **sdk:** Browser Support ([#385](https://github.com/FleekHQ/fleek/issues/385)) ([a07416a](https://github.com/FleekHQ/fleek/commit/a07416af9130e1869b1d345205bf19faf4314b78))
- **sdk:** node env check ([#701](https://github.com/FleekHQ/fleek/issues/701)) ([7ba837d](https://github.com/FleekHQ/fleek/commit/7ba837dd555493d1a0128f966375fbf7555b763d))
- Setup and deploy site ([#161](https://github.com/FleekHQ/fleek/issues/161)) ([adf95ce](https://github.com/FleekHQ/fleek/commit/adf95ce5a681fcb66c00565fc9f7a270fc9ef8d2))
- workflow / enabled turbo cache ([#148](https://github.com/FleekHQ/fleek/issues/148)) ([d00bf87](https://github.com/FleekHQ/fleek/commit/d00bf87564c9b8748041704c052b183645f8839c))

### Bug Fixes

- fixed organization names ([#110](https://github.com/FleekHQ/fleek/issues/110)) ([f93e7dd](https://github.com/FleekHQ/fleek/commit/f93e7dded5c66c5554cc92e0a71d660a168114e4))
- sdk conflicts ([102aa32](https://github.com/FleekHQ/fleek/commit/102aa32bb253651290afda18ef3221e2d1b95d8b))
- **sdk:** expand envs so it can be replaced with strings during build ([#638](https://github.com/FleekHQ/fleek/issues/638)) ([1b718bf](https://github.com/FleekHQ/fleek/commit/1b718bf1bbb35a3743356ba2c980e877ba0c2199))
- typo ([00a280f](https://github.com/FleekHQ/fleek/commit/00a280f2d03f96b0b3f64cc1f1f985f259d4f70f))
- use wrapWithDirectory option when directory is being uploaded ([#284](https://github.com/FleekHQ/fleek/issues/284)) ([a2d1358](https://github.com/FleekHQ/fleek/commit/a2d13584bacb128f8dd9c1b7a917decf1bfd9dca))
- When deployment takes too longer show user different message ([#654](https://github.com/FleekHQ/fleek/issues/654)) ([d1efb09](https://github.com/FleekHQ/fleek/commit/d1efb094c6cb0915dc35991ff0a31e263af11bc4))

### Miscellaneous Chores

- **sdk:** release 0.2.2-rc.2 ([#860](https://github.com/FleekHQ/fleek/issues/860)) ([babd346](https://github.com/FleekHQ/fleek/commit/babd346a38309fb6a3a241d3369617141e265833))
