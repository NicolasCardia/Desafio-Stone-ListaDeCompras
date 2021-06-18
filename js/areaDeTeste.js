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


var listaItens = []
var listaEmail = []
var listaCompras = [];

function CriarRandons(){
    let listaUnidadeMedida = ['kg', 'unidade', 'pacote']
    let elemento = listaUnidadeMedida[Math.floor(Math.random() * listaUnidadeMedida.length)]
    
    for (var i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {

        listaItens.push(new item (`item ${i}`,Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 50 ) + 1, 1, `${elemento = listaUnidadeMedida[Math.floor(Math.random() * listaUnidadeMedida.length)]}`),); 
    
        }

    for (var i = 0; i < Math.floor(Math.random() * 15) + 1; i++) {

    listaEmail.push("pessoa" + i +'@gmail.com'); 

    }
    console.log(listaEmail)
}
CriarRandons()

var valorTotal;
var qtdEmail;
var resto;
var valorPorPessoa;
var restoDevido;

function contar(listaItensInterno,  listaEmailInterno) {
    qtdEmail = listaEmailInterno.length
    valorTotal = 0
    valorPorPessoa = 0
    resto = 0

    for (var i = 0; i < listaItensInterno.length; i++) {
        console.log((listaItensInterno[i]));
        //map
        valorTotal = valorTotal + (listaItensInterno[i].quantidade * listaItensInterno[i].preco)
    }
    console.log("valor total", valorTotal)
    valorPorPessoa = Math.floor(valorTotal / qtdEmail)
        console.log("valor por pessoa" ,valorPorPessoa)

    resto = (valorTotal % qtdEmail)   
    console.log(resto,'restinho') 
     
}     

contar(listaItens, listaEmail);


function listar(listaEmailInterno){

    if(valorTotal > qtdEmail) {
    
        for (var i = 0; i < listaEmailInterno.length; i++) {
            if (resto > 0) {
                restoDevido = 1 
                resto = resto - restoDevido
            }
            else if(resto === 0){
                restoDevido = 0
            }
                                
            listaCompras.push(new pagamento (listaEmailInterno[i], valorPorPessoa + restoDevido));
            restoDevido = 0
                    
        }
    } else {
        console.log("Essa divisão não vai dar um resultado positivo")
    }
    
}
listar(listaEmail)

console.log((listaCompras));




    




