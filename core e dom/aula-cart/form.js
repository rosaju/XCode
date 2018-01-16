var dadosCliente = {

    endereco : {
        pais : '',
        cidade : '',
        estado : '',
        endereco1 : '',
        endereco2 : '',
    },
    contato : {

    }

};

function validarFormulario(){

    event.preventDefault();

    //gerar objeto endereço baseado nos dados do validarFormulario
    objEndereco = {
        pais : document.getElementById('selection_country').value,
        cidade : document.getElementById('selection_city').value,
        estado : document.getElementById('state').value,
        endereco1: document.getElementById('ad1').value,
        endereco2: document.getElementById('ad2').value,
    };

    validarEndereco(objEndereco);

    //gerar objeto contato
}

function validarEndereco( _objEndereco ){

}

function validarContato( _objContato ){

}