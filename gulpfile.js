/*
 * 
 *  1 gulp build 
 *      add bootastrap assets, font-awesome to source
 *      
 *  2 run gulp
 * 
 * */
 
 /* requires */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat');;

var config = {
    sourceDir: 'source',
    publicDir: 'public_html',
    bowerDir: 'public_html/bower_components',
    jsglobal: 'source/js/global',
    jshome: 'source/js/homejs',
    maps: 'maps'
};      

/*********** scripts *********/
/* copy, minify, map, min js */
/*****************************/
gulp.task('globalscripts', function () {
    return gulp.src(config.jsglobal + '/*.js')
        .pipe(concat('main.js'))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write(config.maps))
        .pipe(gulp.dest(config.publicDir + '/js'));
});
/*********** scripts *********/
/* copy, minify, map, min js */
/*****************************/
gulp.task('homescripts', function () {
    return gulp.src(config.jshome + '/*.js')
        .pipe(concat('home.js'))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write(config.maps))
        .pipe(gulp.dest(config.publicDir + '/js'));
});
/********** styles ************/
/* scss to css, map, prefixer */
/******************************/
gulp.task('styles', function (){
    return gulp.src(config.sourceDir + '/css/style.css', {style: 'compressed'})  /* style: 'compressed' , 'expanded' */
        .pipe(plumber())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.publicDir + '/css')); 
});
/****************/
/**** watch *****/
/****************/
gulp.task('watch', function (){
   gulp.watch(config.sourceDir + '/js/**/*.js', ['globalscripts','homescripts']);
   gulp.watch(config.sourceDir + '/css/**/*.css', ['styles']);
});

/*****************/
/**** default ****/
/*****************/
gulp.task('default',['globalscripts','homescripts','styles','watch']);