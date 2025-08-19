'use client';

import { ErrorProps } from './types';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = ({ error }: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl shadow-md p-8 max-w-md w-full text-center">
        <FaExclamationTriangle className="w-12 h-12 mx-auto mb-4 text-red-500" />
        <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
        <p className="text-base mb-6">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Error;
