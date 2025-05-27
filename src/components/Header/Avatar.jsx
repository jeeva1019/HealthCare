const Avatar = ({ icon, cls = "", imgPath, batch = false }) => {
  return (
    <div className={`m-2 h-10 w-10 p-1 inline-flex justify-center items-center ${cls}`}>
      {/* Image rendering */}
      {imgPath && <img src={imgPath} alt="avatar" className="h-full w-full object-cover rounded-full" />}

      {/* Icon only (no badge) */}
      {icon && !batch && !imgPath && (
        <span className="text-2xl">{icon}</span>
      )}

      {/* Icon with badge */}
      {icon && batch && (
        <div className="relative">
          <span className="bg-red-500 h-2 w-2 rounded-full absolute -top-1 -right-1"></span>
          <button className="text-2xl" aria-label="notification icon">
            {icon}
          </button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
