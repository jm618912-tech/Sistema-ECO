import React, { useState, useMemo } from 'react';
import { PlantillaPrincipal } from './views/templates';
import { PaginaPuntoVenta, PaginaInventario, PaginaGerencia } from './views/pages';

// Initial data
const INITIAL_PRODUCTS = [
  { id: 1, name: 'Espresso', price: 2.50, category: 'Café', stock: 50, sales: 120 },
  { id: 2, name: 'Cappuccino', price: 3.75, category: 'Café', stock: 30, sales: 245 },
  { id: 3, name: 'Latte Vainilla', price: 4.25, category: 'Café', stock: 25, sales: 180 },
  { id: 4, name: 'Muffin de Arándanos', price: 2.75, category: 'Repostería', stock: 15, sales: 95 },
  { id: 5, name: 'Té Matcha', price: 4.00, category: 'Té', stock: 20, sales: 60 },
  { id: 6, name: 'Bagel de Queso', price: 3.50, category: 'Snacks', stock: 12, sales: 40 },
];

const SALES_DATA = {
  totalSales: 12450.00,
  totalOrders: 1840,
  averageTicket: 6.70,
  growthPercentage: 12.5,
  highestTicket: { amount: 45.00, table: 'Mesa 4', time: '15:30 PM' },
  period: 'Ene 2024 - Ene 2025',
};

const NAV_ITEMS = [
  { id: 'pos', label: 'Punto de Venta' },
  { id: 'admin', label: 'Inventario' },
  { id: 'manager', label: 'Gerencia' },
];

const App = () => {
  // State
  const [activeTab, setActiveTab] = useState('pos');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState(INITIAL_PRODUCTS);

  // Derived state
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    return products.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const topProducts = useMemo(() => {
    return [...products].sort((a, b) => b.sales - a.sales).slice(0, 3);
  }, [products]);

  const maxSales = useMemo(() => {
    return Math.max(...products.map(p => p.sales));
  }, [products]);

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cart]);

  // Handlers
  const handleNavigate = (tabId) => setActiveTab(tabId);
  
  const handleSearch = (query) => setSearchQuery(query);
  
  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const handleProcessPayment = () => {
    setCart([]);
    alert('Venta procesada con éxito');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleEditProduct = (product) => {
    console.log('Edit product:', product);
  };

  const handleDeleteProduct = (productId) => {
    console.log('Delete product:', productId);
  };

  const handleAddProduct = () => {
    console.log('Add new product');
  };

  const handleExport = (format) => {
    alert(`Exportando a ${format}...`);
  };

  // Render current page
  const renderPage = () => {
    switch (activeTab) {
      case 'pos':
        return (
          <PaginaPuntoVenta
            products={filteredProducts}
            cart={cart}
            cartTotal={cartTotal}
            onSearch={handleSearch}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onProcessPayment={handleProcessPayment}
          />
        );
      case 'admin':
        return (
          <PaginaInventario
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            onAdd={handleAddProduct}
          />
        );
      case 'manager':
        return (
          <PaginaGerencia
            products={products}
            topProducts={topProducts}
            maxSales={maxSales}
            salesData={SALES_DATA}
            onExport={handleExport}
          />
        );
      default:
        return null;
    }
  };

  return (
    <PlantillaPrincipal
      activeTab={activeTab}
      navItems={NAV_ITEMS}
      onNavigate={handleNavigate}
      onLogout={handleLogout}
    >
      {renderPage()}
    </PlantillaPrincipal>
  );
};

export default App;
