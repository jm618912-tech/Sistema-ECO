import React from 'react';

const VARIANTS = {
  h1: 'text-3xl font-bold',
  h2: 'text-2xl font-bold',
  h3: 'text-xl font-bold',
  h4: 'text-lg font-bold',
  body: 'text-base',
  small: 'text-sm',
  xs: 'text-xs',
  label: 'text-sm text-gray-500 font-medium',
  price: 'text-amber-600 font-bold',
  success: 'text-green-500 text-xs font-bold',
  muted: 'text-gray-400 italic',
};

export const Texto = ({ 
  children, 
  variant = 'body', 
  as: Component = 'span',
  className = '',
  ...props 
}) => {
  const variantStyles = VARIANTS[variant] || VARIANTS.body;

  return (
    <Component 
      className={`${variantStyles} ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
};

export default Texto;
