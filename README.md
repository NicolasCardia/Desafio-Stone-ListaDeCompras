
![foto_readme](https://user-images.githubusercontent.com/75455191/122658846-5f339a80-d148-11eb-8d08-efa6fb6971f6.png)


# Índice

- [Desafio](#Desafio)

- [Premissas](#Premissas)

- [Linguagem de programção escolhida para realizar o teste técnico](#Linguagem-de-programação-escolhida-para-realizar-o-teste-técnico)

- [Como rodar o projeto](#como-rodar-o-projeto)

- [Informações técnicas](#Informações-técnicas)


# Desafio

Imagine uma lista de compras. Ela possui:

<ul>

<li>Itens

<li>Quantidade de cada item

<li>Preço por unidade/peso/pacote de cada item

**Desenvolva uma função (ou método) que irá receber uma lista de compras (como a detalhada acima) e uma lista de e-mails. Aqui, cada e-mail representa uma pessoa**.
</ul>

**A função deve**:

- Calcular a soma dos valores, ou seja, multiplicar o preço de cada item por sua quantidade e somar todos os itens

- Dividir o valor de forma igual entre a quantidade de e-mails

- Retornar um mapa/dicionário onde a chave será o e-mail e o valor será quanto ele deve pagar nessa conta.


# Premissas
1º **É importante que não falte nenhum centavo!** Então caso ocorra uma divisão que o resultado é uma dizima infinita, o "resto" do valor deve ser distribuido entre os e-mails, até que o resto fique igual a **0** 
>**exemplo:**
 - valorTotalProdutos = 3
 - e-mails = 2
 - valorTotalProdutos(3) ÷ e-mails(2) = **1** (valorOriginal = 1.5)
 - resto = 1
 - **Resultado:**
- 1º e-mail deve pagar **2**
- 2º e-mail deve pagar **1**

2º **NÃO trabalhe com valores decimais**. Ou seja, ponto flutuante ou float. Use **inteiros** para representar os valores!

3º A quantidade de e-mails deve ser **menor** que o valor total dos produtos, para evitar que gere números menores que **1** . 


# Linguagem de programção escolhida para realizar o teste técnico
  ![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)
> por ser a linguagem que eu mais tenho conhecimento atualmente.


# Como rodar o projeto

## Primeiro Passo
De um git clone no projeto e abra o arquivo **index.html** no seu navegador

## Segundo Passo

Você recebera uma lista randomica de emails, uma lista randomica de produtos, a soma do valor total dos produtos e o resto (caso o resultado da divisão seja um valor decimal) que é o valor que vamos distribuir entre os email-s

## Terceiro Passo
Clicar no botão "Gerar lista de pagamento" para poder ver quanto cada e-mail deve pagar 
-> Caso queira repetir o processo com outros números basta clicar no botão "gerar outra lista".


# Informações técnicas
**1º Crio duas classes, item e pagamento**
-  a class item é para criar um objeto "item" com todos os métodos e atributos nescessarios para retornar uma parâmetro
- a class pagamento é para gerar o objeto de pagamento que recebe o email e o valor a ser pago

**2º crio a minhas variáveis** 
> para serem usadas nas funções e os arrays vazio serem preenchidos com o metodo .push() nas funções gerarItens(), gerarEmails() e criarListaPagamento. 

**3º crio as minhas funções**
> que criam os itens, e-mails e listaDePagamentos e realizam as lógicas matemáticas.

**Lógica matemática:**

quantidade * preco = valorTotalProduto

valorTotalProdutos + valorTotalProduto = valorTotalProdutos

valorTotalProdutos / qtdEmail = valorPorPessoa (se não for um número inteiro, ele será arredondado para baixo)

qtdEmail % valorTotalProdutos = restoDaDivisão

**4º Printo os resultados na Tela**

Printo na tela usando O Modelo de Objeto de Documento (**DOM**) 
