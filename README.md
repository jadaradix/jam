# jam

Jimbo's Ad Maker consumes [jam-api](https://github.com/jadaradix/jam-api) to provide an interactive ad editor.

This project supports multiple ad types (`Ad`s), has a build pipeline for Sass (`node-sass`) and JavaScript (Browserify/Uglify/Babel), uses `Object.create()` to form objects and works statefully via AngularJs.

A preview and a full HTML document are produced. Each `Ad` is built from `AdComponents` (`LinkButton`, `ProductImage` and so on), each of which is built from `AdComponentProperty`s, each with a `name` and `value`, which control the `AdComponent`'s appearance.

Handlebars syntax allows you to reference `AdComponentProperty`s within an `AdComponent`'s markup. `Ad`s share references to components, a deliberate design decision that preserves `AdComponentProperty` values when switching `Ad`s.


## Prerequisites

### (Optional) yarn

yarn is a superior package manager to npm, working as a replacement for the usual npm CLI.

```
npm install -g yarn
```

### Grunt

Grunt is a JavaScript task runner. Install Grunt:

```
npm install -g grunt-cli
```

## Install

```
yarn
```

If you don't want to run `yarn` you can run `npm install` instead.


## Build

```
grunt
```

You can watch for JavaScript and Sass changes and rebuild automatically with these grunt tasks:

 * `grunt watch:javascript`
 * `grunt watch:sass`

## Run

You will need [jam-api](https://github.com/jadaradix/jam-api) to serve products RESTfully. If you don't run this on the default port, the URL to `jam-api` is configurable in `src/js/services/products.js`:

```
const JAM_API_URL = "http://localhost:8080";
```

Open `dist/index.html` in your favourite web browser.
