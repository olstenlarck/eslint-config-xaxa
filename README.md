# eslint-config-xaxa [![npm version][npmv-img]][npmv-url] [![github release][ghrelease-img]][ghrelease-url] [![License][license-img]][license-url]

<!-- When logo is needed
<p align="center">
  <a href="https://github.com/username/repo">
    <img src="./logo.png">
  </a>
</p>
<br>
-->

> Shareable config for [xaxa][] - zero-config linting powered by AirBnB and Prettier.

<div id="thetop"></div>

[![XAXA code style][codestyle-img]][codestyle-url]
[![CircleCI linux build][linuxbuild-img]][linuxbuild-url]
[![CodeCov coverage status][codecoverage-img]][codecoverage-url]
[![DavidDM dependency status][dependencies-img]][dependencies-url]
[![Renovate App Status][renovateapp-img]][renovateapp-url]
[![Make A Pull Request][prs-welcome-img]][prs-welcome-url]

If you have any _how-to_ kind of questions, please read the [Contributing Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) documents.  
For bugs reports and feature requests, [please create an issue][open-issue-url] or ping [@tunnckoCore](https://twitter.com/tunnckoCore) at Twitter.

[![Conventional Commits][ccommits-img]][ccommits-url]
[![PayPal Author Support][paypal-donate-img]][paypal-donate-url]
[![Share Love Tweet][share-love-img]][share-love-url]
[![NPM Downloads Weekly][downloads-weekly-img]][npmv-url]
[![NPM Downloads Monthly][downloads-monthly-img]][npmv-url]
[![NPM Downloads Total][downloads-total-img]][npmv-url]

Project is [semantically](https://semver.org) & automatically released on [CircleCI][codecoverage-url] with [new-release][] and its [New Release](https://github.com/apps/new-release) GitHub App.  
Tests are running on **v8 (latest LTS)** and **v10 (future LTS)** versions of [Node.js][nodeversion-url].

## Table of Contents
- [Install](#install)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Users](#users)
- [License](#license)

## Install
<!-- This project requires [**Node.js**][nodeversion-url] **>= 0.10.0**.  -->
Install it using [**yarn**](https://yarnpkg.com) or [**npm**](https://npmjs.com).  
_We highly recommend to use Yarn when you think to contribute to this project._

```bash
$ yarn add eslint-config-xaxa --dev
```

Then add it to your [ESLint config](https://eslint.org/docs/developer-guide/shareable-configs).

```json
{
  "extends": "xaxa"
}
```

**[back to top](#thetop)**

## Related Projects
Some of these projects are used here or were inspiration for this one, others are just related. So, thanks for your existance!
- [asia](https://www.npmjs.com/package/asia): Blazingly fast, magical and minimalist testing framework, for Today and Tomorrow | [homepage](https://github.com/olstenlarck/asia#readme "Blazingly fast, magical and minimalist testing framework, for Today and Tomorrow")
- [charlike](https://www.npmjs.com/package/charlike): Small, fast, simple and streaming project scaffolder for myself, but not… [more](https://github.com/tunnckoCore/charlike) | [homepage](https://github.com/tunnckoCore/charlike "Small, fast, simple and streaming project scaffolder for myself, but not only. Supports hundreds of template engines through the @JSTransformers API or if you want custom `render` function passed through options")
- [gitcommit](https://www.npmjs.com/package/gitcommit): Lightweight and joyful `git commit` replacement. Conventional Commits compliant. | [homepage](https://github.com/tunnckoCore/gitcommit "Lightweight and joyful `git commit` replacement. Conventional Commits compliant.")
- [new-release](https://www.npmjs.com/package/new-release): A stable alternative to [semantic-release][]. Only handles NPM publishing and nothing… [more](https://github.com/tunnckoCore/new-release#readme) | [homepage](https://github.com/tunnckoCore/new-release#readme "A stable alternative to [semantic-release][]. Only handles NPM publishing and nothing more. For creating GitHub releases use the Semantic Release GitHub App")
- [xaxa](https://www.npmjs.com/package/xaxa): Zero-config linting, powered by few amazing unicorns, AirBnB & Prettier. | [homepage](https://github.com/olstenlarck/xaxa "Zero-config linting, powered by few amazing unicorns, AirBnB & Prettier.")

**[back to top](#thetop)**

## Contributing
Please read the [Contributing Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) documents for advices.  
For bugs reports and feature requests, [please create an issue][open-issue-url] or ping [@tunnckoCore](https://twitter.com/tunnckoCore) at Twitter.

## Contributors
Thanks to the hard work of [these wonderful people](./CONTRIBUTORS.md) this project is alive and it also follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.  
[Pull requests](https://github.com/tunnckoCore/contributing#opening-a-pull-request), stars and all kind of [contributions](https://opensource.guide/how-to-contribute/#what-it-means-to-contribute) are always welcome. :stars:

## Users
You can see who uses `eslint-config-xaxa` in the [USERS.md](./USERS.md) file. Please feel free adding this file if it not exists.  
If you or your organization are using this project, consider adding yourself to the list of users.  
**Thank You!** :heart:

## License
Copyright (c) 2018-present, [Charlike Mike Reagent][author-link] `<olsten.larck@gmail.com>`.  
Released under the [Apache-2.0 License][license-url].

---

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.7.0, on July 22, 2018._

<!-- Heading badges -->

[npmv-url]: https://www.npmjs.com/package/eslint-config-xaxa
[npmv-img]: https://badgen.now.sh/npm/v/eslint-config-xaxa?label=npm%20version

[ghrelease-url]: https://github.com/olstenlarck/eslint-config-xaxa/releases/latest
[ghrelease-img]: https://badgen.now.sh/github/release/olstenlarck/eslint-config-xaxa?label=github%20release

[license-url]: https://github.com/olstenlarck/eslint-config-xaxa/blob/master/LICENSE
[license-img]: https://badgen.now.sh/npm/license/eslint-config-xaxa

<!-- Front line badges -->

[codestyle-url]: https://github.com/olstenlarck/xaxa
[codestyle-img]: https://badgen.now.sh/badge/code%20style/xaxa/green

[linuxbuild-url]: https://circleci.com/gh/olstenlarck/eslint-config-xaxa/tree/master
[linuxbuild-img]: https://badgen.now.sh/circleci/github/olstenlarck/eslint-config-xaxa/master

[codecoverage-url]: https://codecov.io/gh/olstenlarck/eslint-config-xaxa
[codecoverage-img]: https://codecov.io/gh/olstenlarck/eslint-config-xaxa/branch/master/graph/badge.svg

[dependencies-url]: https://david-dm.org/olstenlarck/eslint-config-xaxa
[dependencies-img]: https://badgen.now.sh/david/dep/olstenlarck/eslint-config-xaxa

[ccommits-url]: https://conventionalcommits.org/
[ccommits-img]: https://badgen.now.sh/badge/conventional%20commits/v1.0.0/dfb317
[new-release-url]: https://github.com/tunnckoCore/new-release
[new-release-img]: https://badgen.now.sh/badge/semantically/released/05c5ff

[downloads-weekly-img]: https://badgen.now.sh/npm/dw/eslint-config-xaxa
[downloads-monthly-img]: https://badgen.now.sh/npm/dm/eslint-config-xaxa
[downloads-total-img]: https://badgen.now.sh/npm/dt/eslint-config-xaxa

[nodeversion-img]: https://img.shields.io/node/v/eslint-config-xaxa.svg
[nodeversion-url]: https://nodejs.org/en/download

[renovateapp-url]: https://renovatebot.com
[renovateapp-img]: https://badgen.now.sh/badge/renovate/enabled/green
[prs-welcome-img]: https://badgen.now.sh/badge/PRs/welcome/green
[prs-welcome-url]: http://makeapullrequest.com
[paypal-donate-url]: https://paypal.me/tunnckoCore/10
[paypal-donate-img]: https://badgen.now.sh/badge/$/support/purple

[share-love-url]: https://twitter.com/intent/tweet?text=https://github.com/olstenlarck/eslint-config-xaxa&via=tunnckoCore
[share-love-img]: https://badgen.now.sh/badge/twitter/share/1da1f2
[open-issue-url]: https://github.com/olstenlarck/eslint-config-xaxa/issues/new
[author-link]: https://i.am.charlike.online

[new-release]: https://github.com/tunnckoCore/new-release
[semantic-release]: https://github.com/semantic-release/semantic-release
[xaxa]: https://github.com/olstenlarck/xaxa