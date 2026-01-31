import React from 'react';
import { Coffee, ShoppingCart, Package, BarChart3 } from 'lucide-react';
import { Icono, Texto } from '../atoms';
import { ElementoNavegacion, PerfilUsuario } from '../molecules';

const ICON_MAP = {
  pos: ShoppingCart,
  admin: Package,
  manager: BarChart3,
};

export const BarraLateral = ({ 
  activeTab,
  navItems = [],
  onNavigate,
  onLogout,
  className = '' 
}) => {
  return (
    <aside className={`w-64 bg-gray-900 text-white flex flex-col p-4 ${className}`}>
      {/* Logo */}
      <div className="flex items-center space-x-3 px-2 mb-10 mt-2">
        <div className="bg-amber-600 p-2 rounded-lg">
          <Icono icon={Coffee} size={24} />
        </div>
        <Texto variant="h2" as="h1" className="tracking-tight text-white">
          KFE System
        </Texto>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map(item => (
          <ElementoNavegacion
            key={item.id}
            icon={ICON_MAP[item.id]}
            label={item.label}
            isActive={activeTab === item.id}
            onClick={() => onNavigate(item.id)}
          />
        ))}
      </nav>

      {/* User Profile */}
      <div className="border-t border-gray-800 pt-4 mt-auto">
        <PerfilUsuario onLogout={onLogout} />
      </div>
    </aside>
  );
};

export default BarraLateral;
