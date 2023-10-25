# Introduction

## Requirements

First, you need to have Node.js installed on your system. Please visit [http://nodejs.org](http://nodejs.org) for more information.

### Bower

```sh
npm install -g bower
```

You may have to supply `sudo` before the command.

It's also has Ruby and SASS dependency, please refer to [rvm](http://rvm.io) or [rbenv](https://github.com/rbenv/rbenv) for further step.

## Installation

```sh
bower install
```

This will download necessary assets files.

```sh
npm install -g grunt-cli
```

```sh
npm install
```

This will install necessary Node.js packages needed by the app, and also dependencies for Grunt tasks.

## Configuration

### App-specific configuration

The configuration files are located in `server/config/environment` directory. However, it's recommended that you set the configuration using environment variables.

### Environment Variables

There is a `.env.sample` file that you can copy to `.env` (for development) and `.env.production` (for production &mdash; it will get renamed to `.env` when the app is built).

### Front-end configuration

There are three files in `client/config`:

* local.env.json (local development using `grunt serve` will use settings from this file)
* development.env.json (default build will use this file)
* production.env.json (build using `--target=production` argument will use this file)

## App Dependencies

* MySQL
* Redis
* [ESP Connector App](https://github.com/code-samurai/esp-connector)

## Preview

To preview the app from browser, we need to run:

```sh
grunt serve
```

And the app is ready at http://localhost:9000/

## Building

To create a distribution file for this app, run:

```sh
grunt build
```

A new directory named `dist` containing build package is created.

To run the app, run:

```sh
node server/app.js
```

It accept one argument, `--target`. If you set the value to `production`  the front-end code will use configuration based on `client/config/production.env.json`

And the app is ready at http://localhost:8080/

## Migration and Seeds

To init the app's database and insert necessary basic data, run:

```sh
npm run app:init
```

## Fixture for dev

To load default fixtures for dev run:

```sh
node tests/fixtures.js  
```

## Tests

```sh
node_modules/karma/bin/karma start karma.conf.js
```

```sh
codeceptjs run --config tests/client/codecept.json --reporter  mochawesome --reporter-options reportDir=tests/output/client/coverage,reportName=index,reportTitle=quizApiTests
```

```sh
mocha tests/server/**/**_spec.js --timeout 10000 --reporter mocha-multi-reporters --reporter-options configFile=./tests/server/reporter.json
```
