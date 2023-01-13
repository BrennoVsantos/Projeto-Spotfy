let fundo = document.querySelector('.ad-comprimento')

function mudaCor(cor){

    if(cor === 'red'){
        fundo.style.backgroundImage = `linear-gradient(to bottom, rgb(145, 63, 63), rgba(18,18,18,255))`;
    }
    else if(cor === 'green'){
        fundo.style.backgroundImage = 'linear-gradient(to bottom, rgb(63, 145, 70), rgba(18,18,18,255))';
    }
    else if(cor == 'grey'){
        fundo.style.backgroundImage = 'linear-gradient(to bottom, rgb(110, 121, 111), rgba(18,18,18,255))';
    }
    else if(cor === 'yellow'){
        fundo.style.backgroundImage = 'linear-gradient(to bottom, rgb(133, 145, 63), rgba(18,18,18,255))';
    }
    else if(cor === 'cian'){
        fundo.style.backgroundImage = 'linear-gradient(to bottom, rgb(89, 111, 136), rgba(18,18,18,255))';
    }
    else if(cor === 'pink'){
        fundo.style.backgroundImage = 'linear-gradient(to bottom, rgb(161, 103, 184), rgba(18,18,18,255))';
    }
    
}

function voltaCor(){
    fundo.style.backgroundImage = 'linear-gradient(to bottom, rgb(81, 63, 145), rgba(18,18,18,255))';
}