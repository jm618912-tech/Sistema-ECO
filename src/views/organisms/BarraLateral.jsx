import React from 'react';
import { Coffee, ShoppingCart, Package, BarChart3 } from 'lucide-react';
import { Icono, Texto } from '../atoms';
import { ElementoNavegacion, PerfilUsuario } from '../molecules';
import { useApp } from '../../controllers';

const NAV_ITEMS = [
  { id: 'pos', icon: ShoppingCart, label: 'Punto de Venta' },
  { id: 'admin', icon: Package, label: 'Inventario' },
  { id: 'manager', icon: BarChart3, label: 'Gerencia' },
];

export const BarraLateral = ({ className = '' }) => {
  const { activeTab, navigateTo } = useApp();

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logout clicked');
  };

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
        {NAV_ITEMS.map(item => (
          <ElementoNavegacion
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeTab === item.id}
            onClick={() => navigateTo(item.id)}
          />
        ))}
      </nav>

      {/* User Profile */}
      <div className="border-t border-gray-800 pt-4 mt-auto">
        <PerfilUsuario onLogout={handleLogout} />
      </div>
    </aside>
  );
};

export default BarraLateral;
