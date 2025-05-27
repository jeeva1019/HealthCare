import { LuLayoutDashboard } from "react-icons/lu";
import { LuHistory } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";
import { IoStatsChart } from "react-icons/io5";
import { LuTestTube } from "react-icons/lu";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export const navLinks = [
    {
        heading: "General",
        menus: [
            { icon: <LuLayoutDashboard />, title: "dashboard" },
            { icon: <LuHistory />, title: "history" },
            { icon: <IoCalendarNumberOutline />, title: "calendar" },
            { icon: <LuClock9 />, title: "appointments" },
            { icon: <LuTestTube />, title: "statistics" },
            { icon: <IoStatsChart />, title: "tests" },
            { icon: <IoChatbubbleOutline />, title: "chat" },
            { icon: <FaRegQuestionCircle />, title: "support" },
            { icon: <IoSettingsOutline />, title: "setting" },


        ]
    }
];