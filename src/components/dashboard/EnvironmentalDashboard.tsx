
import React from 'react';
import MetricCard from '../MetricCard';
import ProgressChart from '../ProgressChart';
import { BarChart, Zap, RefreshCw, Leaf } from 'lucide-react';
import { transactionData, energySavingsData } from '../../data/chartData';

const EnvironmentalDashboard = () => {
  return (
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
  );
};

export default EnvironmentalDashboard;
