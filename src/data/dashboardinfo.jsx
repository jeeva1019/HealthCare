import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";
import { RiGroupLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";

import { FaRegHeart } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";

import { BsLungs } from "react-icons/bs";
import { LuBone } from "react-icons/lu";





export const dashboardInfo = {
    title: "dashboard",
    subtitle: "Welcome back, Dr. John Doe",
    weekSection: {
        title: "this week",
        date: "March 15-21, 2024"
    },
    rptSection: [
        {
            title: "Total Patients", bgColor: "bg-blue-50", cnt: "2,847", icon: <RiGroupLine />, gradient: "bg-gradient-to-l from-blue-600 to-blue-500", pl:
                <div className="flex items-center font-medium text-sm text-gray-500 gap-2">
                    <span className="text-green-500 text-md"><HiArrowTrendingUp /></span>
                    <span className="text-green-500 text-md">+12%</span>
                    vs last month
                </div>
        },
        {
            title: "Appointments Today", bgColor: "bg-green-50", cnt: "24", icon: <IoCalendarOutline />, gradient: "bg-gradient-to-l from-green-600 to-green-500", pl:
                <div className="flex items-center font-medium text-sm text-gray-500 gap-2">
                    <span className="text-green-500 text-md"><HiArrowTrendingUp /></span>
                    <span className="text-green-500 text-md">+8%</span>
                    vs last month
                </div>
        },
        {
            title: "Critical Cases", bgColor: "bg-red-50", cnt: "3", icon: <FaRegHeart />, gradient: "bg-gradient-to-l from-red-600 to-red-500", pl:
                <div className="flex items-center font-medium text-sm text-gray-500 gap-2">
                    <span className="text-red-500 text-md font-bold"><HiArrowTrendingDown /></span>
                    <span className="text-red-500 text-md font-bold">-2%</span>
                    vs last month
                </div>
        },
        {
            title: "Recovery Rate", bgColor: "bg-violet-50", cnt: "94.2%", icon: <TbActivityHeartbeat />, gradient: "bg-gradient-to-l from-violet-600 to-violet-500", pl:
                <div className="flex items-center font-medium text-sm text-gray-500 gap-2">
                    <span className="text-green-500 text-md"><HiArrowTrendingUp /></span>
                    <span className="text-green-500 text-md">+5%</span>
                    <span>vs last month</span>
                </div>
        }
    ],
    healthData: [
        {
            icon: <BsLungs />,
            title: "Lungs",
            date: "Tue, 26 Oct, 2021",
            status: "warning",
            progress: 75,
            description: "Mild inflammation detected",
            gradient: "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600",
            bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100",
            iconColor: "text-orange-600",
            progressGradient: "bg-gradient-to-r from-orange-400 to-orange-600",
        },
        {
            icon: <FaRegHeart />,
            title: "Heart",
            date: "Tue, 26 Oct, 2021",
            status: "success",
            progress: 95,
            description: "Excellent cardiovascular health",
            gradient: "bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600",
            bgGradient: "bg-gradient-to-br from-emerald-50 to-emerald-100",
            iconColor: "text-emerald-600",
            progressGradient: "bg-gradient-to-r from-emerald-400 to-emerald-600",
        },
        {
            icon: <LuBone />,
            title: "Bone",
            date: "Tue, 26 Oct, 2021",
            status: "warning",
            progress: 60,
            description: "Low bone density in spine",
            gradient: "bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600",
            bgGradient: "bg-gradient-to-br from-amber-50 to-amber-100",
            iconColor: "text-amber-600",
            progressGradient: "bg-gradient-to-r from-amber-400 to-amber-600",
        },
    ],
    calendarInfo: {
        title: "October 2021",
        weeklySchedule: [
            {
                day: "Mon",
                date: 25,
                slots: ["10:00", "__", "__"]
            },
            {
                day: "Tue",
                date: 26,
                slots: ["08:00", "09:00", "__"]
            },
            {
                day: "Wed",
                date: 27,
                slots: ["12:00", "__", "__"]
            },
            {
                day: "Thu",
                date: 28,
                slots: ["10:00", "11:00", "__"]
            },
            {
                day: "Fri",
                date: 29,
                slots: ["14:00", "__", "__"]
            },
            {
                day: "Sat",
                date: 30,
                slots: ["15:00", "09:00", "__"]
            },
            {
                day: "Sun",
                date: 31,
                slots: ["10:00", "11:00", "__"]
            }
        ]
    },
    appointments: [
        {
            title: "Dentist Appointment",
            time: "09:00-11:00",
            doctor: "Dr. Cameron Williamson",
            icon: "🦷",
            bgColor: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
            department: "Dentistry"
        },
        {
            title: "Physiotherapy",
            time: "11:00-12:00",
            bgColor: "bg-gradient-to-br from-green-400 via-green-500 to-green-600",
            doctor: "Dr. Kevin Djores",
            icon: "🏃",
            department: "Physiotherapy"
        }
    ],
    upcomingSchedule: [
        {
            day: "On Thursday",
            gradient: "bg-gradient-to-br from-blue-500 to-blue-400",
            appointments: [
                {
                    icon: "🏥",
                    title: "Health checkup complete",
                    time: "11:00 AM",
                    patient: "John Smith",
                    gradient: "bg-gradient-to-br from-red-50 via-red-50 to-red-100"
                },
                {
                    icon: "👁️",
                    title: "Ophthalmologist",
                    time: "14:00 PM",
                    patient: "Sarah Johnson",
                    gradient: "bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100"
                }
            ]
        },
        {
            day: "On Saturday",
            gradient: "bg-gradient-to-br from-green-500 to-green-400",
            appointments: [
                {
                    icon: "❤️",
                    title: "Cardiologist",
                    time: "12:00 AM",
                    patient: "Mike Wilson",
                    gradient: "bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100"
                },
                {
                    icon: "🧠",
                    title: "Neurologist",
                    time: "16:00 PM",
                    patient: "Emma Davis",
                    gradient: "bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100"
                }
            ]
        }
    ],
    activityData: [
        { day: "Mon", value: 20, appointments: 3 },
        { day: "Tue", value: 45, appointments: 7 },
        { day: "Wed", value: 30, appointments: 5 },
        { day: "Thu", value: 60, appointments: 9 },
        { day: "Fri", value: 40, appointments: 6 },
        { day: "Sat", value: 80, appointments: 12 },
        { day: "Sun", value: 35, appointments: 5 },
    ],
    statusOverView: [
        { label: "Total Appointments", value: 47, icon: <IoCalendarOutline />, bgColor: "bg-gradient-to-br from-white-50 via-blue-50 to-blue-100", iconBg: "bg-gradient-to-br from-blue-500 to-blue-400" },
        { label: "Patients Seen", value: 42, icon: <RiGroupLine />, bgColor: "bg-gradient-to-br from-white-50 via-green-50 to-green-100", iconBg: "bg-gradient-to-br from-green-500 to-green-400" },
        { label: "Completion Rate", value: "89%", icon: <HiArrowTrendingUp />, bgColor: "bg-gradient-to-br from-white-50 via-violet-50 to-violet-100", iconBg: "bg-gradient-to-br from-violet-500 to-violet-400" },
    ]
};