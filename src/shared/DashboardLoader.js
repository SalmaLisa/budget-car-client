import React from "react";

const DashboardLoader = () => {
  return (
    <div className="flex justify-center mt-32">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-3 h-3 rounded-full animate-pulse bg-zinc-700"></div>
        <div className="w-3 h-3 rounded-full animate-pulse bg-zinc-700"></div>
        <div className="w-3 h-3 rounded-full animate-pulse bg-zinc-700"></div>
      </div>
    </div>
  );
};

export default DashboardLoader;
