
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

interface DataPoint {
  name: string;
  value: number;
}

interface ProgressChartProps {
  data: DataPoint[];
  title: string;
  description: string;
  color: string;
  className?: string;
}

const ProgressChart = ({ data, title, description, color, className }: ProgressChartProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedData, setAnimatedData] = useState<DataPoint[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate data points one by one
    const animateData = () => {
      const newData: DataPoint[] = [];
      data.forEach((item, index) => {
        setTimeout(() => {
          newData.push(item);
          setAnimatedData([...newData]);
        }, index * 150);
      });
    };
    
    setTimeout(animateData, 300);
  }, [data]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel px-4 py-2 rounded-lg">
          <p className="text-sm font-medium">{`${label}`}</p>
          <p className="text-sm font-semibold text-frak-deep-green">
            {`${payload[0].value.toLocaleString()}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 transform transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      <h3 className="text-xl font-medium text-frak-dark mb-1">{title}</h3>
      <p className="text-sm text-frak-neutral-dark mb-6">{description}</p>
      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={animatedData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id={`color${color}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#8E9196' }}
            />
            <YAxis 
              hide={true}
              domain={['dataMin', 'dataMax']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2}
              fillOpacity={1} 
              fill={`url(#color${color})`} 
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;
