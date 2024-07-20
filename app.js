let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();
//console.log(numeroSecreto);

function AsignarTextoElemento(elemento, texto){
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
 
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    //console.log(intentos);
    if (numeroDeUsuario===numeroSecreto) { //El usuario SI acerto 
        AsignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //habilita el boton Jugar de nuevo
    } else{ //El usuario NO acerto el número
        if (numeroDeUsuario > numeroSecreto){
            AsignarTextoElemento('p','El número Secreto es Menor');
        }else  {
            AsignarTextoElemento('p','El número Secreto es Mayor');
        }
        limpiarCaja();
        intentos++;
    }
    return;
}

function limpiarCaja() {
    valorCaja = document.querySelector('#valorUsuario').value =''; //se da el id de la caja en el codigo HTML
}

function GenerarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si el numero generado esta en la lista hacemos una operación si no hacemos otra
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numero entonces terminar
    if (listaNumerosSorteados.length == numeroMaximo) {
        AsignarTextoElemento('p','Ys se sortearon todos los números')
    }else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return GenerarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    AsignarTextoElemento('h1','Juego Del Número Secreto');
    AsignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);   
    intentos = 1;
    numeroSecreto = GenerarNumeroSecreto();
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar numero aleatoreo
    //inicializar el numero de intentos
    condicionesIniciales()
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
