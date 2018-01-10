var clientes = []; //variável global, vista por todas as funções

function cadastrarCliente() {
    event.preventDefault();
    
    var objNome  = document.getElementById('nome');
    //<input type="text" id="nome" value="valor que foi digitado" name="nome" placeholder="Seu nome aqui"><br>
    var objIdade = document.getElementById('idade');
    
    var cli       = new Object();
        cli.nome  = objNome.value;
        cli.idade = objIdade.value;
    
    clientes.push(cli);

    objNome.value   = '';
    objIdade.value  = '';
        
    listarClientes();
}

function listarClientes() {
    //gerar o template com o html dos clientes a ser
        //listado
        /*
         <p>
            nome : Eduardo<br>
            idade: 15
        </p>
        */
    event.preventDefault();

    var listaClientes = "";

    for (var i = 0; i < clientes.length; i++) {
        listaClientes += "<p>nome : "+clientes[i].nome+"<br>idade: "+clientes[i].idade+"</p>";
    }

    document.getElementById('resultado').innerHTML = listaClientes;
}