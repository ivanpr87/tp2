class Producto {

    constructor(id, nombre, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;

    }

}

class Shop {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }

    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }

        return total;
    }
}


const productos = []


function clearCarrito() {
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";

}


function actCarrito(carrito) {
    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach((producto) => {
        divCarrito.innerHTML += ` ${producto.nombre} - 
    <img src="./img/${producto.imagen}" class="card-img-top" style="width:300px;height:220px;" alt="...">`; 
    });
    divCarrito.innerHTML += `<p>Precio total: $ ${carrito.calcularTotal()}</p>`;
}

function renovarStorage() {
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito))

}



window.addEventListener(`DOMContentLoaded`, (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let cSave = new Shop(storage.id, storage.productos);
    storage.productos.forEach(productos => {
        cSave.productos.push(productos)
    })
    
    clearCarrito()
    actCarrito(cSave)

})

productos.push(new Producto(1, "leche", "leche.jpg", 57));
productos.push(new Producto(2, "arroz", "arroz.jpg", 47));
productos.push(new Producto(3, "oreo", "Oreo.jpg", 27));




let cotenedorProductos = document.getElementById("contenedor-productos")

for (const cosa of productos) {

    let columna = document.createElement("div")
    columna.className = "col-md-2 mt-3 m-4"
    columna.id = `columna-${cosa.id}`
    columna.innerHTML = `
    
        <div class="card" >
            <img src="./img/${cosa.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Nombre: <b>${cosa.nombre}</b></p>
                
                <p class="card-text">Precio: <b>$ ${cosa.precio}</b></p>
                <button class="btn btn-primary botonDeAgregar" id=${cosa.id}>agregar</button>
                
            </div> 
        </div>    
    `
    cotenedorProductos.appendChild(columna);



}


let carrito = new Shop(1);

let btnAddToCart = document.querySelectorAll(".botonDeAgregar");


btnAddToCart.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let productoElegido = productos.find(
            (producto) => producto.id == e.target.id
        );

        carrito.productos.push(productoElegido);
        Toastify({
            text: "Producto Agregado al carrito",
            duration: 3000,
            gravity: 'bottom',
            position: 'center'
        }).showToast();

        clearCarrito();
        actCarrito(carrito);
        renovarStorage(carrito);
    });
});

function registrarProducto(produ){
    fetch("https://62e703540e5d74566aee63b8.mockapi.io/producto", {
        method: "POST",
        body: JSON.stringify(produ),
        headers: {
            "Content-type":"application/json" 
        }
    }).then(response => response.json())
    .then((data) => console.log(data));

}


const produARegistrar = 

    {"createdAt":"2022-07-31T14:09:40.998Z",
    "name":"Jabon",
    "precio":548,};

registrarProducto(produARegistrar)

