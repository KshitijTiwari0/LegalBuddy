import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useChatbot } from '../hooks/useChatbot';
import { Scale } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const { messages, isLoading, error, sendMessage } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 flex items-center">
        <Scale className="mr-2" size={24} />
        <h2 className="text-xl font-semibold">Indian Constitution Advisor</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4" style={{ scrollBehavior: 'smooth' }}>
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <Scale size={48} className="mb-4 text-blue-600 animate-pulse" />
            <p className="text-center max-w-md">
              Welcome to the Indian Constitution Advisor. Ask any question about
              Indian constitutional law and get accurate information instantly.
            </p>
          </div>
        ) : (
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)
        )}
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg mb-4 animate-fade-in">
            {error}
          </div>
        )}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg rounded-bl-none max-w-[80%] border-l-4 border-blue-600">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
                <div
                  className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                />
                <div
                  className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput 
        onSendMessage={sendMessage} 
        isLoading={isLoading} 
        onSuggestionClick={handleSuggestionClick}
      />
    </div>
  );
};

export default ChatInterface;