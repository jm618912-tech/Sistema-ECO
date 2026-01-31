// Product Model - Business logic and data structure for products

export const INITIAL_PRODUCTS = [
  { id: 1, name: 'Espresso', price: 2.50, category: 'Café', stock: 50, sales: 120 },
  { id: 2, name: 'Cappuccino', price: 3.75, category: 'Café', stock: 30, sales: 245 },
  { id: 3, name: 'Latte Vainilla', price: 4.25, category: 'Café', stock: 25, sales: 180 },
  { id: 4, name: 'Muffin de Arándanos', price: 2.75, category: 'Repostería', stock: 15, sales: 95 },
  { id: 5, name: 'Té Matcha', price: 4.00, category: 'Té', stock: 20, sales: 60 },
  { id: 6, name: 'Bagel de Queso', price: 3.50, category: 'Snacks', stock: 12, sales: 40 },
];

export const filterProductsByName = (products, query) => {
  if (!query) return products;
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const getTopProducts = (products, limit = 3) => {
  return [...products].sort((a, b) => b.sales - a.sales).slice(0, limit);
};

export const getMaxSales = (products) => {
  return Math.max(...products.map(p => p.sales));
};

export const createProduct = (productData) => {
  return {
    id: Date.now(),
    name: productData.name || '',
    price: productData.price || 0,
    category: productData.category || '',
    stock: productData.stock || 0,
    sales: productData.sales || 0,
  };
};
