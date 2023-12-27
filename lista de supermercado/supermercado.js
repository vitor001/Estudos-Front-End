var items = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    /*
    <div class="lista-produto-single">
            <h3>RedBull</h3>
            <h3 class="preço-produto"><span>R$20,00</span></h3>
    </div>

    
    */ 

    let listaProdutos = document.querySelector('.lista-produto');
    listaProdutos.innerHTML = "";
    let somaProduto = document.querySelector('.soma-produto');
    somaProduto.innerHTML = "";
    let soma = 0;
    items.map(function(val){
        soma+= parseFloat(val.valor);
        listaProdutos.innerHTML+=`
        <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="preço-produto"><span>R$`+val.valor+`</span></h3>
        </div>
         `;
    });

    //para o elemento soma ter apenas duas casas decimais
    soma = soma.toFixed(2);
    somaProduto.innerHTML+=`
        <h1>Total: R$`+soma+`</h1>
    `;

    // para limpar o conteudo escrito após clicar no botão
    nomeProduto.value = "";
    precoProduto.value = "";
});

document.querySelector('button[name=limpar]').addEventListener('click', ()=>{
    items = [];

    document.querySelector('.lista-produto').innerHTML = "";
    document.querySelector('.soma-produto').innerHTML = "";
    
});