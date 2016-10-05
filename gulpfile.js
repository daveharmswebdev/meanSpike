'use strict'

const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function() {
	gulp.src(['src/module.js', 'src/**/*.js'])
		.pipe(sourcemaps.init())
			.pipe(concat('app.js'))
			.pipe(ngAnnotate())
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('client/js'))
})

gulp.task('watch', ['js'], function() {
	gulp.watch('src/**/*.js', ['js'])
})