import Input from "../shared/Input";
import Avatar from "./Avatar";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline, IoMenuOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import profile from "../../assets/profile_avatar.png"

const Header = ({ setMenuOpen }) => {
  return (
    <header className="px-6 md:py-2 py-5 flex items-center justify-between shadow-xl bg-white/30 backdrop-blur-sm">
      {/* Logo */}
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
        HealthCare
      </h1>

      {/* Search Input (visible from md and above) */}
      <div className="w-1/3 hidden md:block">
        <Input placeholder="Search..." icon={<IoSearchOutline />} />
      </div>

      {/* Icons (shown md and above) */}
      <nav className="hidden md:flex items-center gap-4 ml-4">
        <Avatar
          icon={<IoIosNotificationsOutline />}
          batch={true}
          cls="text-xl text-gray-700 hover:text-blue-500 rounded-full"
        />
        <Avatar
          imgPath={profile}
          cls="cursor-pointer text-white rounded-full border-2 border-cyan-300 bg-gray-50"
        />
        <Avatar
          icon={<FaPlus />}
          cls="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg cursor-pointer rounded-lg shadow-md shadow-blue-100"
        />
      </nav>

      {/* Hamburger Menu (only visible on small screens) */}
      <div
        className="block md:hidden text-3xl text-gray-700 cursor-pointer"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <IoMenuOutline />
      </div>
    </header>
  );
};

export default Header;
