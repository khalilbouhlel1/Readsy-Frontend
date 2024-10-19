import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-forest">
      <div className="w-full max-w-lg bg-white-400 rounded-lg shadow-lg p-8 animate-slideIn">
        <h2 className="text-3xl font-bold text-forest-green text-center mb-6 animate-fadeIn">
          Join Readsy
        </h2>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-light-forest rounded-md focus:outline-none focus:border-forest-green transition"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-light-forest rounded-md focus:outline-none focus:border-forest-green transition"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-light-forest rounded-md focus:outline-none focus:border-forest-green transition"
              placeholder="Create a password"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              className="w-full p-3 border border-light-forest rounded-md focus:outline-none focus:border-forest-green transition"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full py-3 bg-forest-green text-white rounded-md hover:bg-light-forest transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-700 mt-6">
          Already have an account? <a href="/login" className="text-forest-green hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
