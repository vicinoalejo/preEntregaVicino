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

// CLIENTES

class Cliente{
    constructor(nombre, numCliente, numTelefono, empresa){
        this.nombre = nombre;
        this.numCliente = numCliente;
        this.numTelefono = numTelefono;
        this.empresa = empresa;
    }
}

const cliente1 = new Cliente("Guillermo Mercado", "1", "1558471256","Mercado3d");
const cliente2 = new Cliente("Fernando Perez", "2", "1569585472","Perez3d");
const cliente3 = new Cliente("Ivan Lopez", "3", "1532759426","Lopez3d");
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

let seccion = document.getElementById("principal");
console.log(seccion.innerHTML);

let titulo = document.getElementById("titulo");
console.log(titulo.innerText);

let campoCLiente = document.getElementById("cliente");
let campoProducto = document.getElementById("producto");
campoCLiente.value = "Jose Perez";
campoProducto.value = "Soporte Celular";

let principal = document.getElementById("principal");
let boton = document.getElementById("mode");
let modo = localStorage.getItem("modo");

//BOTON DARK/LIGHT
if(modo != null){
    if(modo == "dark"){
        document.body.className = modo;
        principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center "+modo;
        boton.innerText="Light Mode";
    }
}else{
    modo = "light";
}

boton.onclick = () => {
    if(modo == "light"){
        document.body.className="dark";
        principal.classList.remove("light");
        principal.classList.add("dark");
        boton.innerText="Light Mode";
        modo = "dark";
    }else{
        document.body.className="light";
        principal.classList.remove("dark");
        principal.classList.add("light");
        boton.innerText="Dark Mode";
        modo = "light";
    }
    localStorage.setItem("modo",modo);
}
