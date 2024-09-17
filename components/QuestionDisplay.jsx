import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const QuestionDisplay = ({ question, index }) => {
  const renderContent = (text) => {
    const parts = text.split(/(```[\s\S]*?```)/);
    return parts.map((part, i) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        const code = part.slice(3, -3).trim();
        return (
          <SyntaxHighlighter
            key={i}
            language="java"
            style={atomOneDark}
            customStyle={{ borderRadius: '0.5rem', padding: '1rem', margin: '0.5rem 0' }}
          >
            {code}
          </SyntaxHighlighter>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4 w-full max-w-lg">
      <h3 className="font-semibold text-lg mb-2">
        {index + 1}. {renderContent(question.question)}
      </h3>
      <div className="mt-2">
        {Object.entries(question.options).map(([key, option]) => (
          <div key={key} className="flex items-center mb-2">
            <input
              type="radio"
              id={`${index}-${key}`}
              name={`question-${index}`}
              value={key}
              // Add onChange handler and checked state here
              className="mr-2"
            />
            <label htmlFor={`${index}-${key}`} className="flex-grow">
              {renderContent(option)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionDisplay;
