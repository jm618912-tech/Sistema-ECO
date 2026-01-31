import { useState, useMemo, useCallback } from 'react';
import { 
  addItemToCart, 
  removeItemFromCart, 
  updateItemQuantity,
  calculateCartTotal,
  getCartItemCount,
  clearCart 
} from '../../models/CartModel';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const cartTotal = useMemo(() => {
    return calculateCartTotal(cart);
  }, [cart]);

  const itemCount = useMemo(() => {
    return getCartItemCount(cart);
  }, [cart]);

  const isEmpty = useMemo(() => {
    return cart.length === 0;
  }, [cart]);

  const addToCart = useCallback((product) => {
    setCart(prev => addItemToCart(prev, product));
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart(prev => removeItemFromCart(prev, productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    setCart(prev => updateItemQuantity(prev, productId, quantity));
  }, []);

  const emptyCart = useCallback(() => {
    setCart(clearCart());
  }, []);

  const processPayment = useCallback(() => {
    if (cart.length === 0) return false;
    
    // Here you would integrate with payment processing
    alert("Venta procesada con éxito");
    setCart(clearCart());
    return true;
  }, [cart]);

  return {
    cart,
    cartTotal,
    itemCount,
    isEmpty,
    addToCart,
    removeFromCart,
    updateQuantity,
    emptyCart,
    processPayment,
  };
};
