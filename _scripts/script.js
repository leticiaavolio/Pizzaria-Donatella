$('section.pizza').waypoint( function
    /*direcao= representa um espaço reservado na memoria que irá guardar como o usuario chegou naquele elemento html, as duas  possibilidades serão up ou dowm, subindo ou descendo, respectivamente.*/
    (direcao){
        if (direcao == 'down'){
            $('section.pizza p').addClass ( 'animate__animated animate__fadeInUp');
        }
        if (direcao == 'up'){
            $('section.pizza p').removeClass ('animate__animated animate__fadeInUp');   
        }
    },{
        offset:'450px;'
})
$('div#testemunha-mestre').waypoint(function(direcao){
    if (direcao == 'down'){
        $('div#testemunha-esquerda, div#testemunha-direita').addClass ('animate__animated animate__rubberBand')
    }
    if (direcao == 'up'){
        $('div#testemunha-esquerda, div#testemunha-direita').removeClass ('animate__animated animate__rubberBand')
    }
},{
    offset:'450px;'
})
$('section.domingo-perfeito').waypoint (function (direcao) {
    if (direcao == 'down') {
        $('div.folha1').addClass ('animate__animated animate__fadeInUp');
        $('div.folha3').addClass ('animate__animated animate__fadeInUp');
        $('div.camarao').addClass ('animate__animated animate__fadeInUp animate__slow')
        $('div.tomate').addClass ('animate__animated animate__fadeInUp animate__slow')
        $('div.folha2').addClass ('animate__animated animate__fadeInUp animate__slower')
        $('div.queijo').addClass ('animate__animated animate__fadeInUp animate__slower')
    }
    if (direcao == 'up') {
        $('div.folha1').removeClass ('animate__animated animate__fadeInUp')
        $('div.folha3').removeClass ('animate__animated animate__fadeInUp')
        $('div.camarao').removeClass ('animate__animated animate__fadeInUp animate__slow')
        $('div.tomate').removeClass ('animate__animated animate__fadeInUp animate__slow')
        $('div.folha2').removeClass ('animate__animated animate__fadeInUp animate__slower')
        $('div.queijo').removeClass ('animate__animated animate__fadeInUp animate__slower')
    }
},{
    offset:'400px;'
})
$('section#testemunha').waypoint (function (direcao) {
    if (direcao == 'down') {
        $('div#testemunhos ul:eq(0)').addClass ('animate__animated animate__fadeInUp animate__slower')
        $('div#testemunhos ul:eq(1)').addClass ('animate__animated animate__fadeInUp animate__slow')
        $('div#testemunhos ul:eq(2)').addClass ('animate__animated animate__fadeInUp animate__slower')
    }
    if (direcao == 'up') {
        $('div#testemunhos ul:eq(0)').removeClass ('animate__animated animate__fadeInUp animate__slower')
        $('div#testemunhos ul:eq(1)').removeClass ('animate__animated animate__fadeInUp animate__slow')
        $('div#testemunhos ul:eq(2)').removeClass ('animate__animated animate__fadeInUp animate__slower')
    }
})
$('div.transicao-testemunha-plano').waypoint (function (direcao) {
    if (direcao == 'down') {
        $('div.transicao-testemunha-plano div.decoracao1').removeClass ('animate__animated animate__fadeOutLeft animate__slow')
        $('div.transicao-testemunha-plano div.decoracao2').removeClass ('animate__animated animate__fadeOut animate__slow')
        $('div.transicao-testemunha-plano div.decoracao3').removeClass ('animate__animated animate__fadeOutRight animate__slow')

        $('div.transicao-testemunha-plano div.decoracao1').addClass ('animate__animated animate__fadeInLeft animate__slow')
        $('div.transicao-testemunha-plano div.decoracao2').addClass ('animate__animated animate__fadeIn animate__slow')
        $('div.transicao-testemunha-plano div.decoracao3').addClass ('animate__animated animate__fadeInRight animate__slow')
    }
    else {
        $('div.transicao-testemunha-plano div.decoracao1').addClass ('animate__animated animate__fadeOutLeft')
        $('div.transicao-testemunha-plano div.decoracao2').addClass ('animate__animated animate__fadeIn')
        $('div.transicao-testemunha-plano div.decoracao3').addClass ('animate__animated animate__fadeOutRight')
    }
},{
    offset:'600px;'
})
$('section.plano-principal').waypoint (function (direcao) {
    if (direcao == 'down') {
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slower')
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeIn animate__slow')
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate__slower')
    }
    else{
    $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slower')
    $('div.planos:eq(1)').removeClass('animate__animated animate__fadeIn animate__slow')
    $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate__slower')
    }},{
        offset:'450px;'
    })
$('footer').waypoint (function (direcao) {
    if (direcao == 'down') {
        $('div.mapa').addClass ('animate__animated animate__fadeIn')
        $('div.info').addClass ('animate__animated animate__fadeIn')
        $('div.pizza-rodape-decoracao').addClass ('animate__animated animate__fadeIn')
    }
    else{
        $('div.mapa').removeClass ('animate__animated animate__fadeIn')
        $('div.info').removeClass ('animate__animated animate__fadeIn')
        $('div.pizza-rodape-decoracao').removeClass ('animate__animated animate__fadeIn')
    }},{
        offset:'650px;'
    }
)