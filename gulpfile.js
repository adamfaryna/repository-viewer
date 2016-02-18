'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var $            = require('gulp-load-plugins')();

gulp.task('lint', function() {
  return gulp.src(['public/app/**/*.js', 'test/**/*.js', 'gulpfile.js', 'karma.conf.js', '!/**/jquery.js'])
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function() {
  return gulp.src('less/*.less')
    .pipe($.less())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

gulp.task('inject', function() {
  var inject_res = gulp.src(['./public/app/**/*.js', './public/css/**/*.css'], {read: false});

  return gulp.src('./public/index.html')
    .pipe($.inject(inject_res, { addRootSlash: false, read: false, relative: true }))
    .pipe($.wiredep({
      src: './public/index.html',
      directory: './public/bower_components'
    }))
    .pipe(gulp.dest('./public'));
});

// Static Server + watching files
gulp.task('serve', ['less', 'lint', 'inject'], function() {
  browserSync.init({
    browser: ['firefox'],
    server: 'public/',
    port: '3000'
  });

  gulp.watch('./less/*.less', ['less']);
  gulp.watch(['./public/**/*.*', '!./public/bower_components']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
