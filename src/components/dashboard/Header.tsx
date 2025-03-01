
import React from 'react';
import { Leaf, Users } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
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
  );
};

export default Header;
