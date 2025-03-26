import { useState } from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Default closed on mobile

  return (
    <>
      {/* Mobile Sidebar Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white sm:h-200px p-5 transition-all duration-300 flex flex-col z-40
          ${isOpen ? "w-54 left-0" : "w-0 -left-64"}
          fixed top-0 bottom-0 lg:relative lg:left-0 lg:w-44`}
      >
        {/* Sidebar Toggle Button */}
        <div
          className="text-gray-400 text-2xl absolute top-5 right-[-45px] lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>

        <h1 className={`text-2xl font-bold mb-6 transition-all duration-300 ${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>
          Admin<span className="text-blue-400">Panel</span>
        </h1>

        <h2 className={`text-gray-400 uppercase text-sm font-semibold mb-3 ${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>
          Main
        </h2>

        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 text-blue-400 animate-pulse">
              <i className="fas fa-chart-bar"></i>
              <Link to="/dashboard" className={`${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>Dashboard</Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
              <i className="fas fa-users"></i>
              <Link to="/users" className={`${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>Users</Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
              <i className="fas fa-box"></i>
              <Link to="/products" className={`${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>Products</Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
              <i className="fas fa-shopping-cart"></i>
              <Link to="/orders" className={`${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>Orders</Link>
            </li>
          </ul>
        </nav>

        <hr className="my-4 border-gray-700" />

        <h2 className={`text-gray-400 uppercase text-sm font-semibold mb-3 ${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>
          Reports
        </h2>

        <ul className="space-y-4">
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
            <i className="fas fa-chart-line animate-fade"></i>
            <Link to="/analytics" className={`${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>Analytics</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
            <i className="fas fa-dollar-sign animate-bounce"></i>
            <Link to="/sales" className={`${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>Sales</Link>
          </li>
        </ul>

        <hr className="my-4 border-gray-700" />

        <h2 className={`text-gray-400 uppercase text-sm font-semibold mb-3 ${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>
          Admin
        </h2>

        <ul className="space-y-4">
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
            <i className="fas fa-cog animate-spin"></i>
            <Link to="/settings" className={`${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>Settings</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
            <i className="fas fa-bell animate-shake"></i>
            <Link to="/notifications" className={`${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>Notifications</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
            <i className="fas fa-shield-alt animate-pulse"></i>
            <Link to="/security" className={`${isOpen || window.innerWidth >= 1024 ? "block" : "hidden"}`}>Security</Link>
          </li>
        </ul>
      </aside>

           {/* Mobile Toggle Button floating (Only show when sidebar is closed) */}
           {!isOpen && (
        <div className="lg:hidden fixed top-5 left-4 z-50">
          <button
            className="text-white bg-gray-800 p-2 rounded-full shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      )}

    </>
  );
};

export default Sidebar;
