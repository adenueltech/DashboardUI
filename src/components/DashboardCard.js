const DashboardCard = ({ title, value, iconClass, color, growth }) => {
  return (
    <div className={`p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded shadow border-t-4 ${color} transition duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          {growth && <p className="text-sm mt-1">{growth}</p>}
        </div>
        <i className={`${iconClass} text-3xl text-gray-600 dark:text-gray-300`}></i>
      </div>
    </div>
  );
};

export default DashboardCard;
