// Sales Model - Business logic for sales and reports

export const SALES_DATA = {
  totalSales: 12450.00,
  totalOrders: 1840,
  averageTicket: 6.70,
  highestTicket: {
    amount: 45.00,
    table: 'Mesa 4',
    time: '15:30 PM'
  },
  period: 'Ene 2024 - Ene 2025',
  growthPercentage: 12.5
};

export const calculateAverageTicket = (totalSales, totalOrders) => {
  if (totalOrders === 0) return 0;
  return totalSales / totalOrders;
};

export const calculateGrowth = (currentPeriod, previousPeriod) => {
  if (previousPeriod === 0) return 0;
  return ((currentPeriod - previousPeriod) / previousPeriod) * 100;
};

export const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

export const calculateSalesPercentage = (sales, maxSales) => {
  if (maxSales === 0) return 0;
  return (sales / maxSales) * 100;
};
