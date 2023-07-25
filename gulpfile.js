const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const mnifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
    return gulp.src('./components/css/**/*.scss')
        .pipe(sass())
        .pipe(mnifyCss())
        .pipe(gulp.dest('lib/css'));
});

gulp.task('default', gulp.series('sass'));
