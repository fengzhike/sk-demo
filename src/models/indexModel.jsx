// import rp from 'request-promise'

export default class indexModel{
	constructor(ctx){
		this.ctx = ctx
	}
	updateNum(){
		const option = {
			uri:'http://localhost/praize.php',
			method:'GET',
		}
		return new Promise((resolve,reject)=>{
			// rp(option).then(res=>{
			// 	const info = JSON.parse(res);
			// 	if(info){
			// 		return resolve({data:info.result})
			// 	}else{
			// 		return reject({});
			// 	}
			// })
			return resolve({data:'hello'})
		})
	}
}