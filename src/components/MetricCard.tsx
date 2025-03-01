
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
        "metric-card transform transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-4 right-4 text-frak-deep-green">{icon}</div>
      <h3 className="text-sm font-medium text-frak-neutral-dark mb-2">{title}</h3>
      <div className="flex items-baseline space-x-1">
        <p className="text-3xl font-semibold text-frak-dark animated-number">
          {isVisible ? value : "0"}
        </p>
      </div>
      <p className="mt-2 text-sm text-frak-neutral-dark">{description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-frak-green to-frak-blue opacity-30"></div>
    </div>
  );
};

export default MetricCard;
