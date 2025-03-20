import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`bg-gray-900 text-white h-screen p-5 transition-all duration-300 flex flex-col ${
        isOpen ? "w-64" : "w-20"
      } fixed lg:relative`}
    >
      {/* Sidebar Toggle Button */}
      <div
        className="text-gray-400 text-2xl absolute top-5 right-[-45px] lg:right-auto cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? "fa-angle-left" : "fa-angle-right"}`}></i>
      </div>

      {/* Sidebar Title */}
      <h1
        className={`text-2xl font-bold mb-6 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        Admin<span className="text-blue-400">Panel</span>
      </h1>

      {/* MAIN Section */}
      <h2
        className={`text-gray-400 uppercase text-sm font-semibold mb-3 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        Main
      </h2>

      <nav>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 text-blue-400 animate-pulse">
            <i className="fas fa-chart-bar"></i>
            <Link to="/dashboard" className={`${isOpen ? "block" : "hidden"}`}>
              Dashboard
            </Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
            <i className="fas fa-users"></i>
            <Link to="/users" className={`${isOpen ? "block" : "hidden"}`}>
              Users
            </Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
            <i className="fas fa-box"></i>
            <Link to="/products" className={`${isOpen ? "block" : "hidden"}`}>
              Products
            </Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
            <i className="fas fa-shopping-cart"></i>
            <Link to="/orders" className={`${isOpen ? "block" : "hidden"}`}>
              Orders
            </Link>
          </li>
        </ul>
      </nav>

      <hr className="my-4 border-gray-700" />

      {/* REPORTS Section */}
      <h2
        className={`text-gray-400 uppercase text-sm font-semibold mb-3 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        Reports
      </h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
          <i className="fas fa-chart-line animate-fade"></i>
          <Link to="/analytics" className={`${isOpen ? "block" : "hidden"}`}>
            Analytics
          </Link>
        </li>
        <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
          <i className="fas fa-dollar-sign animate-bounce"></i>
          <Link to="/sales" className={`${isOpen ? "block" : "hidden"}`}>
            Sales
          </Link>
        </li>
      </ul>

      <hr className="my-4 border-gray-700" />

      {/* ADMIN Section */}
      <h2
        className={`text-gray-400 uppercase text-sm font-semibold mb-3 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        Admin
      </h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
          <i className="fas fa-cog animate-spin"></i>
          <Link to="/settings" className={`${isOpen ? "block" : "hidden"}`}>
            Settings
          </Link>
        </li>
        <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
          <i className="fas fa-bell animate-shake"></i>
          <Link to="/notifications" className={`${isOpen ? "block" : "hidden"}`}>
            Notifications
          </Link>
        </li>
        <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
          <i className="fas fa-shield-alt animate-pulse"></i>
          <Link to="/security" className={`${isOpen ? "block" : "hidden"}`}>
            Security
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;


