# Welance Website

This is the main repository for the welance website. A Single Page Application using HTML, CSS(SASS), JS (VueJS) and Webpack for bundling.

- - -

## General Info

Directory structure of the app is inspired by [vue-webpack-boilerplate](https://github.com/vuejs-templates/webpack)
Content and data comes from using an external (not yet defined) REST API.

#### This project features:
* VueJS (ES6) implementation w/ tree-shaking
* autogeneration and compression of HTML, CSS, JS (from SASS/VUE components), images and favicon generation (for needed devices) using webpack.
* ES6(2015) for JS, autocompiled to ES5 for older browsers (babel)
* async communication using [axios](https://github.com/mzabriskie/axios)
* bootstrap SASS v4
* SEO Pre-Rendering of specific routes using PhantomJS and prerender-spa-plugin

Check out _package.json_ _webpack.config.js_ and _.babelrc_ to understand more.


## Software Requirements
* No specific SW requirements needed, see _Installation solutions to possible errors_ section for more.

## Application Requirements

* [node](https://nodejs.org/en/) (6+) and NPM (4+)
* [Webpack](https://github.com/webpack/webpack)

## Installation Instructions

1. Install the latest [node](https://nodejs.org/en/) and NPM. (For future use, I suggest using [NVM](https://github.com/creationix/nvm) to manage both of these)
2. Install webpack globally with `npm install webpack -g` _(optional, suggested)_
3. Install projects dependencies with `npm install`

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

## Recovery Procedures
* No specific Recovery procedures.

## Project Documentation and Specification

* [Welance Website Redesign](https://docs.google.com/document/d/19Q0ryKOXxbcXurXhG0MgO_OMt8JR2rN1gVfB81QYlHg/edit?usp=sharing)'s Google Doc
* [Welance Website ](https://welance-handbook.herokuapp.com/welance-website.html) – _TODO_

## Contribution guidelines

* Read **[Welance Development Guidelines](https://welance-handbook.herokuapp.com/welance-development-guidelines.html)**
* Install [Vue.JS devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) for easier Front-End debugging

- - -

* When you need to refer to **static assets**, always reference like `/assets/[folder]/[folder_or_file].[extension]` in both HTML, SASS and JS files

- - -

1. Use exclusively `npm` to install new modules

## Who do I talk to?

For more info you can ask [enrico](https://github.com/ricricucit/).