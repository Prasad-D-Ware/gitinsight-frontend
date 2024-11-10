
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        <div className="flex items-center space-x-2">
          {/* Logo Image */}
          <img src='github-mark.png' alt='Logo' className='h-8 w-8 object-cover'/>
          <h1 className="text-2xl font-bold text-white">GitInsight</h1>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="text-white hover:text-blue-200 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-200 transition duration-300">
              About Us
            </Link>
          </li>
        </ul>
        <button className="md:hidden text-white">
          {/* Mobile Menu Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
