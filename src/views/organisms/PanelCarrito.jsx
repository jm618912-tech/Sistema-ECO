import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Texto, Boton, Icono } from '../atoms';
import { ElementoCarrito } from '../molecules';

export const PanelCarrito = ({ 
  cart = [],
  cartTotal = 0,
  onRemove,
  onProcessPayment,
  className = '' 
}) => {
  const isEmpty = cart.length === 0;

  return (
    <div className={`w-96 bg-white rounded-2xl shadow-xl flex flex-col border border-gray-100 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b">
        <Texto variant="h3" as="h3" className="flex items-center gap-2">
          <Icono icon={ShoppingCart} size={20} /> Orden Actual
        </Texto>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {isEmpty ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
            <Icono icon={ShoppingCart} size={48} className="stroke-1" />
            <Texto variant="muted" className="mt-2">Sin productos</Texto>
          </div>
        ) : (
          cart.map(item => (
            <ElementoCarrito
              key={item.id}
              item={item}
              onRemove={onRemove}
            />
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-6 bg-gray-50 rounded-b-2xl border-t space-y-4">
        <div className="flex justify-between text-lg font-bold">
          <Texto variant="body" className="font-bold text-lg">Total</Texto>
          <Texto variant="body" className="text-amber-700 font-bold text-lg">
            ${cartTotal.toFixed(2)}
          </Texto>
        </div>
        <Boton 
          variant="primary"
          size="full"
          disabled={isEmpty}
          onClick={onProcessPayment}
        >
          Confirmar Pago
        </Boton>
      </div>
    </div>
  );
};

export default PanelCarrito;
