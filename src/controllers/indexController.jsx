import indexModel from '../models/indexModel'

const indexController = {
	index(){
		return async(ctx,next) => {
			ctx.body = await ctx.render('index.html',{
				title:'hello sk '
			})
		}
	},
	update(){

		return async(ctx,next)=>{
			ctx.body = "update"
			// const indexM = new indexModel(ctx);
			// ctx.body = await indexM.updateNum();
		}
	}
}
export default indexController