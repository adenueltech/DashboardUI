import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardCard from "./components/DashboardCard";
import RecentOrder from "./components/RecentOrder";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Header />

        {/* Dashboard Title & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          {/* DASHBOARD Title with Purple Underline */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">DASHBOARD</h2>
            <div className="w-20 h-1 bg-purple-800 mt-1"></div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3">
            {/* Export Button */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-purple-800 text-purple-800 rounded-md hover:bg-purple-800 hover:text-white transition transform hover:scale-105">
              <i className="fas fa-download"></i>
              <span>Export</span>
            </button>

            {/* + Add Here Button */}
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition transform hover:scale-105">
              <i className="fas fa-plus"></i>
              <span>Add Here</span>
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <DashboardCard 
            title="Total Users" 
            value="1,504" 
            iconClass="fas fa-users" 
            color="border-purple-800" 
            growth={<span className="text-green-500"><i className="fas fa-arrow-up"></i> 12.5% from last month</span>} 
          />
          <DashboardCard 
            title="Total Revenue" 
            value="$12,750" 
            iconClass="fas fa-dollar-sign" 
            color="border-blue-700" 
            growth={<span className="text-green-500"><i className="fas fa-arrow-up"></i> 6.5% from last month</span>} 
          />
          <DashboardCard 
            title="Total Orders" 
            value="324" 
            iconClass="fas fa-shopping-bag" 
            color="border-green-700" 
            growth={<span className="text-red-500"><i className="fas fa-arrow-down"></i> 3.5% from last month</span>} 
          />
          <DashboardCard 
            title="Conversion Rate" 
            value="85%" 
            iconClass="fas fa-chart-line" 
            color="border-orange-700" 
            growth={<span className="text-green-500"><i className="fas fa-arrow-up"></i> 4.6% from last month</span>} 
          />
        </div>

        {/* Recent Orders Section */}
        <div className="mt-6">
          <RecentOrder />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;