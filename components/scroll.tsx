"use client"


import { useEffect, useState } from 'react';

const useScrollPercentage = (): number => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const handleScroll = () => {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    setScrollPercentage(Math.min(percentOfScreenHeightScrolled * 100, 100));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return scrollPercentage;
};

export default useScrollPercentage;
