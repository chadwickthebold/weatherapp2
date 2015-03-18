// Using Gulp >= 4.0.0
var gulp = require('gulp'),
		connect = require('gulp-connect'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		jshint = require('gulp-jshint'),
		less = require('gulp-less'),
		sourcemap = require('gulp-sourcemaps'),
		del = require('del');

var paths = {
	dirs : {
		build : "build"
	},
	less : "src/less/*.less",
	img : "src/img/*"
}

gulp.task('clean', function(cb) {
	del(paths.dirs.build, cb);
});

gulp.task('build:less', function(cb) {
	return gulp.src(paths.less)
		.pipe(less())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(paths.dirs.build));
})

gulp.task('build', gulp.series('build:less'));

gulp.task('test', function(cb) {

});

gulp.task('serve', function(cb) {

});

gulp.task('watch', function(cb) {

});

gulp.task('default', gulp.series('clean', 'build', 'test', 'serve', 'watch'));