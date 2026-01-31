import React from 'react';
import { Texto } from '../atoms';

export const TarjetaEstadistica = ({ 
  title, 
  value, 
  subtitle,
  subtitleVariant = 'success',
  valueClassName = '',
  className = '' 
}) => {
  return (
    <div className={`bg-white p-6 rounded-xl border shadow-sm ${className}`}>
      <Texto variant="label">{title}</Texto>
      <Texto 
        variant="h1" 
        as="p" 
        className={`mt-2 ${valueClassName}`}
      >
        {value}
      </Texto>
      {subtitle && (
        <div className="mt-4 flex items-center">
          <Texto variant={subtitleVariant}>{subtitle}</Texto>
        </div>
      )}
    </div>
  );
};

export default TarjetaEstadistica;
