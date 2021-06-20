class item{
    constructor (item, quantidade, preco, descricaoUnidadeMedida) {
        this.item = item;
        this.quantidade = quantidade;
        this.preco = preco;
        this.descricaoUnidadeMedida = descricaoUnidadeMedida;
    }
}
 
class pagamento {
    constructor(email, valor) {
        this.email = email;
        this.valor_a_ser_pago = valor;
    }
}


var valorTotalProdutos;
var qtdEmail;
var restoDivisao;
var valorPorPessoa;


var listaItens = [];
var listaEmail = [];
var listaPagamento = [];

var elemento;


function gerarItens(){
    let listaUnidadeMedida = ['kg', 'unidade', 'pacote'];
    
    for (var i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
        listaItens.push(new item (`item ${i}`,Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 50 ) + 1, `${elemento = listaUnidadeMedida[Math.floor(Math.random() * listaUnidadeMedida.length)]}`),);     
    }    

}
gerarItens();


function gerarEmails(){
    for (var i = 0; i < Math.floor(Math.random() * 15) + 1; i++) {
        listaEmail.push("pessoa" + i +'@gmail.com'); 
    }
    if(listaEmail.length > 1) {
        document.getElementById('tela').innerHTML += `<br> Os e-mails cadastrados são ${listaEmail.length} <br> [`
    }else {
        document.getElementById('tela').innerHTML += `${listaEmail.length} e-mail cadastrado <br> [`
    }

    for(var i = 0; i < listaEmail.length; i++){
        
        document.getElementById('tela').innerHTML += `${listaEmail[i]} <br>`
    }
    document.getElementById('tela').innerHTML += `]<br>`
}
gerarEmails();



function valorTotalItens(listaItensInterno){
    valorTotalProdutos = 0
    if(listaItensInterno.length > 1){
        document.getElementById('tela').innerHTML += `<br>A quantidade de produtos comprados são ${listaItensInterno.length}<br>`
    }else{
        document.getElementById('tela').innerHTML += `<br>Apenas ${listaItensInterno.length} item foi comprado<br>`

    }

    for (let i = 0; i < listaItensInterno.length; i++) {
        document.getElementById('tela').innerHTML += `O ${listaItensInterno[i].item} tem a quantidade de ${listaItensInterno[i].quantidade} (${listaItensInterno[i].descricaoUnidadeMedida}) e custa R$ ${listaItensInterno[i].preco} <br>`
        valorTotalProdutos += (listaItensInterno[i].quantidade * listaItensInterno[i].preco)
    }

    if(listaItensInterno.length > 1){
        document.getElementById('tela').innerHTML += `<br>O valor total dos produtos é R$ ${valorTotalProdutos} <br>`
    } else {
        document.getElementById('tela').innerHTML += `<br>O valor total do produto é R$ ${valorTotalProdutos} <br>`
    }
}
valorTotalItens(listaItens);



function divideValorPorEmail(listaEmailInterno) {
    qtdEmail = listaEmailInterno.length
    valorPorPessoa = 0

    valorPorPessoa = Math.floor(valorTotalProdutos / qtdEmail)
    document.getElementById('tela').innerHTML += `<br>valor que cada pessoa deve pagar é R$ ${valorPorPessoa} <br>`

}     
divideValorPorEmail(listaEmail);


function pegarrestoDivisaoDivisao(){
    restoDivisao = 0
    restoDivisao = (valorTotalProdutos % qtdEmail) 
    document.getElementById('tela').innerHTML += `<br>Valor a ser distribuido ${restoDivisao} <br><br>`
    document.getElementById("tela").innerHTML += `<button class="botao" onclick="printarListaPagamentos()">Gerar lista de pagamentos</button><br>`;
  
}
pegarrestoDivisaoDivisao();


function  criaListaPagamentos(listaEmailInterno ){
    let distribuicaoValorRestoDivisao = 0

    if(valorTotalProdutos > qtdEmail) {
        for (var i = 0; i < listaEmailInterno.length; i++) {
            if (restoDivisao > 0) {
                distribuicaoValorRestoDivisao = 1 
                restoDivisao -= distribuicaoValorRestoDivisao
            }
            
            listaPagamento.push(new pagamento (listaEmailInterno[i], valorPorPessoa + distribuicaoValorRestoDivisao + `<br>` ));
            distribuicaoValorRestoDivisao = 0
            
        }
    } else {
        document.getElementById('tela').innerHTML += `Essa divisão não vai dar um resultado positivo`
    }
    
}
criaListaPagamentos(listaEmail);


function printarListaPagamentos(){

    str = JSON.stringify(listaPagamento);
    document.getElementById('tela').innerHTML = str ;        
    document.getElementById("tela").innerHTML += `<br><br><button class="botao" onclick="window.location.reload()">Gerar outra lista</button>`;

}







    




