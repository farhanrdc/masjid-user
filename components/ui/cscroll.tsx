"use client"

import { useEffect, useState } from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const ChangeBackgroundOnScroll: React.FC<ContainerProps> = ({
    children
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const vh = window.innerHeight;
      const scrollThreshold = vh * 0.3;

      setScrolled(scrollPosition >= scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen transition duration-300 ease-in ${scrolled ? 'bg-neutral-100' : 'bg-white'}`}>
         {children}
    </div>
  );
};

export default ChangeBackgroundOnScroll;
