import React from 'react';
import { BarraLateral } from '../organisms';

export const PlantillaPrincipal = ({ children, className = '' }) => {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      <BarraLateral />
      <main className={`flex-1 overflow-y-auto p-8 ${className}`}>
        {children}
      </main>
    </div>
  );
};

export default PlantillaPrincipal;
