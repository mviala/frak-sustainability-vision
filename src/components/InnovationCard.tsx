
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

interface InnovationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const InnovationCard = ({ 
  icon, 
  title, 
  description, 
  className, 
  delay = 0 
}: InnovationCardProps) => {
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
        "glass-card rounded-2xl p-6 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 p-3 bg-frak-green inline-block rounded-full text-frak-deep-green">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-frak-dark mb-2">{title}</h3>
      <p className="text-frak-neutral-dark">{description}</p>
    </div>
  );
};

export default InnovationCard;
