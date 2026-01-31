import React from 'react';
import { useApp } from '../../controllers';
import { SALES_DATA } from '../../models';
import { EncabezadoSeccion, GraficoVentas, ListaTopProductos } from '../organisms';
import { TarjetaEstadistica } from '../molecules';

export const PaginaGerencia = () => {
  const { products, topProducts, maxSales } = useApp();

  return (
    <div className="space-y-8">
      <EncabezadoSeccion
        title="Panel Gerencial"
        subtitle="Métricas de rendimiento y análisis de ventas"
        showDateRange
        dateRange={SALES_DATA.period}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <TarjetaEstadistica
          title="Ventas Totales del Periodo"
          value={`$${SALES_DATA.totalSales.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
          subtitle={`+${SALES_DATA.growthPercentage}% respecto al mes anterior`}
          subtitleVariant="success"
          valueClassName="text-amber-700"
        />
        <TarjetaEstadistica
          title="Pedidos Realizados"
          value={SALES_DATA.totalOrders.toLocaleString()}
          subtitle={`Ticket promedio: $${SALES_DATA.averageTicket.toFixed(2)}`}
          subtitleVariant="xs"
        />
        <TarjetaEstadistica
          title="Ticket Más Alto"
          value={`$${SALES_DATA.highestTicket.amount.toFixed(2)}`}
          subtitle={`${SALES_DATA.highestTicket.table} - ${SALES_DATA.highestTicket.time}`}
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
        />
      </div>
    </div>
  );
};

export default PaginaGerencia;
