
import React, { useRef, useEffect, useState } from 'react';
import MetricCard from '../components/MetricCard';
import ProgressChart from '../components/ProgressChart';
import SocialImpactChart from '../components/SocialImpactChart';
import { 
  Leaf, 
  Zap, 
  BarChart, 
  RefreshCw, 
  DollarSign,
  Users,
  TrendingUp,
  Activity
} from 'lucide-react';

// Transaction data (Sep 2024 - Feb 2025)
const transactionData = [
  { name: 'Sep', value: 40000 },
  { name: 'Oct', value: 85000 },
  { name: 'Nov', value: 120000 },
  { name: 'Dec', value: 150000 },
  { name: 'Jan', value: 190000 },
  { name: 'Feb', value: 220000 },
];

// Energy savings data
const energySavingsData = [
  { name: 'Sep', value: 3000 },
  { name: 'Oct', value: 6500 },
  { name: 'Nov', value: 10800 },
  { name: 'Dec', value: 15200 },
  { name: 'Jan', value: 19800 },
  { name: 'Feb', value: 26000 },
];

// Social impact data - money given back to users
const socialImpactData = [
  { name: 'Sep', value: 12000 },
  { name: 'Oct', value: 18500 },
  { name: 'Nov', value: 27600 },
  { name: 'Dec', value: 32100 },
  { name: 'Jan', value: 45300 },
  { name: 'Feb', value: 58700 },
];

// Average purchase power increase per user
const purchasePowerData = [
  { name: 'Sep', value: 24 },
  { name: 'Oct', value: 27 },
  { name: 'Nov', value: 31 },
  { name: 'Dec', value: 33 },
  { name: 'Jan', value: 38 },
  { name: 'Feb', value: 42 },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('environmental');
  const dashboardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      {/* Header with Frak Logo */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/frak-logo.png" alt="Frak Logo" className="h-10" />
            <span className="text-xl font-medium text-gray-800">Impact Dashboard</span>
          </div>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('environmental')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'environmental' 
                  ? 'bg-white shadow-sm text-[#7E69AB]' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center">
                <Leaf className="w-4 h-4 mr-2" />
                Environmental
              </div>
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'social' 
                  ? 'bg-white shadow-sm text-[#33C3F0]' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Social
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main 
        ref={dashboardRef}
        className="py-6 px-4 sm:px-6 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Environmental Impact Dashboard */}
          {activeTab === 'environmental' && (
            <div className="space-y-6">
              {/* KPI Metrics Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard 
                  icon={<BarChart className="h-5 w-5" />}
                  title="Transactions Processed"
                  value="1000000+"
                  description="Growing from ~40k to ~220k monthly"
                  delay={100}
                  className="bg-gradient-to-br from-[#f3f0ff] to-white border border-[#9b87f5]/10"
                />
                <MetricCard 
                  icon={<Zap className="h-5 w-5" />}
                  title="Energy Per Transaction"
                  value="0.0058 Wh"
                  description="3,448x more efficient than PoS"
                  delay={150}
                  className="bg-gradient-to-br from-[#e6f7ff] to-white border border-[#33C3F0]/10"
                />
                <MetricCard 
                  icon={<RefreshCw className="h-5 w-5" />}
                  title="Total Energy Saved"
                  value="26 GWh/year"
                  description="Powers thousands of homes"
                  delay={200}
                  className="bg-gradient-to-br from-[#e6fffb] to-white border border-[#36CFC9]/10"
                />
                <MetricCard 
                  icon={<Leaf className="h-5 w-5" />}
                  title="Carbon Reduction"
                  value="100s"
                  description="Tons of CO₂eq annually"
                  delay={250}
                  className="bg-gradient-to-br from-[#f6ffed] to-white border border-[#52C41A]/10"
                />
              </div>
              
              {/* Charts Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProgressChart
                  data={transactionData}
                  title="Monthly Transactions"
                  description="Transaction volume growth"
                  color="#7E69AB"
                />
                <ProgressChart
                  data={energySavingsData}
                  title="Energy Savings (GWh)"
                  description="Cumulative energy saved"
                  color="#33C3F0"
                />
              </div>
            </div>
          )}
          
          {/* Social Impact Dashboard */}
          {activeTab === 'social' && (
            <div className="space-y-6">
              {/* KPI Metrics Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard 
                  icon={<DollarSign className="h-5 w-5" />}
                  title="Money Back to Users"
                  value="$194,200"
                  description="Total funds distributed"
                  delay={100}
                  className="bg-gradient-to-br from-[#fff2e8] to-white border border-[#FA8C16]/10"
                />
                <MetricCard 
                  icon={<Users className="h-5 w-5" />}
                  title="Active Users"
                  value="38,450"
                  description="Monthly active users"
                  delay={150}
                  className="bg-gradient-to-br from-[#f9f0ff] to-white border border-[#9254DE]/10"
                />
                <MetricCard 
                  icon={<TrendingUp className="h-5 w-5" />}
                  title="Purchase Power Increase"
                  value="42%"
                  description="Average per active user"
                  delay={200}
                  className="bg-gradient-to-br from-[#fcffe6] to-white border border-[#B7EB8F]/10"
                />
                <MetricCard 
                  icon={<Activity className="h-5 w-5" />}
                  title="Transaction Efficiency"
                  value="87%"
                  description="Optimized engagement"
                  delay={250}
                  className="bg-gradient-to-br from-[#e6f7ff] to-white border border-[#1890FF]/10"
                />
              </div>
              
              {/* Charts Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SocialImpactChart
                  data={socialImpactData}
                  title="User Earnings ($)"
                  description="Money earned by users monthly"
                  color="#FA8C16"
                />
                <SocialImpactChart
                  data={purchasePowerData}
                  title="Purchase Power Boost (%)"
                  description="Average purchasing power increase"
                  color="#9254DE"
                />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-6 border-t border-gray-100 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-500">© 2025 Frak Labs</p>
            <a href="https://frak.id" target="_blank" rel="noopener noreferrer" className="text-xs text-[#7E69AB] hover:underline">
              frak.id
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
