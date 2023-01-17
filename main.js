function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play(); 
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; 
    const idAudio = `#som_${instrumento}`; //template string 
    //como ele vai pegar a classe dos botões e transformar de forma composta na id dos sons? Ele pega só o texto.

    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    contador ++;

    //console.log (contador);
}



