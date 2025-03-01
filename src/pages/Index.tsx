
import React, { useRef, useEffect } from 'react';
import MetricCard from '../components/MetricCard';
import InnovationCard from '../components/InnovationCard';
import ProgressChart from '../components/ProgressChart';
import AnimatedCount from '../components/AnimatedCount';
import { 
  Leaf, 
  Zap, 
  BarChart, 
  RefreshCw, 
  Shield, 
  LineChart, 
  Globe, 
  CheckCircle2
} from 'lucide-react';

const transactionData = [
  { name: 'Sep', value: 40000 },
  { name: 'Oct', value: 85000 },
  { name: 'Nov', value: 120000 },
  { name: 'Dec', value: 150000 },
  { name: 'Jan', value: 190000 },
  { name: 'Feb', value: 220000 },
];

const energySavingsData = [
  { name: 'Sep', value: 3000 },
  { name: 'Oct', value: 6500 },
  { name: 'Nov', value: 10800 },
  { name: 'Dec', value: 15200 },
  { name: 'Jan', value: 19800 },
  { name: 'Feb', value: 26000 },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const innovationsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
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

    const elements = [
      heroRef.current,
      metricsRef.current,
      chartRef.current,
      innovationsRef.current
    ];

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-frak-green/10">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-frak-green/10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-frak-deep-green to-frak-deep-blue flex items-center justify-center">
              <Leaf className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-frak-dark">Frak Labs</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#metrics" className="text-frak-dark/80 hover:text-frak-deep-green transition-colors">Metrics</a>
            <a href="#progress" className="text-frak-dark/80 hover:text-frak-deep-green transition-colors">Progress</a>
            <a href="#innovations" className="text-frak-dark/80 hover:text-frak-deep-green transition-colors">Innovations</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-20 px-6 opacity-0"
        style={{ animationDelay: '100ms' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center mb-6 px-4 py-1.5 bg-frak-green rounded-full text-sm font-medium text-frak-deep-green">
            <Globe className="w-4 h-4 mr-2" />
            Sustainability Dashboard
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-frak-dark tracking-tight">
            Setting a New Standard in <span className="text-frak-deep-green">Sustainable</span> Blockchain
          </h1>
          <p className="text-lg md:text-xl text-frak-neutral-dark mb-10 leading-relaxed">
            Frak Labs combines energy efficiency with measurable impact, providing a transparent, 
            real-time view of how we reduce environmental footprint while enabling fair digital transactions.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="#metrics" 
              className="px-6 py-3 bg-gradient-to-r from-frak-deep-green to-frak-deep-green/90 text-white font-medium rounded-lg shadow-lg shadow-frak-deep-green/20 hover:shadow-xl hover:shadow-frak-deep-green/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Our Impact
            </a>
            <a 
              href="#innovations" 
              className="px-6 py-3 bg-white border border-frak-deep-green/20 text-frak-deep-green font-medium rounded-lg shadow-sm hover:bg-frak-green/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Our Innovations
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section 
        id="metrics" 
        ref={metricsRef}
        className="py-20 px-6 opacity-0 scroll-section"
        style={{ animationDelay: '300ms' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4 px-3 py-1 bg-frak-blue rounded-full text-sm font-medium text-frak-deep-blue">
              <BarChart className="w-4 h-4 mr-2" />
              Last 6 Months Sustainability Metrics
            </div>
            <h2 className="section-title">Making a Measurable Impact</h2>
            <p className="section-subtitle">
              Our commitment to sustainability is backed by transparent metrics and continuous improvement.
              Here's how we've performed from September 2024 to February 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              icon={<BarChart className="h-5 w-5" />}
              title="Transactions Processed"
              value="1000000+"
              description="Growing from ~40k to ~220k monthly"
              delay={100}
            />
            <MetricCard 
              icon={<Zap className="h-5 w-5" />}
              title="Energy Per Transaction"
              value="0.0058 Wh"
              description="3,448x more efficient than PoS"
              delay={250}
            />
            <MetricCard 
              icon={<RefreshCw className="h-5 w-5" />}
              title="Total Energy Saved"
              value="26 GWh/year"
              description="Powers thousands of homes"
              delay={400}
            />
            <MetricCard 
              icon={<Leaf className="h-5 w-5" />}
              title="Carbon Footprint Reduction"
              value="100s"
              description="Tons of CO₂eq annually"
              delay={550}
            />
          </div>
        </div>
      </section>

      {/* Progress Charts Section */}
      <section 
        id="progress" 
        ref={chartRef}
        className="py-20 px-6 bg-gradient-to-b from-transparent to-white opacity-0 scroll-section"
        style={{ animationDelay: '500ms' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4 px-3 py-1 bg-frak-blue rounded-full text-sm font-medium text-frak-deep-blue">
              <LineChart className="w-4 h-4 mr-2" />
              Sustainability Progress
            </div>
            <h2 className="section-title">Tracking Our Growth</h2>
            <p className="section-subtitle">
              Watch how our sustainability metrics have consistently improved over the past six months,
              demonstrating our commitment to a greener blockchain future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProgressChart
              data={transactionData}
              title="Monthly Transactions"
              description="Steady growth in transaction volume while maintaining minimal energy usage"
              color="#2D7B43"
            />
            <ProgressChart
              data={energySavingsData}
              title="Cumulative Energy Savings (GWh)"
              description="Total energy saved compared to traditional blockchain systems"
              color="#1E5BB0"
            />
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section 
        id="innovations" 
        ref={innovationsRef}
        className="py-20 px-6 opacity-0 scroll-section"
        style={{ animationDelay: '700ms' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4 px-3 py-1 bg-frak-green rounded-full text-sm font-medium text-frak-deep-green">
              <Shield className="w-4 h-4 mr-2" />
              Key Innovations
            </div>
            <h2 className="section-title">Technology Behind Our Sustainability</h2>
            <p className="section-subtitle">
              Frak Labs has developed innovative solutions that allow us to maintain high performance
              while significantly reducing our environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InnovationCard
              icon={<CheckCircle2 className="h-6 w-6" />}
              title="Proof of Consumption Algorithm"
              description="Our proprietary algorithm eliminates the need for energy-intensive token staking, reducing power requirements by orders of magnitude."
              delay={100}
            />
            <InnovationCard
              icon={<Leaf className="h-6 w-6" />}
              title="Green Finance Mechanism"
              description="A percentage of all transaction fees is automatically allocated to verified carbon offset programs, ensuring a positive environmental impact."
              delay={250}
            />
            <InnovationCard
              icon={<BarChart className="h-6 w-6" />}
              title="Transparent Data Tracking"
              description="All our sustainability metrics are open-source and independently validated by the Crypto Carbon Ratings Institute (CCRI)."
              delay={400}
            />
            <InnovationCard
              icon={<RefreshCw className="h-6 w-6" />}
              title="Decarbonized Advertising Model"
              description="By replacing traditional ad-heavy networks with our word-of-mouth monetization, we reduce the carbon footprint of digital marketing."
              delay={550}
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-6 bg-frak-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-frak-deep-green to-frak-deep-blue flex items-center justify-center mr-3">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Frak Labs</h3>
                <p className="text-white/70 text-sm">Leading the way toward a climate-conscious digital economy</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm text-white/70 mb-2">© 2025 Frak Labs. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
