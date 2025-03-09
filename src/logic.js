// Implement a function which takes an array of Product and returns unique products sorted by price
function filterAndSortProducts(products) {
    // Your code goes here
    var uniqueProductsMap = new Map();
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        if (!uniqueProductsMap.has(product.name)) {
            uniqueProductsMap.set(product.name, product);
        }
    }
    var uniqueProducts = Array.from(uniqueProductsMap.values());
    uniqueProducts.sort(function (a, b) { return a.price - b.price; });
    return uniqueProducts;
}
var products = [
    { name: 'Product1', price: 2000 },
    { name: 'Product2', price: 3000 },
    { name: 'Product3', price: 2000 },
    { name: 'Product4', price: 2500 },
    { name: 'Product5', price: 1000 },
];
var res = filterAndSortProducts(products);
console.log(res);
module.exports = { filterAndSortProducts: filterAndSortProducts };
