"use client";

import React, { useEffect, useState } from 'react';

const ScrollColorChange = ({children}:{children:any}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getColorFromScrollPosition = (scrollPosition : number) => {
    if (scrollPosition <= 20) {
      return 'black';
    } else if (scrollPosition <= 50) {
      return '[#57585A]';
    } else if (scrollPosition <= 75) {
      return 'white';
    } else {
      return 'black';
    }
  };

  console.log(scrollPosition);
  const backgroundColor = getColorFromScrollPosition(scrollPosition);

  return (
    <div style={{ backgroundColor, transition: 'background-color 0.5s' }}>
      {children}
    </div>
  );
};

export default ScrollColorChange;




