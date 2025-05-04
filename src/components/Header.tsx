import React from 'react';
import { Scale, BookOpen, Gavel } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 px-4 sm:px-6 lg:px-8 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Scale className="h-10 w-10 mr-3 text-amber-300" />
              <h1 className="text-3xl font-bold tracking-tight">LegalAdvisor.in</h1>
            </div>
            <p className="mt-1 text-blue-100">
              Your trusted guide to the Indian Constitution
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center bg-blue-800 bg-opacity-50 rounded-full px-4 py-2 border border-blue-500">
              <BookOpen className="h-5 w-5 mr-2 text-amber-300" />
              <span className="text-sm md:text-base">Expert Legal Advice</span>
            </div>
            <div className="flex items-center bg-blue-800 bg-opacity-50 rounded-full px-4 py-2 border border-blue-500">
              <Gavel className="h-5 w-5 mr-2 text-amber-300" />
              <span className="text-sm md:text-base">Constitutional Insights</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;