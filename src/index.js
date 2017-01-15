// @require fis-mod

// 插件库
require('es6-shim');
require('zone.js');
require('reflect-metadata');
window.$ = window.jQuery = require('jquery');

// 主运行入口程序
require('./main.ts');
