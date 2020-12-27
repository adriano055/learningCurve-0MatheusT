//Fazer workflow para os arquivos em SRC e aplicar babel

const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
  gulp.src('src/**/*.js')
  .pipe(babel({
    comments:false, //remove os comentários dos arquivos
    presets: ["env"] //converte o código para o mais compatível com o browser
  }))
  .on('error', err => console.log(err))
  .pipe(uglify()) // minimifica o código.
  .pipe(concat('codigo.min.js')) //concatena a versão min 
  .pipe(gulp.dest('build')) //Aloca o que foi gerado na pasta (no caso, build)

  return cb
}

exports.default = series(padrao)