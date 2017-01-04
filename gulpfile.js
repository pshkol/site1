var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

gulp.task('server', function() {
    connect.server({
        root: './',
        livereload: true,
        port: 80,
    })
})

gulp.task('default',['server','css', 'css:watch', 'html:watch'])

gulp.task('css', function() {
    return gulp.src('sass/main.sass').
            pipe(sass()).
            pipe(cleanCSS()).
            pipe(rename('main.min.css')).
            pipe(gulp.dest('css')). 
            pipe(connect.reload())
})

gulp.task('reload', function() {
    connect.reload();
})

gulp.task('html:watch', function() {
    gulp.watch('index.html', ['reload'])
})

gulp.task('css:watch', function() {
    gulp.watch('sass/main.sass', ['css']);
})