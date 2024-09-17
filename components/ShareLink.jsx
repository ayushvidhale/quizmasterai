import { useState } from 'react';

export default function CopyUrlButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Copy the URL to the clipboard
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <button 
      onClick={handleCopy} 
      className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {copied ? 'Link Copied!' : 'Share'}
    </button>
  );
}
