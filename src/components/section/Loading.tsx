import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] bg-white dark:bg-black relative">
      {/* Background Glow */}
      <div className="absolute w-64 h-64 bg-violet-500 opacity-20 dark:opacity-10 blur-3xl rounded-full animate-pulse"></div>

      {/* Spinner */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-violet-600 dark:text-violet-400 text-lg font-medium tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
