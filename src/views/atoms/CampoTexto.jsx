import React from 'react';

export const CampoTexto = ({ 
  value,
  onChange,
  placeholder = '',
  type = 'text',
  className = '',
  icon: Icon,
  ...props 
}) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
          size={18} 
        />
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          ${Icon ? 'pl-10' : 'pl-4'} 
          pr-4 py-2 border rounded-full bg-white 
          focus:ring-2 focus:ring-amber-500 outline-none
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default CampoTexto;
