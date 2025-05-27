const Header = ({ children, title, subtitle }) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="capitalize text-3xl font-bold">{title}</h1>
                <p className="capitalize text-gray-500 font-medium">{subtitle}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Header