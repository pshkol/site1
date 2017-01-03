var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename')

gulp.task('css', function() {
    return gulp.src('sass/main.sass').
            pipe(sass()).
            pipe(cleanCSS()).
            pipe(rename('main.min.css')).
            pipe(gulp.dest('css'))
})

gulp.task('css:watch', function() {
    gulp.watch('sass/main.sass', ['css']);
})