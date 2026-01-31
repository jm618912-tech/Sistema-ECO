import React from 'react';
import { Search, Plus, Calendar } from 'lucide-react';
import { Texto, CampoTexto, Boton, Icono } from '../atoms';

export const EncabezadoSeccion = ({ 
  title, 
  subtitle,
  showSearch = false,
  onSearch,
  showAddButton = false,
  addButtonText = 'Nuevo',
  onAdd,
  showDateRange = false,
  dateRange,
  className = '' 
}) => {
  return (
    <div className={`flex justify-between items-center mb-6 ${className}`}>
      <div>
        <Texto variant="h2" as="h2">{title}</Texto>
        {subtitle && (
          <Texto variant="label" as="p" className="mt-1">{subtitle}</Texto>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        {showSearch && (
          <CampoTexto
            icon={Search}
            placeholder="Buscar producto..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-64"
          />
        )}
        
        {showAddButton && (
          <Boton 
            variant="secondary"
            icon={Plus}
            onClick={onAdd}
          >
            {addButtonText}
          </Boton>
        )}
        
        {showDateRange && (
          <div className="flex items-center bg-white border rounded-lg px-4 py-2 text-sm text-gray-600 shadow-sm">
            <Icono icon={Calendar} size={16} className="mr-2" />
            <Texto variant="small">{dateRange}</Texto>
          </div>
        )}
      </div>
    </div>
  );
};

export default EncabezadoSeccion;
