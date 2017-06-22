const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const del = require('del');

gulp.task('html', function() {
    gulp.src('**/**/**.html')
        .pipe(debug({title: 'html'}))
        .pipe(gulp.dest('public'))
        .pipe(debug({title: 'dest-html'}));
});

gulp.task('clean', function() {
    return del('public/node_modules');
});

gulp.task('css', function () {
    gulp.src('css/**.css')
    .pipe(concat('all.css'))
    .pipe(debug({title: 'concat'}))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false    }))
    .pipe(debug({title: 'prefixer'}))
    .pipe(cleanCSS({compotibility: 'ie9'}))
    .pipe(debug({title: 'compotibility'}))
    .pipe(gulp.dest('public/css'))
    .pipe(debug({title: 'dest-css'}));
});

gulp.task('default', ['html', 'clean', 'css'], function() {
      gulp.watch('src/index.html', ['html']);
      gulp.watch('css/**.*.css', ['css']);
});










/**
 * Created by slv19 on 16.06.2017.
 */
