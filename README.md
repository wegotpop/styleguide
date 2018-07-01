# We Got POP LTD Style guide

## Getting started

This repository makes use of [Yarn](https://yarnpkg.com/en/). Please ensure this is installed before getting started.

First step is to install the dependencies. This can be done via:

```sh
yarn install
```

To run the development server run:

```sh
yarn dev
```

This will launch the dev sever on [http://localhost:1234](http://localhost:1234).
Hot reload is active by default. The development server and production builder is managed by [Parcel](https://parceljs.org/).

## Code layout

The root of the app is located in `index.js` (and the correspdoning `index.html`).
CSS that is meant to be exported is located in the `css` folder.
Individual pages are locationd in the `pages` folder. There is a separte `css` folder, for page specific styling, which is not considered to be part of the POP style guide.

Code is auto formated on commit, and makes use of [Prettier](https://prettier.io/) to format JS, CSS and Markdown files.

This can be triggered before commit with:

```sh
yarn format
```

or for a specific filetype:

```sh
yarn format:<js|css|md>
```
