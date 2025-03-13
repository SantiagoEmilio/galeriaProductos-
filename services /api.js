async function productosAPI() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        return []; // ✅ Evita que `undefined` cause errores en `forEach`
    }
}

export { productosAPI };
