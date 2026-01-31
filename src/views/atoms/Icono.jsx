import React from 'react';

export const Icono = ({ 
  icon: IconComponent, 
  size = 20, 
  className = '',
  ...props 
}) => {
  if (!IconComponent) return null;

  return (
    <IconComponent 
      size={size} 
      className={className} 
      {...props} 
    />
  );
};

export default Icono;
