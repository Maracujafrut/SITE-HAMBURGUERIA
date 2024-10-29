let cartCount = 0;

function adicionarSacola(item) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(item + " adicionado à sacola!");
}

function comprar(item) {
    alert("Comprando " + item + "!");
}

