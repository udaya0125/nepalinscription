import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../public/images/not_found_new.webp'; // put image here

const NotFound = () => {
  return (
    <div className="min-h-[70vh] my-24 flex flex-col items-center justify-center text-center px-4">
      <img
        src={notFoundImg}
        alt="Page not found"
        className="max-w-sm w-full mb-6"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[#7b634c] mb-3">
        Page Not Found
      </h1>

      <p className="text-gray-600 mb-6 max-w-xl">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#7b634c] text-white px-6 py-3 rounded-lg hover:bg-[#9f8c76] transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
