import { calendarInfo } from "../../data/calendarInfo";
import Button from "../shared/Button";
import Header from "../shared/Header";
import { GoPlus } from "react-icons/go";



const AppointmentCalendar = () => {
    const daysInMonth = 31;

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <Header subtitle={calendarInfo.subtitle} title={calendarInfo.title}>
                <Button icon={<GoPlus size={20} />} label='Add Event' />
            </Header>

            {/* Calendar */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden my-8">
                <div className="p-4 text-lg font-semibold border-b border-gray-200 text-blue-600">
                    March 2024
                </div>
                <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 border-b border-gray-200">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="py-2 bg-gray-50">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 text-center text-sm">
                    {Array.from({ length: daysInMonth }, (_, i) => {
                        const day = i + 1;
                        const event = calendarInfo.calendarEvents[day];
                        return (
                            <div key={day} className="h-20 border border-gray-100 p-1 relative text-gray-800">
                                <div className="font-semibold">{day}</div>
                                {event &&
                                    (Array.isArray(event) ? (
                                        event.map((t, i) => (
                                            <div
                                                key={i}
                                                className="mt-1 text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 font-semibold inline-block"
                                            >
                                                {t}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="mt-1 text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 font-semibold inline-block">
                                            {event}
                                        </div>
                                    ))}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Section: Today + Stats */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Today's Schedule */}
                <div className="md:col-span-2 bg-white rounded-xl shadow-md p-5">
                    <h2 className="text-xl font-bold text-blue-700 mb-4">Today's Schedule</h2>
                    {calendarInfo.todaySchedule.map((appt, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center p-4 border-b last:border-b-0"
                        >
                            <div>
                                <p className="text-md font-semibold text-gray-800">{appt.time}</p>
                                <p className="text-sm text-gray-600">{appt.name}</p>
                            </div>
                            <span className="text-sm px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-medium">
                                {appt.type}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-b from-blue-100 to-violet-100 p-6 rounded-xl shadow-md text-center">
                    <h2 className="text-lg font-bold text-gray-700 mb-4">Quick Stats</h2>
                    <div className="space-y-3">
                        <div>
                            <p className="text-3xl font-bold text-blue-600">47</p>
                            <p className="text-sm text-gray-600">Appointments this month</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-600">12</p>
                            <p className="text-sm text-gray-600">This week</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-600">2</p>
                            <p className="text-sm text-gray-600">Today</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCalendar;
