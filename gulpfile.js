'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');


var paths = {
    styles: {
        src: './assets/styles/**/*.scss',
        build: './dist'
    },
    html:{
        src: './*.html'
    }
};
gulp.task('scss', function() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.build))
        .pipe(livereload());
});


gulp.task('html', function(){
    return gulp.src(paths.html.src).pipe(livereload());
});

gulp.task('default', function() {
    livereload.listen();
    gulp.watch(paths.styles.src, gulp.series('scss'));
    gulp.watch(paths.html.src, gulp.series('html'));
});