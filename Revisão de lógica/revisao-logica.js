
 var clientes = [];
 
 function cadastrarCliente() {
     event.preventDefault();

     // var nome = document.getElementById('nome').value;
     // var idade = document.getElementById('idade').value;
     var objNome = document.getElementById('nome');
     var objIdade = document.getElementById('idade');
     
     //var cli = {};
     var cli = new Object();
        cli.nome = objNome.nome;
        cli.idade = objIdade.idade;

        clientes.push(cli);

        objNome.value = '';
        objIdade.value = '';

     // document.getElementById('nome').value = '';
     // document.getElementById('idade').value = '';

     console.log(clientes);

    /* var resultado;

     if( idade >= 18){
         resultado = 'Maior de idade';
     } else {
         resultado = 'Menor de idade';
     }

     var txt = "";
     txt    += "<p>";
     txt    += resultado;
     txt    += "</p>";
     document.getElementById('resultado').innerHTML = txt;
     */

     /*
     document.getElementById('resultado').innerHTML = "<p>";
     document.getElementById('resultado').innerHTML += resultado;
     document.getElementById('resultado').innerHTML += "</p>"
     console.log(resultado);
     */


     
 }