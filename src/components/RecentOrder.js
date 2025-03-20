const orders = [
  { id: "#ORD-001", customer: "John Smith", date: "15 Mar 2025", amount: "$125.00", status: "Completed" },
  { id: "#ORD-002", customer: "Emma Johnson", date: "14 Mar 2025", amount: "$245.99", status: "Pending" },
  { id: "#ORD-003", customer: "Michael Brown", date: "13 Mar 2025", amount: "$78.50", status: "Completed" },
  { id: "#ORD-004", customer: "Sarah Davis", date: "12 Mar 2025", amount: "$350.00", status: "Cancelled" },
  { id: "#ORD-005", customer: "David Wilson", date: "11 Mar 2025", amount: "$185.25", status: "Completed" },
];

const RecentOrders = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-full">
      {/* Title with Icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold flex items-center space-x-2">
          <i className="fas fa-box text-purple-800"></i>
          <span>Recent Orders</span>
        </h2>
        {/* View All Button */}
        <button className="border border-purple-800 text-purple-800 px-2 sm:px-3 py-1 rounded flex items-center space-x-1 hover:bg-purple-800 hover:text-white transition">
          <i className="fas fa-eye"></i>
          <span className="hidden sm:inline">View All</span>
        </button>
      </div>

      {/* Responsive Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[500px] sm:min-w-full">
          <thead>
            <tr className="border-b bg-gray-200 text-xs sm:text-sm">
              <th className="p-2">Order ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Date</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-100 transition duration-300 text-xs sm:text-sm">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.customer}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">{order.amount}</td>
                <td className="p-2 font-bold flex items-center space-x-1">
                  <i
                    className={`text-sm sm:text-lg ${
                      order.status === "Completed"
                        ? "fas fa-check-circle text-green-500"
                        : order.status === "Pending"
                        ? "fas fa-clock text-yellow-500 animate-pulse"
                        : "fas fa-times-circle text-red-500"
                    }`}
                  ></i>
                  <span>{order.status}</span>
                </td>
                <td className="p-2">
                  {/* View Button with Purple Border */}
                  <button className="border border-purple-800 text-purple-800 px-2 sm:px-3 py-1 rounded flex items-center space-x-1 hover:bg-purple-800 hover:text-white transition">
                    <i className="fas fa-eye"></i>
                    <span className="hidden sm:inline">View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;