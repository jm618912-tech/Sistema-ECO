import React from 'react';
import { FilaProducto } from '../molecules';

export const TablaInventario = ({ 
  products, 
  onEdit, 
  onDelete,
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border overflow-hidden ${className}`}>
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4 font-semibold text-gray-600">Producto</th>
            <th className="p-4 font-semibold text-gray-600">Categoría</th>
            <th className="p-4 font-semibold text-gray-600">Precio</th>
            <th className="p-4 font-semibold text-gray-600">Stock</th>
            <th className="p-4 font-semibold text-gray-600 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {products.map(product => (
            <FilaProducto
              key={product.id}
              product={product}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaInventario;
