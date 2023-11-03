import { useState } from 'react';
import './App.css';
import QuoteCard from './Components/QuoteCard';
import quotes from './assets/quotes.json';

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <QuoteCard
        title="Sports Quote Generator"
      />
    </div>
  );
}

export default App;