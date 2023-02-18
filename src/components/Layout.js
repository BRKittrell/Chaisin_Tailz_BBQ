import { Link, Outlet } from "react-router-dom";

//images
import Logo from "../images/Logo.png";
//icons
import { FaFacebookSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Layout = () => {
  return (
    <div id="layout_container">
      <div id="logo_container">
        <Link to="/"><img id="logo" src={Logo} alt="logo"></img></Link>
      </div>
      <nav id="link_container">
        <Link to="/menu" className="nav">Menu</Link>
        <Link to="/catering" className="nav">Catering</Link>
        <Link to="/community" className="nav">Community</Link>
        <Link to="/merch" className="nav">Merch</Link>
        <a href="https://www.facebook.com/CasinTailzBBQ" target="_blank" rel="noreferrer" className="nav"><FaFacebookSquare>...</FaFacebookSquare></a>
        <a href="mailto:chasintailzbbqllc@gmail.com" className="nav"><HiMail>...</HiMail></a>
        <a href="tel:216-347-0704" className="nav">216-347-0704</a>
      </nav> 
      <Outlet />
    </div>
  );
};

export default Layout;

