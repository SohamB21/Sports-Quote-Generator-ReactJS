import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaCopy, FaRotate, FaXTwitter } from "react-icons/fa6";
import quotes from '../assets/quotes.json';

const QuoteCard = ({ title, quote, author }) => {
  // State for the current quote index and whether it has been copied
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  // Function to load a new random quote
  const loadNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);
    setIsCopied(false); // Reset the copied state when loading a new quote
  };

  // Function to post the current quote on Twitter
  const postOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text="${currentQuote.quote}" - ${currentQuote.author}`);
  };

  // Function to copy the current quote to the clipboard
  const copyToClipboard = (text) => {
    // Create a temporary textarea to copy the quote text
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setIsCopied(true); // Set the copied state to true
  };

  // Get the current quote based on the quote index
  const currentQuote = quotes[quoteIndex];

  return (
    <div className="bg-gradient-to-r from-gray-200 to-blue-400 shadow-lg p-5 rounded-md mx-20 text-center w-auto h-auto overflow-y-auto border-2 border-blue-900">
      {/* Display the title of the quote card */}
      <h2 className="text-xl font-bold font-serif pb-5 px-2 border-b-2 border-black text-center">{title}</h2>

      {/* Display the current quote with left and right quote icons */}
      <h3 className="text-md text-center mt-4 font-sans italic">
        <FaQuoteLeft className="inline mr-1" />
         {currentQuote.quote} 
        <FaQuoteRight className="inline ml-1" />
      </h3>

      {/* Display the author of the current quote */}
      <h2 className="text-md font-bold my-3 text-center">{currentQuote.author}</h2>

      {/* Buttons for copying, loading a new quote, and posting on Twitter */}
      <div className="flex justify-around">
        <button className="bg-blue-800 hover:bg-blue-600 text-white py-1 px-2 rounded mt-4" 
          onClick={() => {copyToClipboard(`"${currentQuote.quote}" - ${currentQuote.author}`)}}
          title="Copy To Clipboard" 
          id="copy-button">
          {isCopied ? "Copied!" : <FaCopy />} {/* Display "Copied!" text or the copy icon */}
        </button>

        <button className="bg-blue-800 hover-bg-blue-600 text-white py-1 px-2 rounded mt-4" 
          onClick={() => {loadNewQuote()}}
          title="Load New Quotes">
          <FaRotate /> 
        </button>

        <button className="bg-blue-800 hover-bg-blue-600 text-white py-1 px-2 rounded mt-4" 
          onClick={() => {postOnTwitter()}}
          title="Post On Twitter">
          <FaXTwitter /> 
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
