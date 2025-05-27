const Input = ({
  type = "text",
  placeholder = "Enter something...",
  value,
  onChange,
  icon = null,
  appendIcon = null,
  name = "",
}) => {
  return (
    <div className="relative w-full shadow-lg rounded-lg">
      {/* Leading Icon */}
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
          {icon}
        </div>
      )}

      {/* Input Field */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className={`w-full outline-0 p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
          icon ? "pl-10" : "pl-3"
        } ${appendIcon ? "pr-10" : "pr-3"}`}
      />

      {/* Trailing Icon */}
      {appendIcon && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
        >
          {appendIcon}
        </button>
      )}
    </div>
  );
};

export default Input;
