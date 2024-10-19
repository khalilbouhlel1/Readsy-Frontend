import React from 'react';

const Testemonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-100 rounded-lg">
          <p className="italic text-gray-600">"Readsy has completely transformed my reading habits. I love the personalized suggestions!"</p>
          <h4 className="text-blue-600 mt-4 font-semibold">- Jane Doe</h4>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <p className="italic text-gray-600">"I can now read on the go! The offline reading feature is a game-changer."</p>
          <h4 className="text-blue-600 mt-4 font-semibold">- John Smith</h4>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <p className="italic text-gray-600">"A massive library at my fingertips. Readsy is my go-to app for reading."</p>
          <h4 className="text-blue-600 mt-4 font-semibold">- Emily Clark</h4>
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
