import Koa  from 'koa';
import router from 'koa-simple-router';
import initController from './controllers/initController';
import path from 'path';
import render  from 'koa-swig';
import co from 'co';
import serve from 'koa-static' ;//静态资源
import convert from 'koa-convert' ; //koa1 转换器 把koa的插件转换到koa插件
import CONFIG from './config/config';
import log4js from 'log4js';

const app = new Koa();

app.use(serve(CONFIG.get('staticDir')));//静态资源文件

app.context.render = co.wrap(render({
	root:CONFIG.get('viewDir'),
	autoscape:true,
	cache:'memory',
	ext:'html',
	varControls:['[[',']]'],
	writeBody:false
}));
initController.init(app,router)
log4js.configure({
    appenders: { 
        index: { 
            type: 'dateFile', 
            filename:path.join(__dirname, 'logs') + '/log4',
            "maxLogSize": 1024,
            "backups":3,
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
const logger = log4js.getLogger('index');
app.context.logger = logger;
app.listen(CONFIG.get('port'),()=>{
	console.log('serverd at '+CONFIG.get('port')+'!')
})

export default app