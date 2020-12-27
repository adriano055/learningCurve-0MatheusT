const gulp = require('gulp')
const { series, parallel } = require('gulp')
//const gulp.series = require('gulp') faz o mesmo do de cima


const antes1 = cb => {
  console.log('Tarefa antes 1!')
  return cb()
}

const antes2 = cb => {
  console.log('Tarefa antes 2!')
  return cb()
}

function copiar(cb) {
  //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //Seleciona quais arquivos usar como entrada para o workflow
  //  .pipe(gulp.dest('pastaB')) //aplica transformações nos arquivos (no caso, move os arquivos para pastaB)

  gulp.src('pastaA/**/*.txt').pipe(gulp.dest('pastaB'))  //Pega todos os arquivos dentro de A, com txt.
  return cb()
}

function fim(cb) {
  console.log('Tarefa fim!')
  return cb()
}

//Chamando as tarefas em serial (series), dentro é chamada uma em paralelo (podemos misturar)
module.exports.default = series(
  parallel(antes1, antes2),
  copiar,
  fim
  ) 

//Para o gulp funcionar tem de localizar o arquivo (acessando via terminal)
//Para rodar, tem que achar a task default (adciona o default no exports)
//Nesse primeiro momento vamos copiar os arquivos de pastaA para uma pastaB