import React from 'react';
import { EncabezadoSeccion, TablaInventario } from '../organisms';

export const PaginaInventario = ({
  products,
  onEdit,
  onDelete,
  onAdd,
}) => {
  return (
    <div className="space-y-6">
      <EncabezadoSeccion
        title="Gestión de Inventario"
        subtitle="Administra el catálogo y existencias de la cafetería"
        showAddButton
        addButtonText="Nuevo Producto"
        onAdd={onAdd}
      />

      <TablaInventario
        products={products}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default PaginaInventario;
