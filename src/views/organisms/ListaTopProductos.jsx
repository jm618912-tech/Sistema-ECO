import React from 'react';
import { Texto, Boton } from '../atoms';
import { ProductoEstrella } from '../molecules';

export const ListaTopProductos = ({ 
  products = [],
  onExport,
  className = '' 
}) => {
  return (
    <div className={`bg-white p-6 rounded-xl border shadow-sm ${className}`}>
      <Texto variant="h4" as="h3" className="mb-6 flex items-center gap-2 text-amber-800">
        Top 3 Productos Estrella
      </Texto>
      
      <div className="space-y-4">
        {products.map((product, index) => (
          <ProductoEstrella
            key={product.id}
            product={product}
            ranking={index + 1}
          />
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t">
        <Texto variant="h4" className="text-gray-700 mb-4">Exportar Información</Texto>
        <div className="flex gap-2">
          <Boton 
            variant="outline" 
            size="sm"
            onClick={() => onExport('PDF')}
            className="flex-1"
          >
            PDF REPORT
          </Boton>
          <Boton 
            variant="outline" 
            size="sm"
            onClick={() => onExport('Excel')}
            className="flex-1"
          >
            EXCEL DATA
          </Boton>
        </div>
      </div>
    </div>
  );
};

export default ListaTopProductos;
