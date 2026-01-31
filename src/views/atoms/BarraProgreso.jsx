import React from 'react';

export const BarraProgreso = ({ 
  percentage = 0,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`w-full bg-gray-100 rounded-full h-2.5 overflow-hidden ${className}`}
      {...props}
    >
      <div 
        className="bg-amber-500 h-2.5 rounded-full transition-all duration-1000"
        style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
      />
    </div>
  );
};

export default BarraProgreso;
