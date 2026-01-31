// Cart Model - Business logic for shopping cart operations

export const addItemToCart = (cart, product) => {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    return cart.map(item => 
      item.id === product.id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    );
  }
  
  return [...cart, { ...product, quantity: 1 }];
};

export const removeItemFromCart = (cart, productId) => {
  return cart.filter(item => item.id !== productId);
};

export const updateItemQuantity = (cart, productId, quantity) => {
  if (quantity <= 0) {
    return removeItemFromCart(cart, productId);
  }
  
  return cart.map(item => 
    item.id === productId 
      ? { ...item, quantity } 
      : item
  );
};

export const calculateCartTotal = (cart) => {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

export const getCartItemCount = (cart) => {
  return cart.reduce((count, item) => count + item.quantity, 0);
};

export const clearCart = () => [];
