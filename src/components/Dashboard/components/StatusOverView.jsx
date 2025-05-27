const StatsOverview = ({ stats = [] }) => {

    return (
        <section className="flex justify-between mt-5 gap-3">
            {stats.map((ele, idx) => (
                <div key={idx} className={`text-center p-2 w-70 rounded-xl ${ele.bgColor}`}>
                    <div className="flex items-center justify-center gap-2 ">
                        <div className={`inline-block p-2 rounded-xl shadow-xl text-xl text-white ${ele.iconBg}`}>
                            {ele.icon}
                        </div>
                        <p className={`${ele.iconBg} text-transparent bg-clip-text font-bold text-2xl`}>{ele.value}</p>
                    </div>
                    <p className="uppercase text-xs mt-4 text-gray-500 font-medium">{ele.label}</p>
                </div>
            ))}
        </section>
    );
};

export default StatsOverview;
