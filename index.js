//Inicio del progama
//Ingreso de nombre del cliente 

let nomCliente = prompt("**COTIZADOR 3D** \n Ingresar cliente");
console.log("Cliente: "+nomCliente);

let productos = "";
for (let i = 0; i < 1; i++){
    productos = prompt("Ingresa producto:");
}

console.log("Producto: "+productos);

//Ingresamos los valores en pesos para cotizar valor de costo del producto

function cotizar(){
    let precioFilamento=parseInt(prompt("Ingresar precio (ARS) del filamento"));
    let pesoBobina=parseInt(prompt("Ingresar peso (gramos) bobina completa de filamento"));
    let pesoProducto=parseInt(prompt("Ingresar peso en gramos del producto"));
    let resultado=precioFilamento/pesoBobina*pesoProducto;
    alert("El precio de costo del producto es: $"+resultado+" ARS");
}

cotizar();

//Cotizador en dolares

const COTIZACION_DOLAR = 500;
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;

let seleccion = prompt("¿Cotizar el valor en dolares? \n si \n no \n Ingrese si o no segun corresponda");
switch (seleccion){
    case "si":
        let valor = prompt("Ingresar valor en pesos");
        alert("El precio en dolares es: "+cotizarDolar(valor)+" USD");
        break;
    case "no":
        alert("Valor en dolar no requerido");
    default:
        break;
}