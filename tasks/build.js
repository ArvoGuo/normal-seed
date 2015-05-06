'use strict';

var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var runSequence   = require('run-sequence').use(gulp);
var del           = require('del');

gulp.task('build' , function() {
  runSequence('build-clean', 'build-copy',['build-js', 'build-styles'], 'build-html');
});

gulp.task('build-clean' , del.bind(null, ['dist', 'dist-html']));

gulp.task('build-copy', function() {
  return gulp.src(['client/js/**/*','client/assets/**/*'], {base: 'client'})
    .pipe(gulp.dest('dist'));
});

gulp.task('build-js', function() {
  return gulp.src(['!dist/js/lib/**/*','dist/**/*.js'])
    .pipe(plugins.uglify())
    .pipe(plugins.rename({extname: '.min.js'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-styles', function() {
  return gulp.src('client/styles/app.sass')
    .pipe(plugins.plumber())
    .pipe(plugins.sass({errLogToConsole: true}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build-html', function() {
  return gulp.src(['client/html/**/*'])
    .pipe(gulp.dest('dist-html'));
});
