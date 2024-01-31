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
        $('div#testemunha-esquerda, div#testemunha-direita').addClass ('animate__animated animate__heartBeat')
    }
    if (direcao == 'up'){
        $('div#testemunha-esquerda, div#testemunha-direita').removeClass ('animate__animated animate__heartBeat')
    }
},{
    offset:'450px;'
    })