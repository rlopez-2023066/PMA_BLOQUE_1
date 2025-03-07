console.log("Ejercicio 3") 
console.log("=============") 

const inventory = [
    { id: 1, name: "Monitor", price: 300, stock: 10 },
    { id: 2, name: "Keyboard", price: 50, stock: 15 },
    { id: 3, name: "Mouse", price: 25, stock: 20 },
    { id: 4, name: "Headphones", price: 100, stock: 8 }
] 

console.log("Inventory:") 
inventory.forEach(p => console.log(`ID: ${p.id} | ${p.name} | $${p.price} | Stock: ${p.stock}`)) 

const findProductById = (id) => {
    const product = inventory.find(p => p.id === id) 
    console.log(product 
        ? `Product found: ${product.name} | $${product.price} | Stock: ${product.stock}` 
        : `No product with ID ${id}`) 
    return product 
} 

console.log("\nProduct search:") 
findProductById(3) 

const makePurchase = (id, quantity) => {
    const product = findProductById(id) 
    
    if (!product) return 
    if (product.stock < quantity) {
        console.log(`Not enough stock. Available: ${product.stock}`) 
        return 
    }
    
    product.stock -= quantity 
    const cost = product.price * quantity 
    console.log(`Purchase: ${quantity} ${product.name} | Total: $${cost} | Remaining: ${product.stock}`) 
} 

console.log("\nPurchase simulation:") 
makePurchase(2, 5) 

console.log("\nInsufficient stock simulation:") 
makePurchase(4, 10) 

const totalValue = inventory.reduce((sum, p) => sum + (p.price * p.stock), 0) 
console.log(`\nTotal inventory value: $${totalValue}`) 