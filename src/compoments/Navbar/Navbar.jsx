import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white fixed top-0 left-0 w-full z-10 shadow-md">
      <h1 className="text-4xl font-bold text-blue-900">PORTfolio</h1>
      <ul className="flex space-x-8">
        <li>
          <Link to="/home" className="text-blue-700 hover:text-gray-900 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-700 hover:text-gray-900 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-blue-700 hover:text-gray-900 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/skills" className="text-blue-700 hover:text-gray-900 transition">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-blue-700 hover:text-gray-900 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
