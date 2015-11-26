// Dev dependencies
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

// JS
gulp.task('js', function() {
	gulp.src('repeatComplete.js')
	.pipe(uglify())
	.pipe(rename('repeatComplete.min.js'))
	.pipe(gulp.dest('./'));
});

// Build tasks
gulp.task('default', ['js']);