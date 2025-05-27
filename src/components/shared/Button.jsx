const Button = ({ icon, label }) => {
    return (
        <button className="bg-gradient-to-tl from-blue-500 to-blue-400 shadow-xl px-3 py-2 capitalize flex items-center gap-3 text-white font-medium rounded-lg">
            {icon}
            <span className="hidden sm:block">{label}</span>
        </button>
    )
}

export default Button