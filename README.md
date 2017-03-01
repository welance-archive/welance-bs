# Welance Website

This is the main repository for the welance website. A Single Page Application using HTML, CSS(SASS), JS (VueJS) and Webpack for bundling.

- - -

## General Info

Directory structure of the app is inspired by [vue-webpack-boilerplate](https://github.com/vuejs-templates/webpack)
Content and data comes from using an external (not yet defined) REST API.

## Software Requirements
* No specific SW requirements needed.

## Application Requirements

* Node.js (6+) and NPM (4+)
* Webpack

## Installation Instructions

1. Install the latest node and NPM if you haven't yet.
2. Install webpack globally with `npm install webpack -g` _(optional, suggested)_
3. Install vue-cli globally with `npm install vue-cli -g` _(optional, suggested)_
4. Install projects dependencies with `npm install`

### Installation solutions to possible errors
...if you get a `mozjpeg pre-build test failed` running `npm install`, run the following commands (as suggested [here](https://github.com/tcoopman/image-webpack-loader/issues/49)):

1. `brew install libpng` (OSX)
2. `brew install libtool automake autoconf nasm` (OSX)
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

1. Use exclusively `npm` to install new modules

## Who do I talk to?

For more info you can ask [enrico](https://github.com/ricricucit/).