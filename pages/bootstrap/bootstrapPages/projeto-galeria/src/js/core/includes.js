import $ from 'jquery'

const loadHtmlSuccessCallbacks = []  //array de função callback que é chamado quando uma requisição for bem sucedida

export function onLoadHtmlSuccess(callback) { //função parent ler todos os att wm-include
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}


function loadIncludes(parent) {
  if(!parent) parent = 'body'
  $(parent).find('[wm-include]').each(function(i, e) {
      const url = $(e).attr('wm-include')
      $.ajax({          //Chamada ajax.
          url,
          success(data) {
              $(e).html(data)
              $(e).removeAttr('wm-include') // excluia propriedade para evitar de ser processada outra vez

              loadHtmlSuccessCallbacks.forEach(
                callback => callback(data))
            loadIncludes(e) //Torna a função recursiva (para todos os includes na page)
        }
    })  
  })
}

loadIncludes()