console.log('Ejercicio 1');
console.log('-----------');

const product = {
    name: 'Televisión',
    price: '10000',
    availability: true
}

const discount = 0.1 

console.log('Product Description')
console.log(`Name: ${product.name}`);
console.log(`Price: ${product.price}`);
console.log(`Availability: ${product.availability}`);

const priceDiscount = product.price * discount

console.log(`Price with 10% discount ${priceDiscount}`);