import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "/logo.jpg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal justify-center md:justify-between items-center p-3 container mx-auto text-white">
        <aside className="grid-flow-col items-center">
          <Link to={""}>
            <img className="w-13 rounded-xl" src={logo} alt="" />
          </Link>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 mx-auto md:place-self-center md:justify-self-end">
          <a
            href="https://www.youtube.com/@rakibhassan_nayem"
            target="blank"
            className="cursor-pointer hover:scale-140 transition"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com/rakibhassan_nayem"
            target="blank"
            className="cursor-pointer hover:scale-140 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.facebook.com/rakibhassannayem26"
            target="blank"
            className="cursor-pointer hover:scale-140 transition"
          >
            <FaFacebookF size={24} />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
