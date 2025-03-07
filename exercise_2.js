console.log('Ejercicio 2');
console.log('-----------');

const cart = [
    {name: 'Refrigerador', 
    price: 5000,
    quantity: 1},


    {name: 'Lavadora', 
    price: 3000,
    quantity: 2},


    {name: 'Televisor',
    price: 8000, 
    quantity: 3},


    {name: 'Computadora', 
    price: 12000,
    quantity: 5},
]

let totalCart = 0

console.log('List Products');
cart.forEach(cart => {

    const total = cart.price * cart.quantity

    totalCart += total

    console.log(`Total product: ${cart.name} is ${total}`);
})

console.log(`The total of the cart is: ${totalCart}`);

