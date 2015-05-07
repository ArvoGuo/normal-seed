var gulp = require('gulp');
var fs   = require('fs');
var del  = require('del');

/**
##ZEED
client
  |---assets
  |---html
  |---js
      |---lib (for bower)
      |---[other]
  |---style
      |---app.sass (for gulp-sass entry)
      |---main.sass (for import other)
      |---[other]
*/


gulp.task('init', ['init-clean'],function() {
  return gulp.src('tasks/seed/**/*')
    .pipe(gulp.dest('./'));
});

gulp.task('init-clean', del.bind(null, ['client','dist','dist-html']));