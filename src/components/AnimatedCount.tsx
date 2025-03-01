
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCountProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

const AnimatedCount = ({ 
  end, 
  duration = 2000, 
  decimals = 0, 
  suffix = "", 
  className = "" 
}: AnimatedCountProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let requestId: number;
    let startValue = 0;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentCount = startValue + (end - startValue) * easedProgress;
      
      setCount(currentCount);

      if (progress < 1) {
        requestId = requestAnimationFrame(animate);
      }
    };

    requestId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestId);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} className={className}>
      {count.toLocaleString(undefined, { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
      })}
      {suffix}
    </span>
  );
};

export default AnimatedCount;
