import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10">Why Choose Readsy?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <img src="../assets/images/gatsby-original2.jpg" alt="Feature 1" className="w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Extensive Library</h3>
          <p className="text-gray-600">Get access to thousands of books and genres with just a click.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <img src="path-to-icon-2" alt="Feature 2" className="w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Personalized Recommendations</h3>
          <p className="text-gray-600">Books recommended just for you based on your reading habits.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <img src="path-to-icon-3" alt="Feature 3" className="w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Offline Reading</h3>
          <p className="text-gray-600">Download your favorite books and read anywhere, anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
