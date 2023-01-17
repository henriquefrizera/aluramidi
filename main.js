function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio); 

    if (elemento /*!= null (não precisa pois o if no JavaScript já é inteligente para fazer essa verificação, se elemento existe ja vai cair como uma condição verdadeira*/ && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');        
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (i=0; i< listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        
        //console.log(evento.code === 'Space');

        if (evento.code === 'Space' || evento.code === 'Enter')  {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
    
}
    