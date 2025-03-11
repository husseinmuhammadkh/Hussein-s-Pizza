import React, {useState} from 'react'
import Logo from "../assets/pizzaLogo.png";
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";
function Navbar() {

  const [openLinks, setOpenLinks] =useState (false)

  const toglleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <img className="pizzaimg" src={Logo}/>
      <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/menu"> menu </Link>
        <Link to="/about"> about </Link>
        <Link to="/contact"> coctact </Link>
      </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> menu </Link>
        <Link to="/about"> about </Link>
        <Link to="/contact"> coctact </Link>
        <button onClick={toglleNavbar}>
          <ReorderIcon/>
        </button>
      </div>
    </div>
  )
}
export default Navbar