//vamos usar o Sass com o gulp

const {parallel} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglify = require('gulp-uglifycss')
const concat = require('gulp-concat')
const gulpUglifycss = require('gulp-uglifycss')

function transformacaoCSS() { //transforma todo o sass para css
  return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError)) //mostra o erro se tiver
    .pipe(gulpUglifycss({"ugliComments": true}))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

function copiarHTML(){
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS,copiarHTML)