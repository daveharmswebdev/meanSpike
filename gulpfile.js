'use strict'

const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function() {
	gulp.src(['src/module.js', 'src/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest('client/js'))
})