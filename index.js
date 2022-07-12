class Producto {

    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }

}

class Pedido {

    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;

    }

}
let importe = 0
const productos = []
const PEDIDO = []
const tablita = []




productos.push(new Producto(1,"leche", 57));
productos.push(new Producto(2,"arroz", 47));
productos.push(new Producto(3,"oreo", 27));

function mostrarProductos() {
    alert("bienvedos al chino online")

    for (const producto of productos) {
        let nombreP = producto.nombre
        let precioP = producto.precio

        alert("Hay stock de: " + nombreP + "\n Precio: " + precioP )

    }


}

function seleccion() {
    let opcion = prompt("elige su producto por el numero: \n 1. Leche \n 2. Arroz \n 3 oreo")
    return opcion
}

function totalCantidad() {
    
    let cant = prompt("Coloque la cantidad total de productos que va a llevar")
    
    return cant
}

function cantidad() {
    let cantidadP = totalCantidad()

    for (i = 1; cantidadP >= i; i++) {
        let productoS = seleccion();

        switch (productoS) {

            case "1":
                PEDIDO.push(new Pedido(1,"leche", 57))
                break;
            case "2":
                PEDIDO.push(new Pedido(2,"arroz", 47))
                break;
            case "3":
                PEDIDO.push(new Pedido(3,"oreo", 27))
                break;
            default:
                alert("no pusiste una opcion valida")
                break;

        }

    }

    importe = prompt("con cuanto va a pagar")

}

function cuenta () {
    let total = 0
    let vuelto = 0
    let mostrar = "" 
    for (const P of PEDIDO){
        total = total + P.precio
    }

    vuelto= importe - total
    if (vuelto > 0){
        alert("Su vuelto es " + vuelto);
    }
    else if (vuelto < 0){
        alert("paga la plata " )
    }
    else {
        alert("usted pago justo")
    }
    for (const P of PEDIDO){
        mostrar = mostrar + " \n" + P.nombre
    }
    alert("su pedido es: " + mostrar)
    alert("vuelvas prontos")
}


let cotenedorProductos = document.getElementById("contenedor-productos")

for (const cosa of productos){
    
    let columna =  document.createElement("div")
    columna.className = "col-md-2 mt-3 m-4"
    columna.id = `columna-${cosa.id}`
    columna.innerHTML = `
    
        <div class="card" >
            <div class="card-body">
                <p class="card-text">Nombre: <b>${cosa.nombre}</b></p>
                
                <p class="card-text">Precio: <b>${cosa.precio}</b></p>
                <button class="btn btn-primary" id=btnPrincipal>agregar</button>
                
            </div> 
        </div>    
    `
    cotenedorProductos.appendChild(columna);
}


let boton = document.getElementById("btnPrincipal") 

boton.addEventListener("click", () =>{
    alert("se oprimio")
}) 



mostrarProductos()
cantidad()
cuenta()

