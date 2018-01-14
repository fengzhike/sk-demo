'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexModel = require('../models/indexModel');

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexController = {
	index() {
		return async (ctx, next) => {
			ctx.body = await ctx.render('index.html', {
				title: 'hello sk '
			});
		};
	},
	update() {

		return async (ctx, next) => {
			ctx.body = "update";
			// const indexM = new indexModel(ctx);
			// ctx.body = await indexM.updateNum();
		};
	}
};
exports.default = indexController;