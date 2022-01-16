/* 
    QUANDO CLICAR NA SETA PARA ANVANÇAR TEMOS QUE ESCONDER TODAS AS IMAGENS E MOSTRAR A PRÓXIMA IMAGEM

        A IMAGEM ATUAL COMEÇA EM 0 E A PRIMEIRA IMAGEM
        ASSIM QUE FOR CLICANDO NO AVANÇAR EU PRECISO ADICIONAR MAIS 1 AO CONTADOR DE IMAGEM
        PRA PODER SABER QUE AGORA VOU MOSTRAR A SEGUNDA IMAGEM

        ESCONDER TODAS AS IMAGENS
            PEGAR TODAS AS IMAGENS E O 'DOM' E REMOVER A CLASSE MOSTRAR

        MOSTRAR A PRÓXIMA IMAGEM
            PEGAR TODAS AS IMAGENS, DESBRIR QUAL É A PRÓXIMA, E COLOCAR A CLASSE MOSTRA NELA


    */

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

//QUANDO CLICAR NA SETA PARA ANVANÇAR TEMOS QUE ESCONDER TODAS AS IMAGENS E MOSTRAR A PRÓXIMA IMAGEM

setaAvancar.addEventListener('click', function() { 

    //testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
        return;
    }

    
    // A IMAGEM ATUAL COMEÇA EM 0 E A PRIMEIRA IMAGEM
    // ASSIM QUE FOR CLICANDO NO AVANÇAR EU PRECISO ADICIONAR MAIS 1 AO CONTADOR DE IMAGEM
    // PRA PODER SABER QUE AGORA VOU MOSTRAR A SEGUNDA IMAGEM

    imagemAtual++;
/*

        ESCONDER TODAS AS IMAGENS
            PEGAR TODAS AS IMAGENS E O 'DOM' E REMOVER A CLASSE MOSTRAR

*/
esconderImagens();
    
/*
 MOSTRAR A PRÓXIMA IMAGEM
            PEGAR TODAS AS IMAGENS, DESBRIR QUAL É A PRÓXIMA, E COLOCAR A CLASSE MOSTRA NELA

            */

    mostrarImagem();

});

setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {
        console.log('não tem mais como voltar')
        return;
    }

    imagemAtual--;
/*
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
*/

/*
 MOSTRAR A PRÓXIMA IMAGEM
            PEGAR TODAS AS IMAGENS, DESBRIR QUAL É A PRÓXIMA, E COLOCAR A CLASSE MOSTRA NELA

            */

 //   imagensPainel[imagemAtual].classList.add('mostrar');
    esconderImagens();
    mostrarImagem();

})