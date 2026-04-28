
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#295943] text-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
       
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          KeenKeeper
        </h1>

      
        <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-10">
          <p className="mb-4 text-lg font-medium">Social Links</p>

          <div className="flex justify-center gap-4">
            <a className="btn btn-circle bg-white text-black hover:bg-gray-200">
              <FaYoutube size={18} />
            </a>

            <a className="btn btn-circle bg-white text-black hover:bg-gray-200">
              <FaFacebookF size={18} />
            </a>

            <a className="btn btn-circle bg-white text-black hover:bg-gray-200">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

       
        <div className="border-t border-gray-400 opacity-40 my-6"></div>

      
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;