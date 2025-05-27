import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Calendar = ({ dashboardInfo }) => {
    return (
        <div className=" shadow-xl rounded-xl px-4 py-3 overflow-hidden">
            <div className="font-medium text-2xl flex justify-between items-center mb-4">
                <span className="bg-gradient-to-l from-blue-500 to-violet-500 bg-clip-text text-transparent">
                    {dashboardInfo.calendarInfo.title}
                </span>
                <div className="flex items-center gap-3 text-gray-500 text-xl">
                    <IoIosArrowBack className="cursor-pointer" />
                    <IoIosArrowForward className="cursor-pointer" />
                </div>
            </div>

            <section className="flex flex-wrap gap-4 text-center">
                {dashboardInfo.calendarInfo.weeklySchedule.map((ele, idx) => (
                    <div
                        key={idx}
                        className="w-18 bg-gradient-to-b from-slate-50 to-slate-100 p-3 rounded-lg shadow hover:shadow-md transition-all"
                    >
                        <div className="text-sm font-semibold text-gray-600">{ele.day}</div>
                        <div className="text-lg font-bold text-gray-800">{ele.date}</div>
                        <ul className="mt-2 space-y-1">
                            {ele.slots.map((slot, i) => (
                                <li
                                    key={i}
                                    className={`text-xs py-1 px-2 rounded ${slot === "__"
                                        ? "bg-gray-200 text-gray-400"
                                        : "bg-blue-500 text-white"
                                        }`}
                                >
                                    {slot}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>


            <section className="flex flex-col gap-4 mt-4">
                {dashboardInfo?.appointments?.map((ele, idx) => (
                    <div key={idx} className={`flex items-center  hover:-translate-1 duration-200 ease-in justify-between w-full shadow-xl p-4 rounded-xl ${ele.bgColor}`}>
                        <aside className="text-white capitalize">
                            <h3 className="font-bold text-xl ">{ele.title}</h3>
                            <p className="font-medium">{ele.time}</p>
                            <span className="text-sm text-gray-100">{ele.doctor}</span>
                        </aside>
                        <aside className="text-4xl">{ele.icon}</aside>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Calendar;
