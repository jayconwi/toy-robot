
const gulp = require('gulp');
const ts = require('gulp-typescript');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

const tsBuild = () => {
    return gulp
        .src('./*.ts')
            .pipe(ts())
            //.pipe(uglify())
            .pipe(gulp.dest('./dist'));
};

const scssBuild =  () => {
    return gulp
        .src('./*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dist'))
};

exports.default = gulp.series(tsBuild, scssBuild);

