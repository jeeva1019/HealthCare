import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from "recharts";



const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white shadow-lg rounded-md p-3 border border-gray-200">
                <p className="font-semibold mb-1">Day: {label}</p>
                {payload.map((entry, index) => (
                    <p key={`item-${index}`} className={`text-sm ${entry.dataKey === 'value' ? 'text-purple-600' : 'text-green-600'}`}>
                        {entry.name}: <strong>{entry.value}</strong>
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const ActivityChart = ({ activityData }) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart
                data={activityData}
                margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
                barCategoryGap="20%"
            >
                <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.2} />
                    </linearGradient>
                    <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.2} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
                <XAxis dataKey="day" tick={{ fill: '#374151', fontWeight: '600' }} />
                <YAxis tick={{ fill: '#374151', fontWeight: '600' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    verticalAlign="top"
                    align="right"
                    wrapperStyle={{ paddingBottom: 10 }}
                    iconType="circle"
                    formatter={(value) =>
                        <span className="text-gray-700 font-semibold">{value}</span>
                    }
                />
                <Bar
                    dataKey="value"
                    fill="url(#colorValue)"
                    radius={[8, 8, 0, 0]}
                    animationDuration={1500}
                    name="Value"
                />
                <Bar
                    dataKey="appointments"
                    fill="url(#colorAppointments)"
                    radius={[8, 8, 0, 0]}
                    animationDuration={1500}
                    name="Appointments"
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ActivityChart;
