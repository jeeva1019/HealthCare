const StatisticCard = ({ bgColor, icon, iconBg, title, cnt, footer }) => {
    return (
        <div
            className={`w-full sm:w-65 md:80 lg:70 p-3 px-7 rounded-xl shadow-xl cursor-pointer transform transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 ${bgColor}`}
        >
            <h2 className="mb-1.5 text-gray-500 font-medium uppercase tracking-wide">
                {title}
            </h2>

            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">{cnt}</span>
                <div
                    className={`w-15 h-15 text-white text-4xl flex items-center justify-center rounded-xl shadow-xl rotate-5 ${iconBg}`}
                >
                    {icon}
                </div>
            </div>

            {footer && <div className="mt-4">{footer}</div>}
        </div>
    );
};

export default StatisticCard;
