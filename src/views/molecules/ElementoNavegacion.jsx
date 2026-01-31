import React from 'react';
import { Icono, Texto } from '../atoms';

export const ElementoNavegacion = ({ 
  icon, 
  label, 
  isActive = false,
  onClick,
  className = '' 
}) => {
  const activeStyles = isActive 
    ? 'bg-amber-600 text-white shadow-lg' 
    : 'text-gray-400 hover:bg-gray-800 hover:text-white';

  return (
    <button 
      onClick={onClick}
      className={`
        w-full flex items-center space-x-3 p-4 rounded-lg transition-colors
        ${activeStyles} ${className}
      `}
    >
      <Icono icon={icon} size={20} />
      <Texto variant="body" className="font-medium">{label}</Texto>
    </button>
  );
};

export default ElementoNavegacion;
