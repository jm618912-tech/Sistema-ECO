import React from 'react';
import { Coffee, ChevronRight } from 'lucide-react';
import { Texto, Icono } from '../atoms';

export const ProductoEstrella = ({ 
  product, 
  ranking,
  className = '' 
}) => {
  return (
    <div 
      className={`
        flex items-center p-4 bg-amber-50 rounded-xl border border-amber-100 
        relative overflow-hidden
        ${className}
      `}
    >
      <div className="text-4xl font-black text-amber-200 absolute -right-2 -bottom-2 opacity-50 italic">
        #{ranking}
      </div>
      <div className="w-12 h-12 bg-amber-600 text-white rounded-lg flex items-center justify-center mr-4 shadow-md">
        <Icono icon={Coffee} size={24} />
      </div>
      <div className="flex-1">
        <Texto variant="h4">{product.name}</Texto>
        <Texto variant="small" className="text-amber-700">
          {product.sales} ventas acumuladas
        </Texto>
      </div>
      <Icono icon={ChevronRight} className="text-amber-300" />
    </div>
  );
};

export default ProductoEstrella;
