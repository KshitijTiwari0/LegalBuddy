import React from 'react';

interface TopicsListProps {
  topics: string[];
  onTopicClick: (topic: string) => void;
}

const TopicsList: React.FC<TopicsListProps> = ({ topics, onTopicClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="w-2 h-8 bg-blue-600 rounded-sm mr-2"></span>
        Popular Topics
      </h3>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index}>
            <button
              onClick={() => onTopicClick(topic)}
              className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-700 transition-colors duration-200 flex items-center"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {topic}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicsList;