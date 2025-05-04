import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-200">
      <Icon className="h-8 w-8 text-blue-600 mb-2" />
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default FeatureCard;