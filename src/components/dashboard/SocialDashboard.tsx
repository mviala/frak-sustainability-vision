
import React from 'react';
import MetricCard from '../MetricCard';
import SocialImpactChart from '../SocialImpactChart';
import { DollarSign, Users, TrendingUp, Activity } from 'lucide-react';
import { socialImpactData, purchasePowerData } from '../../data/chartData';

const SocialDashboard = () => {
  return (
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
  );
};

export default SocialDashboard;
