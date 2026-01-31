import React from 'react';
import { useApp } from '../../controllers';
import { EncabezadoSeccion, GrillaProductos, PanelCarrito } from '../organisms';

export const PaginaPuntoVenta = () => {
  const { filteredProducts, handleSearch, addToCart } = useApp();

  return (
    <div className="flex gap-8 h-full">
      <div className="flex-1 flex flex-col">
        <EncabezadoSeccion
          title="Terminal de Ventas"
          showSearch
          onSearch={handleSearch}
        />
        
        <GrillaProductos
          products={filteredProducts}
          onProductClick={addToCart}
        />
      </div>

      <PanelCarrito />
    </div>
  );
};

export default PaginaPuntoVenta;
