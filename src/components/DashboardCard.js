const DashboardCard = ({ title, value, iconClass, color, growth }) => {
  return (
    <div className={`p-4 bg-white rounded shadow border-t-4 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          {growth && <p className="text-sm mt-1">{growth}</p>}
        </div>
        <i className={`${iconClass} text-3xl text-gray-400`}></i>
      </div>
    </div>
  );
};
 
export default DashboardCard;
  