import React from 'react';
import { EncabezadoSeccion, GraficoVentas, ListaTopProductos } from '../organisms';
import { TarjetaEstadistica } from '../molecules';

export const PaginaGerencia = ({
  products,
  topProducts,
  maxSales,
  salesData,
  onExport,
}) => {
  return (
    <div className="space-y-8">
      <EncabezadoSeccion
        title="Panel Gerencial"
        subtitle="Métricas de rendimiento y análisis de ventas"
        showDateRange
        dateRange={salesData.period}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <TarjetaEstadistica
          title="Ventas Totales del Periodo"
          value={`$${salesData.totalSales.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
          subtitle={`+${salesData.growthPercentage}% respecto al mes anterior`}
          subtitleVariant="success"
          valueClassName="text-amber-700"
        />
        <TarjetaEstadistica
          title="Pedidos Realizados"
          value={salesData.totalOrders.toLocaleString()}
          subtitle={`Ticket promedio: $${salesData.averageTicket.toFixed(2)}`}
          subtitleVariant="xs"
        />
        <TarjetaEstadistica
          title="Ticket Más Alto"
          value={`$${salesData.highestTicket.amount.toFixed(2)}`}
          subtitle={`${salesData.highestTicket.table} - ${salesData.highestTicket.time}`}
          subtitleVariant="muted"
          valueClassName="text-gray-800"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-8">
        <GraficoVentas
          products={products}
          maxSales={maxSales}
        />
        
        <ListaTopProductos
          products={topProducts}
          onExport={onExport}
        />
      </div>
    </div>
  );
};

export default PaginaGerencia;
