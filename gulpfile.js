'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

var paths = {
  styles: ['./src/components/**/*.scss']
};

gulp.task('styles', function(){
  return gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('src/static/css'));
})

gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
});
