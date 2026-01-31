import React from 'react';
import { EncabezadoSeccion, GrillaProductos, PanelCarrito } from '../organisms';

export const PaginaPuntoVenta = ({
  products,
  cart,
  cartTotal,
  onSearch,
  onAddToCart,
  onRemoveFromCart,
  onProcessPayment,
}) => {
  return (
    <div className="flex gap-8 h-full">
      <div className="flex-1 flex flex-col">
        <EncabezadoSeccion
          title="Terminal de Ventas"
          showSearch
          onSearch={onSearch}
        />
        
        <GrillaProductos
          products={products}
          onProductClick={onAddToCart}
        />
      </div>

      <PanelCarrito
        cart={cart}
        cartTotal={cartTotal}
        onRemove={onRemoveFromCart}
        onProcessPayment={onProcessPayment}
      />
    </div>
  );
};

export default PaginaPuntoVenta;
