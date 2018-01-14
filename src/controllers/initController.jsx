import index from './indexController'

const initController = {
	init(app,router){
		app.use(router(_ =>  {
			_.get('/',index.index())
			_.get('/index',index.index())
			_.get('/index/index',index.index())
			_.get('/index/update',index.update())
		}))
	}
}

export default initController