import React from 'react';

export default function FormExtra() {
  const handleForgotPasswordClick = () => {
    // Implement the logic for handling the "Forgot your password?" click
  };

  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>

      <div className="text-sm">
        {/* Use a button instead of an anchor tag */}
        <button
          onClick={handleForgotPasswordClick}
          className="font-medium text-purple-600 hover:text-purple-500 focus:outline-none"
        >
          Forgot your password?
        </button>
      </div>
    </div>
  );
}
