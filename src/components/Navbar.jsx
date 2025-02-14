import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://linkedin.com/in/rifqi-dani/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://github.com/mrifdnp" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-600 transition-colors" />
        </a>
        <a href="https://www.instagram.com/mrifdnp109" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-600 transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
