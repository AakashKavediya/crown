import React, { useState, useEffect } from 'react';
import './firstScreen.css';

const TypingText = ({ text, speed = 50 }) => {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="typing-text">{displayed}<span className="typing-cursor">|</span></span>
  );
};

export default TypingText;
