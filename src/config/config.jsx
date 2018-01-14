import path from 'path'
const CONFIG = new Map();

CONFIG.set('port', 9001);
CONFIG.set('staticDir', path.join(__dirname, '..', 'assets'));
CONFIG.set('viewDir', path.join(__dirname, '..', 'views'));

export default CONFIG;