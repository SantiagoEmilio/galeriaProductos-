import { crearProducto } from "../moduls/productos.js";
import { productosAPI } from "../services /api.js"; 
async function mostrarProductos() {
    try {
        let datos = await productosAPI();
        console.log(datos);
        todosLosproductos(datos);
    } catch (error) {
        console.error("Error:", error);
    }
}

function todosLosproductos(data) {
    let DOM = document.querySelector("#root"); // ✅ Corregido `querySelector("root")` a `#root`

    if (!DOM) {
        console.error("Error: No se encontró el contenedor con ID 'root'");
        return;
    }

    data.forEach(element => { // ✅ Corregido `data.array.forEach` a `data.forEach`
        console.log(element);
        let productoElemento = crearProducto(element.image, element.title, element.price, element.description); 
        DOM.appendChild(productoElemento);
    });
}

export { mostrarProductos };
