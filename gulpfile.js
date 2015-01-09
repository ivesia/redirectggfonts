var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    zip = require('gulp-zip');

/* 压缩 JS */
gulp.task('minifyjs', function () {
    return gulp.src(['src/**/*.js'], {base: 'src'})
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('minify', ['minifyjs', 'minifycss']);

/* 复制图片等其他文件 */
gulp.task('copy', function () {
    return gulp.src(['src/**', '!src/**/*.js', '!src/**/*.css'], {base: 'src'})
        .pipe(gulp.dest('build'));
});

/* 打包压缩 */
gulp.task('package', ['minify', 'copy'], function () {
    return gulp.src('build/**')
        .pipe(zip('build.zip'))
        .pipe(gulp.dest('./'));
});
