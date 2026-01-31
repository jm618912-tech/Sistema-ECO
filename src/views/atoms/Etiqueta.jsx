import React from 'react';

const VARIANTS = {
  category: 'px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full uppercase font-bold tracking-wider',
  status: 'w-2 h-2 rounded-full',
  badge: 'px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium',
};

export const Etiqueta = ({ 
  children, 
  variant = 'category',
  status,
  className = '',
  ...props 
}) => {
  if (variant === 'status') {
    const statusColor = status === 'danger' ? 'bg-red-500' : 'bg-green-500';
    return (
      <span 
        className={`${VARIANTS.status} ${statusColor} ${className}`}
        {...props}
      />
    );
  }

  const variantStyles = VARIANTS[variant] || VARIANTS.category;

  return (
    <span 
      className={`${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Etiqueta;
