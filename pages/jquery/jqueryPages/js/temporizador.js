(function ($) { //protegendo a variável $
  $.fn.temporizador = function (opcoes) {
      const opcoesFinais = $.extend({   //Assume os valores abaixo como padrão, caso não sejam passados
          mensagem: 'Em breve!',
          horario: '23:59:59'
      }, opcoes) 

      //Spans para mostrar os valores decrescendo - Inicialmente os valores são 0
      const horaDezena = $('<span class="digito">').html('0')
      const horaUnidade = $('<span class="digito">').html('0')
      const minutoDezena = $('<span class="digito">').html('0')
      const minutoUnidade = $('<span class="digito">').html('0')
      const segundoDezena = $('<span class="digito">').html('0')
      const segundoUnidade = $('<span class="digito">').html('0')

      //Separadores e a mensagem
      const separadorHora = $('<span class="separador">').html(':')
      const separadorMinuto = $('<span class="separador">').html(':')
      const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

      //
      $(this).addClass('temporizador') //add classe temporizador
      $(this).append(horaDezena, horaUnidade, separadorHora, //add todos os elementos criados
          minutoDezena, minutoUnidade, separadorMinuto,
          segundoDezena, segundoUnidade, mensagem)

      //Criando a regex para os valores de horário
      const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
      const horarioAlvo = regex.exec(opcoesFinais.horario)
      // console.log(horarioAlvo)

      //definindo lógica do temporizador
      let temporizador = setInterval(() => {
          const agora = new Date()
          const alvo = new Date()
          alvo.setHours(horarioAlvo[1]) //pega o horário a partir do regex definido acima
          alvo.setMinutes(horarioAlvo[2])
          alvo.setSeconds(horarioAlvo[3])

          const diferencaEmMili = alvo.getTime() - agora.getTime() //verifica a diferença com o getTime
          if (diferencaEmMili >= 0) { //verifica se a hora
              const diferenca = regex.exec(new Date(diferencaEmMili).toISOString()) //remove a diferença de fuso 
              //console.log(diferenca)

              //adicionando os valores atualizados ao elemento via html
              horaDezena.html(diferenca[1][0]) 
              horaUnidade.html(diferenca[1][1])
              minutoDezena.html(diferenca[2][0])
              minutoUnidade.html(diferenca[2][1])
              segundoDezena.html(diferenca[3][0])
              segundoUnidade.html(diferenca[3][1])
          } else {
              clearInterval(temporizador)
          }
      }, 1000)
      
      return this
  }
})(jQuery);