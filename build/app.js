'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _initController = require('./controllers/initController');

var _initController2 = _interopRequireDefault(_initController);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//koa1 转换器 把koa的插件转换到koa插件
const app = new _koa2.default(); //静态资源


app.use((0, _koaStatic2.default)(_config2.default.get('staticDir'))); //静态资源文件

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.get('viewDir'),
    autoscape: true,
    cache: 'memory',
    ext: 'html',
    varControls: ['[[', ']]'],
    writeBody: false
}));
_initController2.default.init(app, _koaSimpleRouter2.default);
_log4js2.default.configure({
    appenders: {
        index: {
            type: 'dateFile',
            filename: _path2.default.join(__dirname, 'logs') + '/log4',
            "maxLogSize": 1024,
            "backups": 3,
            "alwaysIncludePattern": true,
            "pattern": "-yyyy-MM-dd.log"
        }
    },
    categories: {
        default: {
            appenders: ['index'],
            level: 'debug'
        }
    }
});
const logger = _log4js2.default.getLogger('index');
app.context.logger = logger;
app.listen(_config2.default.get('port'), () => {
    console.log('serverd at ' + _config2.default.get('port') + '!');
});

exports.default = app;