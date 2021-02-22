# An ESM demo for the problem of using stubs and spies for same module dependencies in JavaScript

There are two problems that can be encountered when usuing mocks, stubs and spies with CommonJS and ES modules respectively. With CommonJS it is not possible to mock, stub or spy on a function, which is called by another in the same module. With ES modules, it is not possible to mock, stub or spy on a function a named or wildcard import. 

The purpose of this repo is to demonstrate these problems. Run the test suite using the instructions below.

## Run in ES Modules mode
Add the property `type` to package.json and set the value to `module` then change the npm script `test` from `npm run test:commonjs` to `npm run test:esm`.
Then run `npm test` and examine the results.

## Run in CommonJS mode
Remove the `type` property from package.json and change the npm script `test` from `npm run test:esm` to `npm run test:commonjs`
Then run `npm test` and examine the results.

