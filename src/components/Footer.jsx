import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '/logo.jpg'

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal justify-center md:justify-between items-center p-3 container mx-auto text-white">
        <aside className="grid-flow-col items-center">
          <img className='w-13' src={logo} alt="" />
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 mx-auto md:place-self-center md:justify-self-end">
          <a>
            <FaYoutube size={24} />
          </a>
          <a>
            <FaTwitter size={24} />
          </a>
          <a>
            <FaFacebookF size={24} />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
