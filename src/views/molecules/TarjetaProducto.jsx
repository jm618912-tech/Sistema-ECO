import React from 'react';
import { Coffee } from 'lucide-react';
import { Texto } from '../atoms';

export const TarjetaProducto = ({ 
  product, 
  onClick,
  className = '' 
}) => {
  return (
    <button 
      onClick={() => onClick(product)}
      className={`
        bg-white p-4 rounded-xl shadow-sm border border-transparent 
        hover:border-amber-500 hover:shadow-md transition-all text-left
        ${className}
      `}
    >
      <div className="w-full h-32 bg-amber-50 rounded-lg mb-3 flex items-center justify-center text-amber-600">
        <Coffee size={40} />
      </div>
      <Texto variant="h4" as="h3">{product.name}</Texto>
      <Texto variant="small" className="text-gray-500">{product.category}</Texto>
      <Texto variant="price" as="p" className="mt-2">
        ${product.price.toFixed(2)}
      </Texto>
    </button>
  );
};

export default TarjetaProducto;
