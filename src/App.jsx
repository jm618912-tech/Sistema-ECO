import React, { useState, useMemo } from 'react';
import { 
  Coffee, 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Plus, 
  Trash2, 
  Search,
  ChevronRight,
  User,
  LogOut,
  Calendar
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('pos');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Datos iniciales de productos
  const [products, setProducts] = useState([
    { id: 1, name: 'Espresso', price: 2.50, category: 'Café', stock: 50, sales: 120 },
    { id: 2, name: 'Cappuccino', price: 3.75, category: 'Café', stock: 30, sales: 245 },
    { id: 3, name: 'Latte Vainilla', price: 4.25, category: 'Café', stock: 25, sales: 180 },
    { id: 4, name: 'Muffin de Arándanos', price: 2.75, category: 'Repostería', stock: 15, sales: 95 },
    { id: 5, name: 'Té Matcha', price: 4.00, category: 'Té', stock: 20, sales: 60 },
    { id: 6, name: 'Bagel de Queso', price: 3.50, category: 'Snacks', stock: 12, sales: 40 },
  ]);

  // Lógica del Punto de Venta
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Lógica de Gerencia
  const topProducts = useMemo(() => {
    return [...products].sort((a, b) => b.sales - a.sales).slice(0, 3);
  }, [products]);

  const maxSales = Math.max(...products.map(p => p.sales));

  // Componentes de Interfaz
  const SidebarItem = ({ icon: Icon, label, id }) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-colors ${activeTab === id ? 'bg-amber-600 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
        <div className="flex items-center space-x-3 px-2 mb-10 mt-2">
          <div className="bg-amber-600 p-2 rounded-lg">
            <Coffee size={24} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">KFE System</h1>
        </div>
        
        <nav className="flex-1 space-y-2">
          <SidebarItem icon={ShoppingCart} label="Punto de Venta" id="pos" />
          <SidebarItem icon={Package} label="Inventario" id="admin" />
          <SidebarItem icon={BarChart3} label="Gerencia" id="manager" />
        </nav>

        <div className="border-t border-gray-800 pt-4 mt-auto">
          <div className="flex items-center space-x-3 p-2">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <User size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold">Admin KFE</p>
              <p className="text-xs text-gray-400">Gerente</p>
            </div>
            <LogOut size={18} className="text-gray-500 cursor-pointer hover:text-red-400 ml-auto" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        
        {/* MODULO 1: PUNTO DE VENTA */}
        {activeTab === 'pos' && (
          <div className="flex gap-8 h-full">
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Terminal de Ventas</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Buscar producto..." 
                    className="pl-10 pr-4 py-2 border rounded-full bg-white focus:ring-2 focus:ring-amber-500 outline-none w-64"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {products
                  .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(product => (
                  <button 
                    key={product.id}
                    onClick={() => addToCart(product)}
                    className="bg-white p-4 rounded-xl shadow-sm border border-transparent hover:border-amber-500 hover:shadow-md transition-all text-left"
                  >
                    <div className="w-full h-32 bg-amber-50 rounded-lg mb-3 flex items-center justify-center text-amber-600">
                      <Coffee size={40} />
                    </div>
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-amber-600 font-bold mt-2">${product.price.toFixed(2)}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Panel de Orden (Carrito) */}
            <div className="w-96 bg-white rounded-2xl shadow-xl flex flex-col border border-gray-100">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <ShoppingCart size={20} /> Orden Actual
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400">
                    <ShoppingCart size={48} strokeWidth={1} />
                    <p className="mt-2 italic">Sin productos</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">x{item.quantity} - ${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div className="p-6 bg-gray-50 rounded-b-2xl border-t space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-amber-700">${cartTotal.toFixed(2)}</span>
                </div>
                <button 
                  disabled={cart.length === 0}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 text-white font-bold py-4 rounded-xl transition-colors shadow-lg"
                  onClick={() => {
                    setCart([]);
                    alert("Venta procesada con éxito");
                  }}
                >
                  Confirmar Pago
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODULO 2: ADMINISTRACIÓN DE PRODUCTOS */}
        {activeTab === 'admin' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Gestión de Inventario</h2>
                <p className="text-gray-500">Administra el catálogo y existencias de la cafetería</p>
              </div>
              <button className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors">
                <Plus size={20} />
                <span>Nuevo Producto</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="p-4 font-semibold text-gray-600">Producto</th>
                    <th className="p-4 font-semibold text-gray-600">Categoría</th>
                    <th className="p-4 font-semibold text-gray-600">Precio</th>
                    <th className="p-4 font-semibold text-gray-600">Stock</th>
                    <th className="p-4 font-semibold text-gray-600 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {products.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium">{product.name}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full uppercase font-bold tracking-wider">
                          {product.category}
                        </span>
                      </td>
                      <td className="p-4">${product.price.toFixed(2)}</td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <span className={`w-2 h-2 rounded-full ${product.stock < 15 ? 'bg-red-500' : 'bg-green-500'}`}></span>
                          <span>{product.stock} unidades</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-amber-600 hover:underline mr-4 text-sm font-bold">Editar</button>
                        <button className="text-red-500 hover:underline text-sm font-bold">Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MODULO 3: GERENCIA Y REPORTES */}
        {activeTab === 'manager' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Panel Gerencial</h2>
                <p className="text-gray-500">Métricas de rendimiento y análisis de ventas</p>
              </div>
              <div className="flex items-center bg-white border rounded-lg px-4 py-2 text-sm text-gray-600 shadow-sm">
                <Calendar size={16} className="mr-2" />
                <span>Ene 2024 - Ene 2025</span>
              </div>
            </div>

            {/* Cards de Información Rápida */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <p className="text-sm text-gray-500 font-medium">Ventas Totales del Periodo</p>
                <p className="text-3xl font-bold mt-2 text-amber-700">$12,450.00</p>
                <div className="mt-4 flex items-center text-green-500 text-xs font-bold">
                  <span>+12.5% respecto al mes anterior</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <p className="text-sm text-gray-500 font-medium">Pedidos Realizados</p>
                <p className="text-3xl font-bold mt-2">1,840</p>
                <div className="mt-4 flex items-center text-amber-600 text-xs font-bold">
                  <span>Ticket promedio: $6.70</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <p className="text-sm text-gray-500 font-medium">Ticket Más Alto</p>
                <p className="text-3xl font-bold mt-2 text-gray-800">$45.00</p>
                <div className="mt-4 flex items-center text-gray-400 text-xs font-bold italic">
                  <span>Mesa 4 - 15:30 PM</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Gráfica de Ventas por Producto */}
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="font-bold mb-6 flex items-center gap-2">
                  <BarChart3 size={18} /> Ventas por Productos (Unidades)
                </h3>
                <div className="space-y-4">
                  {products.map(p => (
                    <div key={p.id}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700">{p.name}</span>
                        <span className="font-bold">{p.sales} u.</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-amber-500 h-2.5 rounded-full transition-all duration-1000"
                          style={{ width: `${(p.sales / maxSales) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Los 3 más vendidos */}
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-amber-800">
                   Top 3 Productos Estrella
                </h3>
                <div className="space-y-4">
                  {topProducts.map((p, index) => (
                    <div key={p.id} className="flex items-center p-4 bg-amber-50 rounded-xl border border-amber-100 relative overflow-hidden">
                      <div className="text-4xl font-black text-amber-200 absolute -right-2 -bottom-2 opacity-50 italic">
                        #{index + 1}
                      </div>
                      <div className="w-12 h-12 bg-amber-600 text-white rounded-lg flex items-center justify-center mr-4 shadow-md">
                        <Coffee size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{p.name}</h4>
                        <p className="text-sm text-amber-700">{p.sales} ventas acumuladas</p>
                      </div>
                      <ChevronRight className="text-amber-300" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-bold text-gray-700 mb-4">Exportar Información</h4>
                  <div className="flex gap-2">
                    <button className="flex-1 border-2 border-gray-100 hover:bg-gray-50 p-2 rounded-lg text-xs font-bold transition-colors">PDF REPORT</button>
                    <button className="flex-1 border-2 border-gray-100 hover:bg-gray-50 p-2 rounded-lg text-xs font-bold transition-colors">EXCEL DATA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;