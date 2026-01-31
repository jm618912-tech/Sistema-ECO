import React from 'react';
import { BarChart3 } from 'lucide-react';
import { Texto, Icono } from '../atoms';
import { ElementoVenta } from '../molecules';

export const GraficoVentas = ({ 
  products, 
  maxSales,
  className = '' 
}) => {
  return (
    <div className={`bg-white p-6 rounded-xl border shadow-sm ${className}`}>
      <Texto variant="h4" as="h3" className="mb-6 flex items-center gap-2">
        <Icono icon={BarChart3} size={18} /> Ventas por Productos (Unidades)
      </Texto>
      <div className="space-y-4">
        {products.map(product => (
          <ElementoVenta
            key={product.id}
            name={product.name}
            sales={product.sales}
            maxSales={maxSales}
          />
        ))}
      </div>
    </div>
  );
};

export default GraficoVentas;
