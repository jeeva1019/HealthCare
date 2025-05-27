export const appointInfo = {
    title: "Appointments",
    subtitle: "Manage your patient appointments",
    appointments: [
        {
            initials: "JS",
            name: "John Smith",
            day: "Today",
            time: "09:00 AM",
            phone: "+1 234 567 8900",
            email: "john@example.com",
            status: "confirmed",
            type: "Consultation",
        },
        {
            initials: "SJ",
            name: "Sarah Johnson",
            day: "Today",
            time: "10:30 AM",
            phone: "+1 234 567 8901",
            email: "sarah@example.com",
            status: "pending",
            type: "Follow-up",
        },
        {
            initials: "MW",
            name: "Mike Wilson",
            day: "Tomorrow",
            time: "02:00 PM",
            phone: "+1 234 567 8902",
            email: "mike@example.com",
            status: "confirmed",
            type: "Surgery",
        },
        {
            initials: "ED",
            name: "Emma Davis",
            day: "Tomorrow",
            time: "03:30 PM",
            phone: "+1 234 567 8903",
            email: "emma@example.com",
            status: "confirmed",
            type: "Checkup",
        },
    ], statusColors: {
        confirmed: "bg-green-100 text-green-700",
        pending: "bg-yellow-100 text-yellow-700",
    }
}