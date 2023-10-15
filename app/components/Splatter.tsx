import React, { useEffect } from 'react';

const Splatter = () => {
  useEffect(() => {
    // Initialize and configure any canvas-related logic here
    const canvas = document.getElementById('helix');
    if (canvas) {
      // Add your canvas-related code here
    }
  }, []);

  return (
    <canvas
      data-scroll-sticky=""
      id="helix"
    //   helixcolornum="0.85"
      className="opacity-50 fixed inset-0 w-full h-full -z-2"
      width="645"
      height="571"
      style={{
        width: '645px',
        height: '571px',
        cursor: 'auto',
        opacity: 0.5,
      }}
    ></canvas>
  );
};

export default Splatter;
