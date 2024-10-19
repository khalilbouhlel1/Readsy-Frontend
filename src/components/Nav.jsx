import { Link } from "react-router-dom"; // Import Link
import { hamburger } from "../assets/icons"; // Import your assets

const Nav = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-50 shadow-md ">
      <div className="text-xl font-bold text-green-800 ">
        <Link to="/">Readsy</Link> {/* Link to Home */}
      </div>
      <nav className="flex space-x-4 gap-x-32 max-lg:hidden">
        <Link to="/" className="text-gray-600 hover:text-green-800">
          Home
        </Link>{" "}
        {/* Home Link */}
        <a href="#features" className="text-gray-600 hover:text-green-800">
          Features
        </a>{" "}
        {/* Features */}
        <a href="#testimonials" className="text-gray-600 hover:text-green-800">
          Testimonials
        </a>{" "}
        {/* Testimonials */}
      </nav>
      <div>
      <Link to="/signup" className="px-4 py-2 text-gray-600 max-lg:hidden">
          Get Started
        </Link>{" "}
        {/* Sign Up */}
        <Link
          to="/login"
          className="px-4 py-2 bg-green-800 text-white rounded max-lg:hidden"
        >
          Login
        </Link>{" "}
        {/* Login */}
      </div>
      <div className="hidden max-lg:block">
        <img src={hamburger} alt="hamburger" width={25} height={25} />
      </div>
    </header>
  );
};

export default Nav;
