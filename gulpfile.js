const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

//gulp dependencies go here

gulp.task('default', function(){
	//run eslint
	gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format());
	//node source
	gulp.src('es6/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
	//browser source
	gulp.src('public/es6/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('public/dist'));	
});