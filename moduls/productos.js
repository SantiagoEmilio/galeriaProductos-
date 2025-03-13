function crearProducto(imgSrc, nombre, precio, descripcion) {
    // Crear contenedor principal
    const producto = document.createElement("div");
    producto.classList.add("producto");

    // Crear imagen
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = nombre;
    producto.appendChild(img);

    // Crear nombre
    const titulo = document.createElement("h2");
    titulo.textContent = nombre;
    producto.appendChild(titulo);

    // Crear precio
    const precioElemento = document.createElement("p");
    precioElemento.classList.add("precio");
    precioElemento.textContent = `$${precio}`;
    producto.appendChild(precioElemento);

    // Crear descripción
    const desc = document.createElement("p");
    desc.textContent = descripcion;
    producto.appendChild(desc);

    return producto;
}

export{crearProducto}