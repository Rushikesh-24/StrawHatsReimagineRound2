'use client'
import React from 'react';

const Loader: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50'>
      <div className='relative'>
        <div
          className='text-white text-2xl font-bold'
        >
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
