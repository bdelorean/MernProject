import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="bg-secondary py-10 relative blur-container">
        <div className="text-center">
          <h2 className="text-white text-3xl">Follow LekkerThuis!</h2>
          <p className="text-gray-300 mt-2">
            Ontdek onze nieuwste gerechten en blijf op de hoogte.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/LekkerThuis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-4 text-secondary hover:bg-gray-200 transition-transform transform hover:scale-110"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/LekkerThuis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-4 text-secondary hover:bg-gray-200 transition-transform transform hover:scale-110"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          {/* Pinterest */}
          <a
            href="https://www.pinterest.com/LekkerThuis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-4 text-secondary hover:bg-gray-200 transition-transform transform hover:scale-110"
          >
            <FaPinterestP className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
