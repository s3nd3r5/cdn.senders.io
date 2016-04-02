var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');
var del = require('del');

gulp.task('clean',function(){
	return del(['bin','*.log']);
});

gulp.task('jade',['clean'],function(){
	gulp.src('src/index.jade')
	.pipe(jade())
	.pipe(gulp.dest('bin/'))
});

gulp.task('less',['clean'],function(){
	gulp.src('src/less/index.less')
	.pipe(less())
	.pipe(gulp.dest('bin/css/'));
});

gulp.task('build',['clean','jade','less']);
