import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatInterface from '../components/ChatInterface';
import TopicsList from '../components/TopicsList';
import FeatureCard from '../components/FeatureCard';
import { Shield, Scale, BookOpen, FileClock, Award, BookText } from 'lucide-react';
import { useChatbot } from '../hooks/useChatbot';

const HomePage: React.FC = () => {
  const { sendMessage } = useChatbot();

  const handleTopicClick = (topic: string) => {
    sendMessage(`Tell me about ${topic}`);
  };

  const popularTopics = [
    'Fundamental Rights',
    'Directive Principles',
    'Right to Education',
    'Constitutional Amendments',
    'Judicial Review',
    'Federal Structure',
    'Citizenship Laws',
    'Election Laws',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-blue-600 rounded-sm mr-2"></span>
                  Indian Constitution Legal Advisor
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get expert advice and answers about the Indian Constitution and legal
                  matters. Our AI-powered assistant is here to help with your
                  constitutional law questions. Simply type your query in the chat below.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <FeatureCard 
                    icon={Shield} 
                    title="Constitutional Rights" 
                    description="Learn about your fundamental rights and freedoms"
                  />
                  <FeatureCard 
                    icon={Scale} 
                    title="Legal Guidance" 
                    description="Understand complex legal processes and procedures"
                  />
                  <FeatureCard 
                    icon={BookOpen} 
                    title="Educational Resource" 
                    description="Enhance your knowledge of the Indian legal system"
                  />
                </div>
              </div>
              
              <div className="h-[600px]">
                <ChatInterface />
              </div>
            </div>
            
            <div className="space-y-8">
              <TopicsList topics={popularTopics} onTopicClick={handleTopicClick} />
              
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg shadow-md p-6 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-amber-300" />
                  Need Professional Help?
                </h3>
                <p className="mb-4 text-blue-100 leading-relaxed">
                  While our AI assistant provides helpful information, complex legal
                  matters may require professional legal counsel.
                </p>
                <button className="w-full bg-white text-blue-800 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 mt-2">
                  Find a Constitutional Expert
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-blue-600 rounded-sm mr-2"></span>
                  Recent Updates
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500 pl-4 py-1">
                    <div className="flex items-center text-sm text-blue-600">
                      <FileClock className="h-4 w-4 mr-1" />
                      <span>May 15, 2025</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Latest Constitutional Amendment</h4>
                    <p className="text-sm text-gray-600">Analysis of the most recent changes to the Constitution</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4 py-1">
                    <div className="flex items-center text-sm text-blue-600">
                      <FileClock className="h-4 w-4 mr-1" />
                      <span>April 28, 2025</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Supreme Court Landmark Ruling</h4>
                    <p className="text-sm text-gray-600">Key decision affecting constitutional interpretation</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4 py-1">
                    <div className="flex items-center text-sm text-blue-600">
                      <FileClock className="h-4 w-4 mr-1" />
                      <span>April 10, 2025</span>
                    </div>
                    <h4 className="font-medium text-gray-800">New Digital Rights Framework</h4>
                    <p className="text-sm text-gray-600">How the constitution applies to emerging digital rights</p>
                  </div>
                </div>
                <button className="mt-4 text-blue-600 text-sm font-medium flex items-center hover:text-blue-800 transition-colors duration-200">
                  <BookText className="h-4 w-4 mr-1" />
                  View all updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;