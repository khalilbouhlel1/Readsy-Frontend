import React from 'react';
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-green">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-forest-green text-center mb-6">Welcome Back to Readsy</h2>
        <form>
          <div className="mb-4">
            <label className="block text-dark-slate mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-dark-slate mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-forest-green text-white py-3 rounded-lg hover:bg-moss-green transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account? <a href="./Signup" className="text-forest-green font-semibold hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
