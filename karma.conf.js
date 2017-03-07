'use strict';

module.exports = function(config) {
  const customLaunchers = process.env.SAUCE ? require(`./browsers.sauce`) : require(`./browsers.local`);
  const browsers = Object.keys(customLaunchers);

  if (process.env.SAUCE) {
    if (!process.env.SAUCE_ACCESS_KEY) {
      throw new Error(`process.env.SAUCE_ACCESS_KEY is required`);
    }

    if (!process.env.SAUCE_USERNAME) {
      throw new Error(`process.env.SAUCE_USERNAME is required`);
    }
  }

  const cfg = {
    browserify: {
      debug: true
    },

    browsers: browsers,

    concurrency: 3,

    customLaunchers: customLaunchers,

    files: [
      `./index.js`
    ],

    frameworks: [
      `browserify`,
      `mocha`
    ],

    preprocessors: {
      'index.js': [`browserify`]
    },

    reporters: [
      `mocha`
    ],

    singleRun: true,
  };

  if (process.env.SAUCE)  {
    cfg.sauceLabs = {
      build: `local-${process.env.USER}-${Date.now()}`,
      connectOptions: {
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
      },
      recordScreenshots: true,
      recordVideo: true
    }
    cfg.reporters.push(`saucelabs`);
  }

  config.set(cfg);
}
