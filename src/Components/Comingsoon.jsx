import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const ComingSoon = ({ pageName = "this feature" }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-[#e0d8c0]">
        <h1 className="text-2xl font-bold text-[#7b634c] mb-4">Coming Soon</h1>
        <p className="text-[#9f8c76] mb-6">
          {`We're currently working on ${pageName}. Please check back later!`}
        </p>
        
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center gap-2 px-6 py-2 bg-[#7b634c] text-white rounded-md hover:bg-[#9f8c76] transition-colors mx-auto"
        >
          <FiArrowLeft />
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;