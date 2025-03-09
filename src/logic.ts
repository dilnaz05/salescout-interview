// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
    name: string;
    price: number;
};
 
function filterAndSortProducts(products: Product[]): Product[] {
    // Your code goes here
    const uniqueProductsMap = new Map<string, Product>();
    for (const product of products) {
        if (!uniqueProductsMap.has(product.name)) {
            uniqueProductsMap.set(product.name, product);
        }
        
    }

    const uniqueProducts = Array.from(uniqueProductsMap.values());

    uniqueProducts.sort((a,b)=>a.price -b.price);

    return uniqueProducts; 
}

const products: Product[]=[
    {name: 'Product1', price: 2000},
    {name: 'Product2', price: 3000},
    {name: 'Product3', price: 2000},
    {name: 'Product4', price: 2500},
    {name: 'Product5', price: 1000},
];

const res=filterAndSortProducts(products);
console.log(res);


module.exports = { filterAndSortProducts }
