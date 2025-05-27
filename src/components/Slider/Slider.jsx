import { useEffect, useState } from "react";
import { navLinks } from "../../data/navigationLink";
import { SlArrowRight } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router-dom";

const Slider = ({ showSidebar = false, onClose }) => {
    const [activeLink, setActiveLink] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/dashboard");
            setActiveLink("dashboard");
        } else {
            const pathTitle = location.pathname.slice(1);
            setActiveLink(pathTitle);
        }
    }, [location.pathname, navigate]);


    const sidebarTransform = showSidebar ? "translate-x-0" : "-translate-x-full";

    return (
        <nav
            className={`fixed top-0 left-0 z-50 h-full w-[70%] p-4 bg-white px-6 font-medium text-gray-700 text-md overflow-y-auto hide-scrollbar
      transform transition-transform duration-300 ease-in-out md:shadow-2xl
      md:static md:translate-x-0 md:w-[28%] md:bg-transparent
      ${sidebarTransform}`}
        >
            {/* Close icon (only show on small size screen) */}
            <div className="flex justify-end md:hidden">
                <button
                    onClick={() => onClose(false)}
                    className="text-gray-500 text-xl font-bold cursor-pointer fixed"
                    aria-label="Close menu"
                >
                    ✕
                </button>
            </div>

            {/* Slider Links */}
            {navLinks.map(({ heading, menus }, idx) => (
                <div key={heading + idx}>
                    <p className="text-gray-500 font-bold uppercase mt-4">{heading}</p>
                    {menus.map(({ title, icon }) => (
                        <button
                            key={title}
                            onClick={() => {
                                setActiveLink(title);
                                navigate(`/${title}`);
                                if (onClose) onClose(false);
                            }}
                            className={`select-none w-full duration-100 ease-in-out capitalize text-md flex items-center justify-between py-3.5 mt-3 px-5 rounded-xl hover:shadow-md hover:bg-gradient-to-r from-blue-50 to-violet-50 ${activeLink === title
                                ? "shadow-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white"
                                : ""
                                }`}
                        >
                            <span className="flex items-center gap-4">
                                <span
                                    className={`text-xl ${activeLink === title
                                        ? "bg-blue-400 p-2 inline-block rounded-lg shadow-lg"
                                        : ""
                                        }`}
                                >
                                    {icon}
                                </span>
                                {title}
                            </span>
                            {/* {activeLink === title && <SlArrowRight />} */}
                        </button>
                    ))}
                </div>
            ))}
        </nav>
    );
};

export default Slider;
