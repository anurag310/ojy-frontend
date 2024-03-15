import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
          <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link>
          </li>
          <li>
            <Link to="/home" className="block py-2 px-4 hover:bg-gray-700">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 px-4 hover:bg-gray-700">About</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 px-4 hover:bg-gray-700">Contact</Link>
          </li>
          <li>
            <Link to="/logout" className="block py-2 px-4 hover:bg-gray-700">Log Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
