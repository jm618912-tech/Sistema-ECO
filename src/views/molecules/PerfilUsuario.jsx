import React from 'react';
import { User, LogOut } from 'lucide-react';
import { Texto, Icono } from '../atoms';

export const PerfilUsuario = ({ 
  name = 'Admin KFE', 
  role = 'Gerente',
  onLogout,
  className = '' 
}) => {
  return (
    <div className={`flex items-center space-x-3 p-2 ${className}`}>
      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
        <Icono icon={User} size={20} />
      </div>
      <div>
        <Texto variant="small" className="font-semibold text-white">{name}</Texto>
        <Texto variant="xs" className="text-gray-400">{role}</Texto>
      </div>
      <button 
        onClick={onLogout}
        className="text-gray-500 cursor-pointer hover:text-red-400 ml-auto"
        aria-label="Cerrar sesión"
      >
        <Icono icon={LogOut} size={18} />
      </button>
    </div>
  );
};

export default PerfilUsuario;
