const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sourcesmaps = require('gulp-sourcesmaps');


gulp.task('html',() => {
    gulp.src('src/index.html', 'page/**.*.html')
    .pipe(concat('allpage.html'))
    .pipe(gulp.dest('public'));
});

gulp.task('css',() => {
    gilp.src('css/main.less')
    .pipe(sourcesmaps.init())
    .pipe(debug({title: 'src'}))
    .pipe(less())
    .pipe(debug({title: 'less'}))
    .pipe(concat('all.css'))
    .pipe(debug({title: 'concat'}))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false    }))
    .pipe(debug({title: 'prefixer'}))
    .pipe(cleanCSS({compotibility: 'ie9'}))
    .pipe(debug({title: 'compotibility'}))
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['html', 'css'], () => {
      gulp.watch('src/index.html', ['html']);
      gulp.watch('css/**.*.less', ['less']);
});











/**
 * Created by slv19 on 16.06.2017.
 */
