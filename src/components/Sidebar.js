import { useState } from "react";

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
            <span className={`${isOpen ? "block" : "hidden"}`}>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300 cursor-pointer">
            <i className="fas fa-users"></i>
            <span className={`${isOpen ? "block" : "hidden"}`}>Users</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300 cursor-pointer">
            <i className="fas fa-box"></i>
            <span className={`${isOpen ? "block" : "hidden"}`}>Products</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300 cursor-pointer">
            <i className="fas fa-shopping-cart"></i>
            <span className={`${isOpen ? "block" : "hidden"}`}>Orders</span>
          </li>
        </ul>
      </nav>

      {/* Divider */}
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
        <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300 cursor-pointer">
          <i className="fas fa-chart-line animate-fade"></i>
          <span className={`${isOpen ? "block" : "hidden"}`}>Analytics</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300 cursor-pointer">
          <i className="fas fa-dollar-sign animate-bounce"></i>
          <span className={`${isOpen ? "block" : "hidden"}`}>Sales</span>
        </li>
      </ul>

      {/* Divider */}
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
        <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300 cursor-pointer">
          <i className="fas fa-cog animate-spin"></i>
          <span className={`${isOpen ? "block" : "hidden"}`}>Settings</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300 cursor-pointer">
          <i className="fas fa-bell animate-shake"></i>
          <span className={`${isOpen ? "block" : "hidden"}`}>Notifications</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-blue-400 transition duration-300 cursor-pointer">
          <i className="fas fa-shield-alt animate-pulse"></i>
          <span className={`${isOpen ? "block" : "hidden"}`}>Security</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

