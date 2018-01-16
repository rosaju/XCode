var dadosCliente = {

    endereco : {
        pais : '',
        cidade : ''
    },
    contato : {

    }

};

function validarFormulario(){
    //gerar objeto endereço baseado nos dados do validarFormulario
    objEndereco = {
        pais : document.getElementById('selection_country').value
    };

    dadosCliente.endereco = objEndereço;
    console.log( objEndereco );

    //gerar objeto contato
}

function validarEndereco( _objEndereco ){

}

function validarContato( _objContato ){

}