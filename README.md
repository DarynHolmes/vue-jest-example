# Jest is not using the config/env settings

This example was created to help get an answer to the question here: https://stackoverflow.com/questions/47177574/how-do-you-load-vue-environment-variables-when-using-vue-test-utils-with-jest

This was originally created with the Vue CLI tool, using

```
vue init webpack vue-jest-example
```

I would like to use the Environment Variable explained here: https://vuejs-templates.github.io/webpack/env.html

I followed the excellent vue-test-utils guide here: https://vue-test-utils.vuejs.org/en/guides/testing-SFCs-with-jest.html


To see this run:
```
npm install
npm run dev
```
Load the page and you will see "this is dev" in an H1 tag.

Run the Jest tests with

```
npm run unit
```

You will get the following error

```
Expected value to be (using ===):
      "this is test"
    Received:
      ""
```

The Jest tests do not use the env config - https://vuejs-templates.github.io/webpack/env.html



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
