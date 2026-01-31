import React from 'react';
import { AppProvider, useApp } from './controllers';
import { PlantillaPrincipal } from './views/templates';
import { PaginaPuntoVenta, PaginaInventario, PaginaGerencia } from './views/pages';

// Main content component that uses the app context
const ContenidoPrincipal = () => {
  const { activeTab } = useApp();

  return (
    <PlantillaPrincipal>
      {activeTab === 'pos' && <PaginaPuntoVenta />}
      {activeTab === 'admin' && <PaginaInventario />}
      {activeTab === 'manager' && <PaginaGerencia />}
    </PlantillaPrincipal>
  );
};

// Root App component with Provider
const App = () => {
  return (
    <AppProvider>
      <ContenidoPrincipal />
    </AppProvider>
  );
};

export default App;
