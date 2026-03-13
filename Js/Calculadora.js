let pesoInput = document.getElementById("peso")
let alturaInput = document.getElementById("altura")
let botao = document.getElementById("calcular")
let resultado = document.getElementById("resultado")

botao.addEventListener("click", function(){

    let peso = parseFloat(pesoInput.value)
    let altura = parseFloat(alturaInput.value)

    let imc = peso / Math.pow(altura,2)

    let classificacao = ""

    if(imc < 18.5){
        classificacao = "Abaixo do peso"
    }
    else if(imc < 25){
        classificacao = "Peso normal"
    }
    else if(imc < 30){
        classificacao = "Sobrepeso"
    }
    else if(imc < 35){
        classificacao = "Obesidade grau I"
    }
    else if(imc < 40){
        classificacao = "Obesidade grau II"
    }
    else{
        classificacao = "Obesidade grau III"
    }

    resultado.innerText = "IMC: " + imc.toFixed(2) + " - " + classificacao

})