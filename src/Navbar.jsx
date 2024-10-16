import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./reducer/loginReducer";
import { UserCircle2 } from "lucide-react";
import ProfileModal from './ProfileModal'; // Import the ProfileModal component

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
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
            {isLoggedIn ? (
              <UserCircle2
                className="text-background h-8 w-8 cursor-pointer"
                onClick={handleUserIconClick}
              />
            ) : (
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
            )}
          </li>
          <li>
            {!isLoggedIn ? (
              <Button variant="outline">
                <Link to="/signup">Sign Up</Link>
              </Button>
            ) : (
              <Button variant="destructive" onClick={() => dispatch(logout())}>
                Log out
              </Button>
            )}
          </li>
        </ul>
      </div>
      <ProfileModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </nav>
  );
};

export default Navbar;