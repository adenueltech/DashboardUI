import { useTheme } from "../components/ThemeProvider"; // Import Theme Hook

const Header = () => {
  const { theme, setTheme } = useTheme(); // Get Theme State

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // Toggle Theme
  };

  return (
    <header className="flex items-center p-5 justify-between bg-white dark:bg-gray-900 shadow-md w-full fixed top-0 left-0 right-0 transition-all duration-300">

      {/* Left Section: Search Bar */}
      <div className="relative w-60 sm:w-70  lg:w-76">
        <input
          type="text"
          placeholder="Search..."
          className="sm:w-full w-[70px] ml-[50px] border border-gray-300 dark:border-gray-700 sm:ml-[490px] p-2 pl-10 rounded-md focus:ring focus:ring-purple-300 dark:focus:ring-purple-600 transition bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <i className="fas fa-search absolute left-3 top-3 text-gray-500 dark:text-gray-400"></i>
      </div>

      {/* Right Section: Icons & Profile */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {theme === "dark" ? (
            <i className="fas fa-moon text-white text-xl"></i>
          ) : (
            <i className="fas fa-sun text-yellow-500 text-xl"></i>
          )}
        </button>

        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <i className="fas fa-bell text-xl text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition"></i>
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] px-1 py-0.5 rounded-full">
            3
          </span>
        </div>

        {/* Shopping Cart Icon */}
        <div className="relative cursor-pointer">
          <i className="fas fa-shopping-cart text-xl text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition"></i>
          <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[9px] px-1 py-0.5 rounded-full">
            5
          </span>
        </div>

        {/* Add New Button */}
        <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-purple-700 transition transform hover:scale-105">
          <i className="fas fa-plus"></i>
          <span className="hidden sm:inline">Add New</span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <i className="fas fa-user-circle text-2xl text-gray-600 dark:text-gray-300"></i>
          <span className="text-gray-700 dark:text-white font-medium hidden sm:inline">
            Ade Nuel
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
