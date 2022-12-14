import React from 'react';

const Loader = () => {
  return (
    <div className='flex justify-center mt-64 h-screen'>
      <progress className="progress w-16"></progress>
    </div>
  );
};

export default Loader;