import { GoPlus, GoPerson } from "react-icons/go";
import { BsClock } from "react-icons/bs";

const IconText = ({ icon, bgColor, text }) => (
    <p className="flex items-center gap-3 text-sm text-gray-500 font-medium">
        <span className={`inline-block p-1 shadow-lg rounded-lg ${bgColor}`}>
            {icon}
        </span>
        <span>{text}</span>
    </p>
);

const UpcomingSchedule = ({ dashboardInfo }) => {
    return (
        <div className="w-full h-fit bg-gradient-to-l from-blue-50 to-violet-50 shadow-xl py-5 px-6 rounded-xl">
            <header className="flex justify-between items-center">
                <h2 className="text-2xl font-bold bg-gradient-to-l from-blue-500 to-violet-500 text-transparent bg-clip-text">
                    The Upcoming Schedule
                </h2>
                <button className="outline-0 border border-gray-300 p-2 rounded-xl text-xl shadow-lg">
                    <GoPlus />
                </button>
            </header>

            {dashboardInfo.upcomingSchedule.map((dayItem, idx) => (
                <section key={idx} className="flex flex-col gap-3 mt-6">
                    <div className="flex items-center gap-2">
                        <span className={`inline-block w-4 h-4 rounded-2xl ${dayItem.gradient}`}></span>
                        <h3 className="text-md font-medium text-gray-600">{dayItem.day}</h3>
                    </div>

                    {dayItem.appointments.map((appt, i) => (
                        <div
                            key={i}
                            className={`hover:-translate-y-1 duration-200 flex items-center justify-between p-3 rounded-xl shadow-lg ${appt.gradient}`}
                        >
                            <div className="p-2 bg-white rounded-xl shadow-xl text-2xl">
                                {appt.icon}
                            </div>

                            <div className="flex-1 px-3 flex flex-col gap-1">
                                <h4 className="font-medium text-gray-600">{appt.title}</h4>
                                <IconText icon={<BsClock />} bgColor={appt.iconBg} text={appt.time} />
                                <IconText icon={<GoPerson />} bgColor={appt.iconBg} text={appt.patient} />
                            </div>

                        </div>
                    ))}
                </section>
            ))}
        </div>
    );
};

export default UpcomingSchedule;
