import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300 //duração da animação

function filterByCity(city) { //função para filtrar as cidades, se o parametro for nulo mostra todas
    $('[wm-city]').each(function (i, e) {
        const isTarget = $(this).attr('wm-city') === city 
            || city === null
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function () { //função autoinvocada
    const cities = new Set //cria um conjunto para ir adc as imagens do mesmo local
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)   //criados os botões baseados no nome das cidades
        btn.click(e => filterByCity(city))
        return btn
    })

    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas') //botão de todas as cidades
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])   //grupo de botões
    btnGroup.append(btns)

    $(this).html(btnGroup)  //adiciona dentro de citybuttons o grupo de botões
    return this
}

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons() //aplica o plugin para a div wm-city-buttons
})