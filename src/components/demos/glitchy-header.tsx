"use client"
import React, { useEffect, useState } from 'react';
import './glitchy-header.css';

const GlitchyHeaderText = () => {
  const originalText = 'Chaos';
  const [glitchText, setGlitchText] = useState(originalText);

  useEffect(() => {
    const interval = setInterval(() => {
      // Create an array of indices to shuffle
      const indices = Array.from({ length: originalText.length }, (_, index) => index);

      // Shuffle the indices randomly
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      // Generate glitched text with one character changed
      const glitchedText = originalText
        .split('')
        .map((char, index) => (Math.random() < 0.5 ? char : originalText[indices[index]]))
        .join('');

      setGlitchText(glitchedText);

      // Reset to the original text after a short delay
      setTimeout(() => setGlitchText(originalText), 500);
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-4xl font-bold text-center flex flex-row">
      Welcome to
      <div className='glitch-container animate-glitch px-4' title={glitchText}>
        {glitchText}
      </div>
      UI
    </div>
  );
};

export default GlitchyHeaderText;