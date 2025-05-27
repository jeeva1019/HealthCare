import { histInfo } from "../../data/historyinfo";
import Button from "../shared/Button";
import Header from "../shared/Header";
import { MdOutlineFileDownload } from "react-icons/md";

const PatientRecordCard = ({ record }) => (
  <div className="bg-white shadow-md rounded-lg p-6 my-6 hover:shadow-lg transition-shadow duration-300">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-blue-700">{record.patient}</h2>
      <span className="text-sm font-medium text-green-600 uppercase tracking-wide">{record.status}</span>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4 text-gray-700">
      <div>
        <p className="font-semibold">Type:</p>
        <p>{record.type}</p>
      </div>
      <div>
        <p className="font-semibold">Date:</p>
        <p>{record.date}</p>
      </div>
      <div>
        <p className="font-semibold">Doctor:</p>
        <p>{record.doctor}</p>
      </div>
      <div>
        <p className="font-semibold">Diagnosis:</p>
        <p>{record.diagnosis}</p>
      </div>
    </div>

    <p className="text-gray-600 mb-4">{record.notes}</p>

    <button
      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-lg hover:from-blue-600 hover:to-violet-700 transition"
      onClick={() => alert(`Viewing full record of ${record.patient}`)}
    >
      View Full Record
    </button>
  </div>
);

const PatientRecordsList = () => {
  return (
    <div className="w-full mx-auto">

      {/* Header */}
      <Header title={histInfo.title} subtitle={histInfo.subtitle}>
        <Button icon={<MdOutlineFileDownload size={25} />} label='export report' />
      </Header>

      {/* Patient History */}
      {histInfo.history.map((record, idx) => (
        <PatientRecordCard key={idx} record={record} />
      ))}
    </div>
  );
};

export default PatientRecordsList;
