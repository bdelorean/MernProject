const Revieuw = ({ name, text, avatar, stars, className }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-2xl flex flex-col w-72 h-60 space-x-4 ${className} bg-[#effbf7]`}
      data-aos="zoom-in"
    >
      <img
        src={avatar}
        alt=""
        className="w-16 h-16 rounded-full object-cover"
      />

      <div>
        <h3 className="md:text-lg text-sm font-bold text-gray-800">{name}</h3>
        <div className="mt-1">{stars}</div> {/* Loc pentru stele */}
        <p className="text-gray-600 mt-2 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Revieuw;
