import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 text-center">
      <p>&copy; 2024 Readsy. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="www.faceboook.com" className="text-gray-400 hover:text-white">Facebook</a>
        <a href="www.twitter.com" className="text-gray-400 hover:text-white">Twitter</a>
        <a href="instagram.com" className="text-gray-400 hover:text-white">Instagram</a>
      </div>
      <p>Developped By <span className='font-bold font-poiretone '>Khalil Bouhlel</span></p>
    </footer>
  );
};

export default Footer;
