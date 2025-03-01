
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  className?: string;
  delay?: number;
}

const MetricCard = ({ 
  icon, 
  title, 
  value, 
  description, 
  className, 
  delay = 0 
}: MetricCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "rounded-xl p-5 transform transition-all duration-500 relative overflow-hidden",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-4 right-4 text-[#9b87f5]/70">{icon}</div>
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <div className="flex items-baseline space-x-1">
        <p className="text-2xl font-semibold text-gray-800 animated-number">
          {isVisible ? value : "0"}
        </p>
      </div>
      <p className="mt-2 text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default MetricCard;
