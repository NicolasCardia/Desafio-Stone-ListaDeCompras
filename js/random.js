class item{
    constructor (item, quantidade, preco, unidadeMedida, descricaoUnidadeMedida) {
        this.item = item;
        this.quantidade = quantidade;
        this.preco = preco;
        this.unidadeMedida = unidadeMedida;
        this.descricaoUnidadeMedida = descricaoUnidadeMedida;
    }
}
 
class pagamento {
    constructor(email, valor) {
        this.email = email;
        this.valor = valor;
    }
}

var valorTotalProdutos;
var qtdEmail;
var resto;
var dividaPorPessoa;
var restoDevido;

var listaItens = [];
var listaEmail = [];
var listaCompras = [];


function gerarItens(){
    let listaUnidadeMedida = ['kg', 'unidade', 'pacote'];
    let elemento;
    
    for (var i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
        listaItens.push(new item (`item ${i}`,Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 50 ) + 1, 1, `${elemento = listaUnidadeMedida[Math.floor(Math.random() * listaUnidadeMedida.length)]}`),);     
    }

}
gerarItens();


function gerarEmails(){
    for (var i = 0; i < Math.floor(Math.random() * 15) + 1; i++) {
        listaEmail.push("pessoa" + i +'@gmail.com'); 
    }
    console.log(listaEmail)
}
gerarEmails();


function valorTotalItens(listaItensInterno){
    valorTotalProdutos = 0

    for (let i = 0; i < listaItensInterno.length; i++) {
        console.log((listaItensInterno[i]));
        valorTotalProdutos = valorTotalProdutos + (listaItensInterno[i].quantidade * listaItensInterno[i].preco)
    }

    console.log("valor total", valorTotalProdutos)
}
valorTotalItens(listaItens);


function divideValorPorEmail(listaEmailInterno) {
    qtdEmail = listaEmailInterno.length
    dividaPorPessoa = 0

    dividaPorPessoa = Math.floor(valorTotalProdutos / qtdEmail)
    console.log("valor que cada pessoa deve pagar" ,dividaPorPessoa)    
}     
divideValorPorEmail(listaEmail);


function pegaResto(){
    resto = 0
    resto = (valorTotalProdutos % qtdEmail)   
    console.log(resto,'restinho')  
}
pegaResto();


function criaListaPagamentos(listaEmailInterno){
    var distribuicaoValorResto = 0

    if(valorTotalProdutos > qtdEmail) {
        //entender melhor isso
        for (var i = 0; i < listaEmailInterno.length; i++) {
            if (resto > 0) {
                distribuicaoValorResto = 1 
                resto -= distribuicaoValorResto
            }
                                
            listaCompras.push(new pagamento (listaEmailInterno[i], dividaPorPessoa + distribuicaoValorResto));
            distribuicaoValorResto = 0
     
        }
    } else {
        console.log("Essa divisão não vai dar um resultado positivo")
    }
    
}
criaListaPagamentos(listaEmail);

console.log((listaCompras));




    




