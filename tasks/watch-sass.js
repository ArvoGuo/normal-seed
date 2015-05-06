'use strict';

var gulp      =  require('gulp');
var plugins   =  require('gulp-load-plugins')();

gulp.task('watch-sass', function() {
  plugins.watch('client/styles/**/*.{sass,scss}', function(event) {
    gulp.start('sass');
  });
});

gulp.task('sass', function() {
  return gulp.src('client/styles/app.sass')
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({errLogToConsole: true}))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest('client/css'));
});
