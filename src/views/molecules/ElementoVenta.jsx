import React from 'react';
import { Texto, BarraProgreso } from '../atoms';

export const ElementoVenta = ({ 
  name, 
  sales, 
  maxSales,
  className = '' 
}) => {
  const percentage = maxSales > 0 ? (sales / maxSales) * 100 : 0;

  return (
    <div className={className}>
      <div className="flex justify-between text-sm mb-1">
        <Texto variant="body" className="font-medium text-gray-700">{name}</Texto>
        <Texto variant="body" className="font-bold">{sales} u.</Texto>
      </div>
      <BarraProgreso percentage={percentage} />
    </div>
  );
};

export default ElementoVenta;
