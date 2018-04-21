'use strict';

const path = require('path')

module.exports = appInfo => {

  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524217047870_8305';

  // add your config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.js': 'assets',
      '.html': 'nunjucks',
    },
  };

  config.assets = {
    publicPath: '/public/',
    devServer: {
      debug: false,
      port: 8000,
      env: {
        APP_ROOT: process.cwd() + '/app/assets',
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
        PUBLIC_PATH: 'http://127.0.0.1:8000',
      },
    },
  };

  return config;
};
