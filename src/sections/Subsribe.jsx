import React from 'react';

const Subsribe = () => {
  return (
    <section className="bg-pale-blue py-16" id="subscribe">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-dark-slate mb-4">Stay Updated with Readsy</h2>
        <p className="text-slate-gray mb-8">
          Subscribe to our newsletter and get the latest updates, new book arrivals, and personalized recommendations straight to your inbox!
        </p>
        <form className="flex flex-col md:flex-row justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 p-4 rounded-l-md border border-gray-300 text-dark-slate focus:outline-none focus:border-soft-coral"
          />
          <button className="w-full md:w-auto bg-soft-coral text-white px-8 py-4 rounded-r-md hover:bg-red-500 transition mt-4 md:mt-0">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subsribe;
