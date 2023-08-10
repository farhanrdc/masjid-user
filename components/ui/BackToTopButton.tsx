"use client"

import { useEffect, useState } from 'react'
import React from 'react';
const BackToTopButton: React.FC = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling animation
    });
  };

  return (
    <div>
      {backToTopButton && (
        <a
          onClick={scrollUp}
          className="fixed flex bottom-4 right-4 h-11 w-11 rounded-full bg-indigo-700 p-4 z-[999] items-center justify-center hover:animate-pulse"
        >
          <span className="mt-2 block h-3 w-5 rotate-45 border-t-2 border-l-2"></span>
        </a>
      )}
    </div>
  );
};

export default BackToTopButton;