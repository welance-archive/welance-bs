# Welance Boostrap

[![Greenkeeper badge](https://badges.greenkeeper.io/welance/welance-bs.svg)](https://greenkeeper.io/)

This is the main repository for Welance Boostrap.

A starting point servable through npm. [View demo](https://welance.github.io/welance-bs/) to see all features.

- - -

## General Info

This project is inspired by the famous Twitter Bootstrap project.
It uses similar base SASS mixins like `@include make-col`, `@include make-row`, etc. and it should be seen, like his famous predecessor, a Front-End tooling suite to quickly kick-start Welance projects.

It includes generic styling and components build by [welance members](https://welance.com) for internal welance projects, but its default values can easily be overridden to **build any sort of modern Web Application**.

It does NOT have jQuery dependency (old-school approach), but uses the more modern [single-file component approach](https://vuejs.org/v2/guide/single-file-components.html) offered by the [VueJS framework 2.2+](https://vuejs.org/v2/) together with HTML5 and SASS (flexbox).

#### This project features:
* HTML5 + VueJS (ES6) components
* SASS as CSS pre-processor with useful mixins and variables (Flexbox for grid)
* Components w/ basic styling and default responsive capabilities

Check out _package.json_ _webpack.config.js_ and _.babelrc_ to understand more about this project's dependencies.


## Software Requirements
* No specific SW requirements needed, see _Installation solutions to possible errors_ section for more.

## Application Requirements

* [node](https://nodejs.org/en/) (6+) and NPM (4+)
* [Webpack](https://github.com/webpack/webpack) (to publish to github pages)

## Installation Instructions

1. Install the latest [node](https://nodejs.org/en/) and NPM. (For future use, I suggest using [NVM](https://github.com/creationix/nvm) to manage both of these)
2. Install webpack globally with `npm install webpack -g` _(optional, suggested)_
3. Run `npm install @welance/welance-bs` 
**IMPORTANT** use the flag `--save` if you want to use the VueJS components or `--save-dev` if you're only going to use the SASS/CSS utilities (see [public package here](https://www.npmjs.com/package/@welance/welance-bs))

### Installation solutions to possible errors
...if you get a `mozjpeg pre-build test failed` running `npm install`, run the following commands (as suggested [here](https://github.com/tcoopman/image-webpack-loader/issues/49)):

1. `brew install libpng` (on OSX)
2. `brew install libtool automake autoconf nasm` (on OSX)
3. If you still get errors related to images (_libpng, etc._) check out [imagemin-webpack-plugin](https://github.com/Klathmon/imagemin-webpack-plugin) for alternative fixes

### Development

1. Run webpack-dev-server with `npm run dev` and navigate to [http://localhost:8080](http://localhost:8080) **☆**

**☆** _The local dev server is available on any device on the network at http://yourIP:8080_

### Bundled (Production) Version
1. Obtain bundled production app running `npm run prod`. Find production files under **_/dist_** folder.
2. Run `npm run deploy` to publish the **_/dist_** folder to [this URL](https://welance.github.io/welance-bs/).

## Recovery Procedures
* No specific Recovery procedures.

## Project Documentation and Specification

* Check out the **[demo page](https://welance.github.io/welance-bs/)** to learn about specific features and components you might want to implement in your new website
* For developers and designers, please check out the **[wiki page](https://github.com/welance/welance-bs/wiki)** that explains basic ideas behind this bootstrapping project

## Contribution guidelines

* Read **[Welance Development Guidelines](https://welance-handbook.herokuapp.com/welance-development-guidelines.html)**
* Install [Vue.JS devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) for easier Front-End debugging
* Check out the **[demo page](https://welance.github.io/welance-bs/)** to learn about specific features and components you might want to implement in your new website
* For developers and designers, please check out the **[wiki page](https://github.com/welance/welance-bs/wiki)** that explains basic ideas behind this bootstrapping project
* **clone/fork** the repo to contribute and send pull-requests!


- - -

* When you need to refer to **static assets**, always reference like `/assets/[folder]/[folder_or_file].[extension]` in both HTML, SASS and JS files

- - -

1. Use exclusively `npm` to install new modules

## Who do I talk to?

For more info you can ask [enrico](https://github.com/ricricucit/).
Check this project's open issues to see what needs to be developed!
