
import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/dashboard/Header';
import Footer from '../components/dashboard/Footer';
import EnvironmentalDashboard from '../components/dashboard/EnvironmentalDashboard';
import SocialDashboard from '../components/dashboard/SocialDashboard';

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
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dashboard Content */}
      <main 
        ref={dashboardRef}
        className="py-6 px-4 sm:px-6 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          {/* Environmental Impact Dashboard */}
          {activeTab === 'environmental' && <EnvironmentalDashboard />}
          
          {/* Social Impact Dashboard */}
          {activeTab === 'social' && <SocialDashboard />}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
