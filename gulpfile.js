var gulp = require('gulp'),
	babel = require('gulp-babel');

var jsxSrc = ['./src/**/*.jsx', '!./src/assets/*/*.jsx'];

gulp.task('jsx', () => {
	gulp.src(jsxSrc)
		.pipe(babel({
			babelrc: false,
			plugins: ["transform-es2015-modules-commonjs"]
		}))
		.pipe(gulp.dest('./build'))
})

gulp.task('watch', () => {
	gulp.watch(jsxSrc, ['jsx'])
})

gulp.task('default', ['watch', 'jsx'], () => {
	setTimeout(() => {
		console.log('gulp is watching....')
	}, 100)
})