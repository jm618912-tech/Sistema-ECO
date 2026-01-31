import { useState, useMemo, useCallback } from 'react';
import { 
  INITIAL_PRODUCTS, 
  filterProductsByName, 
  getTopProducts, 
  getMaxSales,
  createProduct 
} from '../../models/ProductModel';

export const useProducts = () => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return filterProductsByName(products, searchQuery);
  }, [products, searchQuery]);

  const topProducts = useMemo(() => {
    return getTopProducts(products, 3);
  }, [products]);

  const maxSales = useMemo(() => {
    return getMaxSales(products);
  }, [products]);

  const addProduct = useCallback((productData) => {
    const newProduct = createProduct(productData);
    setProducts(prev => [...prev, newProduct]);
    return newProduct;
  }, []);

  const updateProduct = useCallback((productId, updates) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === productId 
          ? { ...product, ...updates } 
          : product
      )
    );
  }, []);

  const deleteProduct = useCallback((productId) => {
    setProducts(prev => prev.filter(product => product.id !== productId));
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return {
    products,
    filteredProducts,
    topProducts,
    maxSales,
    searchQuery,
    addProduct,
    updateProduct,
    deleteProduct,
    handleSearch,
  };
};
