import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex space-x-2">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </div>
  );
};

export default Loading;
