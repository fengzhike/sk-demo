'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CONFIG = new Map();

CONFIG.set('port', 9001);
CONFIG.set('staticDir', _path2.default.join(__dirname, '..', 'assets'));
CONFIG.set('viewDir', _path2.default.join(__dirname, '..', 'views'));

exports.default = CONFIG;