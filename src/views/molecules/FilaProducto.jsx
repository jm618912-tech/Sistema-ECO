import React from 'react';
import { Texto, Etiqueta, Boton } from '../atoms';

export const FilaProducto = ({ 
  product, 
  onEdit, 
  onDelete,
  className = '' 
}) => {
  const isLowStock = product.stock < 15;

  return (
    <tr className={`hover:bg-gray-50 transition-colors ${className}`}>
      <td className="p-4 font-medium">{product.name}</td>
      <td className="p-4">
        <Etiqueta variant="category">{product.category}</Etiqueta>
      </td>
      <td className="p-4">${product.price.toFixed(2)}</td>
      <td className="p-4">
        <div className="flex items-center space-x-2">
          <Etiqueta variant="status" status={isLowStock ? 'danger' : 'success'} />
          <Texto variant="body">{product.stock} unidades</Texto>
        </div>
      </td>
      <td className="p-4 text-right">
        <Boton 
          variant="ghost" 
          size="sm" 
          onClick={() => onEdit(product)}
          className="mr-4"
        >
          Editar
        </Boton>
        <Boton 
          variant="danger" 
          size="sm" 
          onClick={() => onDelete(product.id)}
        >
          Eliminar
        </Boton>
      </td>
    </tr>
  );
};

export default FilaProducto;
