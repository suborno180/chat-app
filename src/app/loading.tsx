import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-10 w-10 text-gray-500 dark:text-gray-400 mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014.17 15H2c0 3.86 3.14 7 7 7v-2c-2.056 0-3.93-.896-5.291-2.309z"
          ></path>
        </svg>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;