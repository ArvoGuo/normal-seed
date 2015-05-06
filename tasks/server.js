'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server',['build'], function() {
  browserSync({
    ghosetMode: false,
    server    : {
      baseDir : ['dist-html', 'dist'],
      routes  : {
        '../' : ''
      }
    }
  });
});