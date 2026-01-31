import React from 'react';
import { useApp } from '../../controllers';
import { EncabezadoSeccion, TablaInventario } from '../organisms';

export const PaginaInventario = () => {
  const { products, updateProduct, deleteProduct, addProduct } = useApp();

  const handleEdit = (product) => {
    console.log('Edit product:', product);
    // Implement edit modal/form
  };

  const handleDelete = (productId) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      deleteProduct(productId);
    }
  };

  const handleAddNew = () => {
    console.log('Add new product');
    // Implement add modal/form
  };

  return (
    <div className="space-y-6">
      <EncabezadoSeccion
        title="Gestión de Inventario"
        subtitle="Administra el catálogo y existencias de la cafetería"
        showAddButton
        addButtonText="Nuevo Producto"
        onAdd={handleAddNew}
      />

      <TablaInventario
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default PaginaInventario;
