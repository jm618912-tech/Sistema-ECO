import React from 'react';

const VARIANTS = {
  primary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg',
  secondary: 'bg-gray-900 text-white hover:bg-black',
  danger: 'text-red-400 hover:text-red-600',
  ghost: 'text-amber-600 hover:underline',
  outline: 'border-2 border-gray-100 hover:bg-gray-50',
};

const SIZES = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-4 py-4 text-base',
  full: 'w-full py-4',
};

export const Boton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'font-bold rounded-xl transition-colors flex items-center justify-center gap-2';
  const variantStyles = VARIANTS[variant] || VARIANTS.primary;
  const sizeStyles = SIZES[size] || SIZES.md;
  const disabledStyles = disabled ? 'disabled:bg-gray-300 disabled:cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

export default Boton;
