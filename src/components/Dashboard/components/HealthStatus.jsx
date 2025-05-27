const HealthCard = ({ data }) => {
  const { title, progress, icon, gradient, bgGradient, progressGradient, description, date } = data;

  return (
    <div
      className={`shadow-xl rounded-xl p-4 ${bgGradient} flex flex-col gap-5 transition-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-2xl`}
    >
      <header className="flex items-center justify-between text-xl font-medium text-gray-500 capitalize">
        <span>{title}</span>
        <span>{progress}%</span>
      </header>

      <div className="flex items-end gap-3">
        <div className={`w-14 h-14 shadow-xl rounded-xl ${gradient} flex items-center justify-center text-2xl text-white`}>
          {icon}
        </div>

        <div className="flex-1 h-5 bg-gradient-to-t from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
          <div
            className={`h-full ${progressGradient} rounded-2xl transition-all duration-300`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-400">{date}</p>
    </div>
  );
};

const HealthStatus = ({ dashboardInfo }) => {
  return (
    <section className="w-full h-fit flex flex-col gap-4">
      {dashboardInfo.healthData.map((item, idx) => (
        <HealthCard key={idx} data={item} />
      ))}
    </section>
  );
};

export default HealthStatus;
