  //declaracion de variables 

let operacion = "";
let cifra = "0";
let acumulado = 0;
let coma = false;

//FUNCIONES

const displayNumeros = numero => {
    if (cifra == "0"){
        cifra = "";
    }
    document.getElementById("display").value = (cifra + numero);
    cifra = document.getElementById("display").value;
};

// Boton CE
function limpiarDisplay() {
    document.getElementById("display").value="0";
    operacion = "";
    cifra = "0";
    acumulado= 0;

}

// funciones de cada operacion
const suma=() => {
    if(operacion == "-"){
        operacion = "+";
        cifra = 0;
        acumulado = acumulado + parseFloat(cifra);
    }else if (operacion == "*"){
        operacion = "+";
        cifra = 0;
        acumulado = acumulado + parseFloat(cifra);
    }else if (operacion == "/"){
        operacion = "+";
        cifra = 0;
        acumulado = acumulado + parseFloat(cifra);
    }
    if (operacion == "+"){
    }else {
        acumulado = acumulado + parseFloat(cifra);
        document.getElementById("display").value=acumulado;
        cifra ="";
        operacion = "+";
    }
};
const restar = () => {
    if(operacion == "+"){
        operacion = "-";
        cifra = 0;
        acumulado = acumulado - parseFloat(cifra);
    }else if (operacion == "*"){
        operacion = "-";
        cifra = 0;
        acumulado = acumulado - parseFloat(cifra);
    }else if (operacion == "/"){
        operacion = "-";
        cifra = 0;
        acumulado = acumulado - parseFloat(cifra);
    }
    //Este script permitira detectar si el usuario apreta mas de una vez el boton -
    if (operacion == "-"){ 
    }else {
        acumulado = parseFloat(cifra) - acumulado;
        document.getElementById("display").value=acumulado;
        cifra ="";
        operacion ="-";
    }
};
const multiplicar = () => {
    if(operacion == "+"){
        operacion = "*";
        cifra = 0;
    }else if (operacion == "-"){
        operacion = "*";
        cifra = 0;
    }else if (operacion == "/"){
        operacion = "*";
        cifra = 0;
    }
    if (operacion == "*"){
    }else{
        if (acumulado == 0) {
            acumulado = parseFloat(cifra); 
        } else {
            acumulado = acumulado * parseFloat(cifra); 
        }
        document.getElementById("display").value=acumulado;  
        cifra ="";
        operacion ="*";
    }
};
const dividir = () => {
    if(operacion == "+"){
        operacion = "/";
        cifra = 0;
        document.getElementById("display").value=acumulado;
    }else if (operacion == "-"){
        operacion = "/";
        cifra = 0;
    }else if (operacion == "*"){
        operacion = "/";
        cifra = 0;
    }
    if (operacion == "/"){
    }else{
        if (acumulado == 0) {
            acumulado = parseFloat(cifra);
        }
        if (acumulado != parseFloat(cifra)) {
            acumulado =  acumulado / parseFloat(cifra); 
        }
        document.getElementById("display").value=acumulado;
        cifra ="";
        operacion ="/";
    }
};

const botonComa = () => {
    if (coma == true){
        
    }else{
        document.getElementById("display").value=(cifra+".");
        cifra = document.getElementById("display").value;
        coma = true;
       
    }
   
}

const igual = () => {
    switch (operacion) {
        case '+':
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display").value= acumulado;
            break;
        case '-':
            acumulado = acumulado - parseFloat(cifra)
            document.getElementById("display").value= acumulado;
            break;
        case '/':
            acumulado = acumulado / parseFloat(cifra)
            document.getElementById("display").value= acumulado;
            break;
        case '*':
            acumulado = acumulado * parseFloat(cifra)
            document.getElementById("display").value= acumulado;
            break;
    }
}


