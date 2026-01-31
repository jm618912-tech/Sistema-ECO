import React, { createContext, useContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import { useNavigation } from '../hooks/useNavigation';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const productsController = useProducts();
  const cartController = useCart();
  const navigationController = useNavigation();

  const value = {
    // Products
    products: productsController.products,
    filteredProducts: productsController.filteredProducts,
    topProducts: productsController.topProducts,
    maxSales: productsController.maxSales,
    searchQuery: productsController.searchQuery,
    addProduct: productsController.addProduct,
    updateProduct: productsController.updateProduct,
    deleteProduct: productsController.deleteProduct,
    handleSearch: productsController.handleSearch,

    // Cart
    cart: cartController.cart,
    cartTotal: cartController.cartTotal,
    cartItemCount: cartController.itemCount,
    isCartEmpty: cartController.isEmpty,
    addToCart: cartController.addToCart,
    removeFromCart: cartController.removeFromCart,
    updateCartQuantity: cartController.updateQuantity,
    emptyCart: cartController.emptyCart,
    processPayment: cartController.processPayment,

    // Navigation
    activeTab: navigationController.activeTab,
    navigateTo: navigationController.navigateTo,
    isTabActive: navigationController.isActive,
    TABS: navigationController.TABS,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
