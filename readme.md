# An ESM demo for the problem of using stubs and spies for same module dependencies in JavaScript

The problem statement is this: it is not possible to stub (mock in Jest) or spy on a function, which is called by another in the same module.

The purpose of this repo is to demonstrate that this problem exists with ESM (ECMAScript modules). it is commonly reported that the problem is with CommonJS, Babel or a testing library such as Jest or Sinon. This proves it is a problem in the way exported functions are referenced in memory.

This repo contains two modules: module_A and module_B. In module_A there is a function, testFn, which calls someFn. When testFn is under test it is not possible to spy on or stub someFn unless it is made available via namespacing or a 3rd party library such as Rewire.

