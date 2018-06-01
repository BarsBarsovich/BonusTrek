'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    gcmq = require('gulp-group-css-media-queries');

    // gcmq()


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
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gcmq())
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