//dados reais viriam do back end (banco de dados)
var produtos = [
    {//0
        codigo : 50,
        imagem : {
            src     : './img/camiseta.jpg',
            alt     : "texto alternativo",
            title   : "título da imagem"
        },
        descricao    : 'Puma Golf Raglan Tech Polo Tee',
        cor         : 'Purple',
        preco       : 72,
        qtd         : 3
    },
    {//1
        codigo : 99,
        imagem : {
            src     : './img/tenis.jpg',
            alt     : "texto alternativo",
            title   : "título da imagem"
        },
        descricao    : 'Nike Mens Running Shoe',
        cor         : 'White',
        preco       : 50,
        qtd         : 1
    },
    {//2
        codigo : 287,
        imagem : {
            src     : './img/jaqueta.jpg',
            alt     : "texto alternativo",
            title   : "título da imagem"
        },
        descricao    : 'DC Mens Axis Snowboard Jacket',
        cor         : 'White',
        preco       : 89.97,
        qtd         : 2
    },    
]


/**
    <div class="product">
        <i class="fa fa-times-circle"></i>
        <img src="img/camiseta.png" alt="t-shirt" class="product__img">
        <span id="p1" class="product__name"></span>
        <span id="c1" class="product__color"></span>
        <span id="s1" class="product__size"></span>
        <span id="v1" class="product__value"></span>*<input type="number" name="" id=""> = <span>$216</span>
    </div>
 */
function listarProdutos(){
 //Gerar o template através do array de objetos
    var template = "";
    var subtotal = 0;
    var moeda = "R$";
    
    for(var i = 0; i < produtos.length; i++){
        var totalProduto = (produtos[i].qtd * produtos[i].preco);

        template += '<div class="product">';
        template +=     '<i class="fa fa-times-circle"></i>';
        template +=     '<img src="' +produtos[i].imagem.src+ '" alt="t-shirt" class="product__img">';
        template +=     '<span id="p1" class="product__name">'+produtos[i].descricao+'</span>';
        template +=     '<span id="c1" class="product__color">'+produtos[i].cor+'</span>';
        template +=     '<span id="s1" class="product__size"></span>';
        template +=     '<span id="v1" class="product__value" id=""><strong>R$ </strong>'+produtos[i].preco+'</span>*<input type="number" onchange="atualizarQuantidade(this.id, this.value)"  value="'+produtos[i].qtd+'" name="" id="'+produtos[i].codigo+'"> = <span id=> <strong>R$ </strong>'+totalProduto+'</span>';
        template += '</div>'; 
        subtotal += (produtos[i].qtd * produtos[i].preco);
        console.log(subtotal);
    }

    document.getElementById("subtotal").innerText = "Subtotal:" + moeda+subtotal;

    document.getElementById("products").innerHTML = template;
}

function atualizarQuantidade(_codigo, _qtd){
    

    for (var index = 0; index < produtos.length; index++) {

        if( produtos[index].codigo == _codigo ){
            //fazer as atualizações
            produtos[index].qtd = _qtd;

            //atualizar o total do produto
            var totalProduto = produtos[index].qtd * produtos[index].preco;
            var codPro = 'total-' + produtos[index].codigo;

            document.getElementById(codPro).innerHTML = "<strong>R$ </strong>"
            //atualizar o total geral
            console.log(produtos[index]);
            break;
        }
        
        
    }
}

/*
function validaSexo(_id){
    alert(_id);
}
*/