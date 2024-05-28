// variables
var allProducts = document.querySelectorAll('.btn-primary')
var cart = document.getElementById('cart')
var btn = document.getElementById('btn1')
var priceDiv = document.getElementById('total-price')
var h2Total = document.getElementById('totalPrice-h2')
var confirmOrder = document.getElementById('confirm') 
var totalPrice = 0
 
// add items function
allProducts.forEach(function(item) {
    item.onclick = function() {
        cart.style.display = 'block'
        btn.style.display = 'block'

        cart.innerHTML += item.getAttribute('name') + ' '

        totalPrice += +(item.getAttribute('price'))
    }
})

// counting total price function
btn.onclick = function() {
    h2Total.style.display = 'block'
    priceDiv.style.display = 'block'
    confirmOrder.style.display = 'block'
    priceDiv.innerHTML = totalPrice + '$'
}