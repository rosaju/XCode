//Escrever nota

//clickar em "CONCLUIDO"
//atualizar a tela
//apagar a nota
//criar o post-it

//Apagar nota

//clickar em "x"
//atualizar a tela
//sumir com o post-it

var listaNotas = [];

function atualizarSecao(secaoNotas) {
    //uma variavel para guardar o conteúdo da sessão 
    var conteudoSessao = "";

    //criar o html de cada nota e jogar dentro do conteúdo da sessão
    for (var i = 0; i < listaNotas.length; i++) {
        conteudoSessao += '<form class="note">' +
                            '<button class="note__control" type="button" onclick="removerNota(this.form.parentElement, ' + i + ')">' +
                                '<i class="fa fa-times" aria-hidden="true"></i>' +
                            '</button>' +
                            '<h1 class="note__title">' + listaNotas[i].titulo + '</h1>' +
                            '<p class="note__body">' + listaNotas[i].texto + '</p>' +
                        '</form>';
    }

    //colocar o conteúdo dentro da sessão
    secaoNotas.innerHTML = conteudoSecao
}

function criarNota(inputTitulo, textareaTexto, secaoNotas, formulario) {

    //guardar as informações numa variavel
    var nota = {
        titulo: inputTitulo.value,
        texto: textareaTexto.value
    };

    //colocar a variavel dentro da lista de notas
    listaNotas.push(nota);

    //atualizar a tela
    atualizarSecao(sessaoNotas);

    //limpar o formulário
    formulario.reset();
}

function removerNota(secaoNotas, indice) {
    //tirar o post-it da lista
    listaNotas.splice(indice, 1);
    console.log(listaNotas);

    //atualizar a sessão
    atualizarSecao(secaoNotas);
}

