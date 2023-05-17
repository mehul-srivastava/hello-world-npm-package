# @mehul-srivastava/hello-world

[![npm (scoped)](https://img.shields.io/npm/v/@mehul-srivastava/hello-world.svg?style=for-the-badge)](https://www.npmjs.com/package/@mehul-srivastava/hello-world)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@mehul-srivastava/hello-world.svg?style=for-the-badge)](https://www.npmjs.com/package/@mehul-srivastava/hello-world)

## Install

```
$ npm install @mehul-srivastava/hello-world
```

## Usage

```js
const hello = require("@mehul-srivastava/hello-world");

hello("Mehul");
//=> "Hello Mehul. I belong to the @mehul-srivastava/hello-world NPM package!"

hello(1337);
//=> TypeError: Name should be a string!
//    at helloWorld (<anonymous>:2:39)
//    at <anonymous>:1:1
```
