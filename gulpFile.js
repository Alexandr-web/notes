const gulp = require('gulp'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('copy-css', () => {
    return gulp.src(['./src/assets/scss/*.scss', '!./src/assets/scss/_*.scss'])
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('build', gulp.parallel('copy-css'));

gulp.task('watch', () => {
    gulp.watch('./src/assets/scss/*.scss', gulp.parallel('copy-css'));
});

gulp.task('default', gulp.parallel('build', 'watch'));