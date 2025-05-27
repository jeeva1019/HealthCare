const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];


export const statisticsInfo = {
    stats: [
        { label: "Total Patients", value: "2,847", change: "+12%" },
        { label: "Monthly Revenue", value: "$45,280", change: "+8%" },
        { label: "Appointments", value: "1,234", change: "+15%" },
        { label: "Success Rate", value: "94.2%", change: "+2%" },
    ],

    departmentStats: [
        { dept: "Cardiology", patients: 450, percentage: 25 },
        { dept: "Neurology", patients: 380, percentage: 21 },
        { dept: "Orthopedics", patients: 320, percentage: 18 },
        { dept: "Pediatrics", patients: 280, percentage: 16 },
        { dept: "General", patients: 360, percentage: 20 },
    ],

    performance: [
        { label: "Patient Satisfaction", value: "96.8%" },
        { label: "Average Wait Time", value: "12 min" },
        { label: "Treatment Success", value: "94.2%" },
        { label: "Readmission Rate", value: "3.1%" },
    ],

    barOptions: {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: { beginAtZero: true },
        },
    },


    patientVolumeData: {
        labels: months,
        datasets: [
            {
                label: "Patients",
                data: [450, 550, 610, 700, 800, 900],
                backgroundColor: "#3b82f6",
            },
        ],
    },

    revenueData: {
        labels: months,
        datasets: [
            {
                label: "Revenue",
                data: [32000, 34000, 37000, 41000, 44000, 45280],
                backgroundColor: "#8b5cf6",
            },
        ],
    },
}