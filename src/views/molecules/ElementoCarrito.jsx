import React from 'react';
import { Trash2 } from 'lucide-react';
import { Texto, Boton } from '../atoms';

export const ElementoCarrito = ({ 
  item, 
  onRemove,
  className = '' 
}) => {
  return (
    <div 
      className={`
        flex justify-between items-center bg-gray-50 p-3 rounded-lg
        ${className}
      `}
    >
      <div>
        <Texto variant="small" className="font-semibold">{item.name}</Texto>
        <Texto variant="xs" className="text-gray-500">
          x{item.quantity} - ${(item.price * item.quantity).toFixed(2)}
        </Texto>
      </div>
      <Boton 
        variant="danger" 
        size="sm"
        onClick={() => onRemove(item.id)}
        aria-label={`Eliminar ${item.name}`}
      >
        <Trash2 size={18} />
      </Boton>
    </div>
  );
};

export default ElementoCarrito;
