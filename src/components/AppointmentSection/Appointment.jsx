import { appointInfo } from "../../data/appointInfo";
import Button from "../shared/Button";
import Header from "../shared/Header";
import { FaPlus } from "react-icons/fa6";


// Card component
const AppointmentCard = ({ appt }) => (
    <div className="bg-white shadow-md rounded-xl p-5 flex items-start gap-4 hover:shadow-lg transition">
        {/* Avatar */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
            {appt.initials}
        </div>

        {/* Info */}
        <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg font-semibold text-gray-800">{appt.name}</h2>
                <span
                    className={`text-sm px-3 py-1 rounded-full font-medium ${appointInfo.statusColors[appt.status] || "bg-gray-100 text-gray-700"}`}
                >
                    {appt.status}
                </span>
            </div>

            <p className="text-sm text-gray-600">
                <strong>{appt.day}</strong> at <strong>{appt.time}</strong>
            </p>
            <p className="text-sm text-gray-600">{appt.phone}</p>
            <p className="text-sm text-gray-600">{appt.email}</p>
            <p className="text-sm text-gray-500 italic mt-1">{appt.type}</p>

            <button className="mt-3 text-sm px-4 py-1.5 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-lg shadow hover:from-blue-600 hover:to-violet-700 transition">
                View Details
            </button>
        </div>
    </div>
);

// List component
const AppointmentCardList = () => {
    return (
        <div>
            <Header title={appointInfo.title} subtitle={appointInfo.subtitle} >
                <Button icon={<FaPlus />} label='new appointments' />
            </Header>
            <h1 className="text-2xl font-bold text-blue-700 my-6">Upcoming Appointments</h1>
            <div className="grid gap-5">
                {appointInfo.appointments.map((appt, idx) => (
                    <AppointmentCard key={idx} appt={appt} />
                ))}
            </div>
        </div>
    );
};

export default AppointmentCardList;
