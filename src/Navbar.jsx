import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
const Navbar = () => (
  <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-lg font-bold">MyApp</div>
      <ul className="flex space-x-4 items-center">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </li>
        <li>
          <Button variant='outline'>
            <Link to="/signup">
              Sign Up
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
