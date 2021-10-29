var digito1 = 0;
var digito2 = 0;
var operacion = "";

function init(){

    //Convertir variables htps a jv

    var resultado = document.getElementById("resultado")
    var siete = document.getElementById("siete")
    var ocho = document.getElementById("ocho")
    var nueve = document.getElementById("nueve")
    var borrar = document.getElementById("borrar")
    var reiniciar = document.getElementById("reiniciar")
    var cuatro = document.getElementById("cuatro")
    var cinco = document.getElementById("cinco")
    var seis = document.getElementById("seis")
    var multiplicacion = document.getElementById("multiplicacion")
    var division = document.getElementById("division")
    var uno = document.getElementById("uno")
    var dos = document.getElementById("dos")
    var tres = document.getElementById("tres")
    var suma = document.getElementById("suma")
    var resta = document.getElementById("resta")
    var cero = document.getElementById("cero")
    var punto = document.getElementById("punto")
    var igual = document.getElementById("igual")

    //Agregar funcion al click y colocar # en la barra de resultado

    siete.onclick = function(i){
        resultado.textContent = "7";
    }

    ocho.onclick = function(i){
        resultado.textContent = "8";
    }

    nueve.onclick = function(i){
        resultado.textContent = "9";
    }

    cuatro.onclick = function(i){
        resultado.textContent = "4";
    }

    cinco.onclick = function(i){
        resultado.textContent = "5";
    }

    seis.onclick = function(i){
        resultado.textContent = "6";
    }

    uno.onclick = function(i){
        resultado.textContent = "1";
    }

    dos.onclick = function(i){
        resultado.textContent = "2";
    }

    tres.onclick = function(i){
        resultado.textContent = "3";
    }

    cero.onclick = function(i){
        resultado.textContent = "0";
    }

    punto.onclick = function(i){
        resultado.textContent = ".";
    }

    //

    multiplicacion.onclick = function(i){
        digito1 = resultado.textContent;
        operacion = "x";
    }

    division.onclick = function(i){
        digito1 = resultado.textContent;
        operacion = "÷";
    }

    suma.onclick = function(i){
        digito1 = resultado.textContent;
        operacion = "+";
    }

    resta.onclick = function(i){
        digito1 = resultado.textContent;
        operacion = "-";
    }

    igual.onclick = function(i){
        digito2 = resultado.textContent;
        respuesta();
    }

    //Agregar funcion al click y colocar # en la barra de resultado

    function respuesta(){
        var contador = 0;
        if (operacion === "+"){
            contador = parseInt(digito1) + parseInt(digito2);
        }
        else if (operacion === "-"){
            contador = parseInt(digito1) - parseInt(digito2);
        }
        else if (operacion === "÷"){
            contador = parseInt(digito1) / parseInt(digito2);
        }
        else if(operacion === "x"){
            contador = parseInt(digito1) * parseInt(digito2);
        }
        else {
            contador = "";
        } 
        resultado.textContent = contador;
    }

}