import React from 'react';
import { TarjetaProducto } from '../molecules';

export const GrillaProductos = ({ 
  products, 
  onProductClick,
  className = '' 
}) => {
  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      {products.map(product => (
        <TarjetaProducto
          key={product.id}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
};

export default GrillaProductos;
