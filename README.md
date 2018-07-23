# ES6 Refactors

## What is it

ES6 comes with a bunch of new [syntax](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/ch2.md).  This is an exercise for learners who have learned some of the ES6 syntax features and want some practices seeing and using them in code.

## How to install

First, just make sure you can run the tests successfully.

```
nvm install   # optional, if you don't have a reasonably-recent Node version already
npm install
npm run test:watch
```

## How to start

1. Check out your terminal feedback from `npm run test:watch`.  You should a few tests running, and they should be green/passing.
2. Your goal is to refactor the source code, file by file, using the `TODO` notes as prompts.  Each refactor will allow you to use some ES6 syntax.
3. Open the first `*.spec.js` file, and determine what the code module is doing.  
4. Then open the corresponding `*.js` file and address the `TODO`s one by one.
5. As you refactor, save and run the tests often.  The tests should not break and should not need adjustment.
6. When you have completed all the `TODO`s, you're done.

## Exercise order

You can probably take these files in any order, but I recommend:

1. `alerts`
2. `bank`
3. `colorBlender`
4. `link`
5. `emojitator`
