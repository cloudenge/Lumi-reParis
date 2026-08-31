import React, { useState } from 'react';
import { LumiereParisLogo } from './Logo';
import { 
  LayoutDashboard, 
  BarChart3, 
  ShoppingBag, 
  Search, 
  Bell, 
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Filter
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'reports' | 'products'>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly'>('weekly');

  const productsData = [
    { id: 1, name: 'AI Outreach Agent', popularity: 88, sales: '$48,250', growth: '+18%' },
    { id: 2, name: 'Pipeline Automator', popularity: 74, sales: '$32,100', growth: '+12%' },
    { id: 3, name: 'Revenue Forecaster', popularity: 62, sales: '$21,450', growth: '+9%' },
    { id: 4, name: 'Lead Intelligence DB', popularity: 49, sales: '$14,800', growth: '+5%' },
  ].filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-0 sm:mt-2">
      {/* Container simulating the bottom preview dashboard */}
      <div className="rounded-t-2xl sm:rounded-t-3xl border-t border-x border-neutral-800 bg-[#09090b] shadow-2xl overflow-hidden min-h-[420px] transition-all">
        
        {/* Top Window Bar controls */}
        <div className="px-4 py-3 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-3 text-xs text-neutral-400 font-mono hidden sm:inline-block">app.vetra.ai/dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-[11px] font-medium text-sky-400">
              <Sparkles className="w-3 h-3" /> Live Demo
            </span>
          </div>
        </div>

        {/* Dashboard Frame Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
          
          {/* Sidebar */}
          <aside className="md:col-span-3 lg:col-span-2 bg-[#0d0d0f] p-4 border-r border-neutral-800/80 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Sidebar Logo */}
              <div className="px-2 pt-1 pb-3">
                <LumiereParisLogo size="sm" />
              </div>

              {/* Sidebar Navigation */}
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'dashboard'
                      ? 'bg-neutral-800 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 text-sky-400" />
                  <span>Dashboard</span>
                </button>

                <button
                  onClick={() => setActiveTab('reports')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'reports'
                      ? 'bg-neutral-800 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  <BarChart3 className="w-4 h-4 text-neutral-400" />
                  <span>Sales Report</span>
                </button>

                <button
                  onClick={() => setActiveTab('products')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'products'
                      ? 'bg-neutral-800 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 text-neutral-400" />
                  <span>Products</span>
                </button>
              </nav>
            </div>

            {/* AI Status Widget in Sidebar */}
            <div className="hidden md:block p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/80 mt-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-[11px] font-medium text-white">AI Engine Active</span>
              </div>
              <p className="text-[10px] text-neutral-400">99.8% deal prediction accuracy</p>
            </div>
          </aside>

          {/* Main Dashboard Area */}
          <main className="md:col-span-9 lg:col-span-10 p-4 sm:p-6 bg-[#09090b]">
            
            {/* Top Bar inside main view */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              {/* Search input */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-sky-500/50 transition-colors"
                />
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button 
                  onClick={() => setTimeframe(timeframe === 'weekly' ? 'monthly' : 'weekly')}
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Filter className="w-3 h-3 text-sky-400" />
                  <span className="capitalize">{timeframe} View</span>
                </button>

                <div className="relative">
                  <button className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer">
                    <Bell className="w-4 h-4" />
                  </button>
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-sky-500"></span>
                </div>

                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-white shadow-inner">
                  JD
                </div>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Card 1: Top Products Table */}
              <div className="lg:col-span-7 bg-[#0f0f12] rounded-2xl p-4 sm:p-5 border border-neutral-800/90 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white">Top Products</h3>
                  <span className="text-[11px] text-sky-400 font-medium flex items-center gap-1 cursor-pointer hover:underline">
                    View all <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="text-neutral-400 border-b border-neutral-800/60 pb-2">
                        <th className="pb-2.5 font-medium w-8">#</th>
                        <th className="pb-2.5 font-medium">Name</th>
                        <th className="pb-2.5 font-medium">Popularity</th>
                        <th className="pb-2.5 font-medium text-right">Sales</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800/40">
                      {productsData.map((item) => (
                        <tr key={item.id} className="hover:bg-neutral-800/30 transition-colors">
                          <td className="py-3 text-neutral-400 font-medium">{item.id}</td>
                          <td className="py-3 font-medium text-white">{item.name}</td>
                          <td className="py-3 w-32">
                            <div className="flex items-center gap-2">
                              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                                <div 
                                  className="bg-sky-500 h-full rounded-full transition-all duration-500" 
                                  style={{ width: `${item.popularity}%` }}
                                ></div>
                              </div>
                              <span className="text-[10px] text-neutral-400 font-mono">{item.popularity}%</span>
                            </div>
                          </td>
                          <td className="py-3 text-right font-semibold text-white">
                            {item.sales}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Card 2: Visitor Insights */}
              <div className="lg:col-span-5 bg-[#0f0f12] rounded-2xl p-4 sm:p-5 border border-neutral-800/90 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-white">Visitor Insights</h3>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +24%
                    </span>
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">500</span>
                    <span className="text-xs text-neutral-400">active leads this hour</span>
                  </div>
                </div>

                {/* Custom Chart Bar Visualizer */}
                <div className="pt-4 border-t border-neutral-800/50">
                  <div className="flex items-end justify-between gap-1.5 h-28 pt-2">
                    {[35, 50, 40, 70, 85, 60, 95, 80, 100, 65, 85, 90].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                        <div 
                          className={`w-full rounded-t-md transition-all duration-300 ${
                            idx === 8 || idx === 11 
                              ? 'bg-[#0284c7] shadow-sm shadow-sky-500/30' 
                              : 'bg-neutral-800 hover:bg-neutral-700'
                          }`}
                          style={{ height: `${val}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono">
                    <span>00:00</span>
                    <span>12:00</span>
                    <span>24:00</span>
                  </div>
                </div>

              </div>

            </div>

          </main>
        </div>

      </div>
    </div>
  );
};
