import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                location.pathname === '/'
                  ? 'border-b-2 border-white'
                  : 'hover:border-b-2 hover:border-gray-300'
              }`}
            >
              <FileText className="w-5 h-5 mr-2" />
              Resume
            </Link>
            <Link
              to="/bio-data"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                location.pathname === '/bio-data'
                  ? 'border-b-2 border-white'
                  : 'hover:border-b-2 hover:border-gray-300'
              }`}
            >
              <User className="w-5 h-5 mr-2" />
              Bio Data
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;