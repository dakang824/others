'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // 关闭安全威胁csrf的防范
  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false,
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539930061712_5777';
  config.view = {
    defauleViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
    // root:[
    //   path.join(appInfo.baseDir, 'app/view'),
    // ]
  }

  // PostgresSQL
  config.pg = {
    client: {
      dialect: 'postgres', //db类型
      database: 'postgres', //数据库名
      host: '192.168.100.181', //主机
      port: '5432', //端口
      username: 'postgres',
      password: '123456',
    },
    app: true,
  };

  // MySQL
  config.mysql = {
    client: {
      database: 'test', //数据库名
      host: 'localhost', //主机
      port: '3306', //端口
      user: 'root',
      password: '123456',
    },
    app: true,
  };

  // 中间件
  config.middleware = [
    'ajaxParams',
    'ajaxResponse',
  ];


  return config;
};