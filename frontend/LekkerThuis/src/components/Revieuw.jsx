const Revieuw = ({ name, text, avatar, stars, className }) => {
  return (
    <div className={`p-4 rounded-lg border border-accent shadow-md flex space-x-4 w-1/5 ${className}`}>
      <img
        src={avatar}
        alt=""
        className="w-16 h-16 rounded-full object-cover"
      />

      <div>
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <div className="mt-1">{stars}</div> {/* Loc pentru stele */}
        <p className="text-gray-600 mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Revieuw;
