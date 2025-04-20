// JavaScript for adding items to cart and calculating total
let cart = [];
let total = 0;

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
    document.getElementById('cart-total').textContent = total;
}

function checkout() {
    if (cart.length > 0) {
        alert(`Total amount to pay: $${total}`);
        cart = [];
        total = 0;
        updateCart();
    } else {
        alert('Your cart is empty. Please add items to your cart before checkout.');
    }
}




