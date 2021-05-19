# A demo of two problems with mocks, stubs and spies in modular JavaScript

## Problem number one
When we use ES6's import/export syntax to share individual functions, but compile to CommonJS, it's not possible to mock, stub or spy on a function that's called by another in the same module.

## Problem number two
When using native ES modules, you cannot stub or spy on named imports from any module.

# Set up

## Install dependencies

Run `npm install`

## Run in ES Modules mode
Add the property `type` to package.json and set the value to `module` then change the npm script `test` from `npm run test:commonjs` to `npm run test:esm`.
Then run `npm test` and examine the results.

## Run in CommonJS mode
Remove the `type` property from package.json and change the npm script `test` from `npm run test:esm` to `npm run test:commonjs`
Then run `npm test` and examine the results.
