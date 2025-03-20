const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md w-full">
      {/* Left Section: Search Bar */}
      <div className="relative w-60 sm:w-80 lg:w-96">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 p-2 pl-10 rounded-md focus:ring focus:ring-blue-300 transition"
        />
        <i className="fas fa-search absolute left-3 top-3 text-gray-500"></i>
      </div>

      {/* Right Section: Icons & Profile */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <i className="fas fa-bell text-xl text-gray-600 hover:text-gray-800 transition"></i>
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] px-1 py-0.5 rounded-full">
            3
          </span>
        </div>

        {/* Shopping Cart Icon */}
        <div className="relative cursor-pointer">
          <i className="fas fa-shopping-cart text-xl text-gray-600 hover:text-gray-800 transition"></i>
          <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[9px] px-1 py-0.5 rounded-full">
            5
          </span>
        </div>

        {/* Add New Button */}
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-purple-700 transition">
          <i className="fas fa-plus"></i>
          <span className="hidden sm:inline">Add New</span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <i className="fas fa-user-circle text-2xl text-gray-600"></i>
          <span className="text-gray-700 font-medium hidden sm:inline">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;