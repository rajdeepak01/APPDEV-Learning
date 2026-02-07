const products = {
    name: "Maggie",
    price: 7,
    inStock: false,
}

const Display = document.getElementById("products")
Display.innerHTML = 
`<h2><strong>name:</strong>${products.name}</h2>
 <p><strong>Price:</strong>${products.price}</p>
 <p><strong>In Stock:</strong>${products.inStock}</p>
`

