import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import Group536 from '../img/Group536.png';

// ==============================
/* ------- Dynmic Code for Mobile Navbar---------- */
// ==============================

const Header = () => {
  const [navClass, setNavClass] = useState("navbar");
  const [toggleClass, SetToggleClass] = useState("bi bi-list mobile-nav-toggle");

  // Active Link
  const ActiveLink = ({isActive}) => {
    return{
      color: isActive? '#0069ff': '', 
    }
  }

  // Mobile Nav CSS
  const NavCss = (e) =>{
    switch (e.detail) {
      case 1:
          setNavClass("navbar navbar-mobile");
          SetToggleClass("bi mobile-nav-toggle bi-x");
        break;
      case 2:
          setNavClass("navbar");
          SetToggleClass("bi bi-list mobile-nav-toggle bi-list");
        break;
      default:
        return;
    }
  }
  
  // GoTo Top fuction
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setNavClass("navbar");
    SetToggleClass("bi mobile-nav-toggle bi-list");
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1 className="text-light">
            <NavLink to="/"><img src={Group536} style={{ height: "100px" }} className="img-fluid animated " alt="Group logo" /></NavLink>
          </h1>
        </div>

        <nav id="navbar" className={navClass}>
          <ul>
            <li><NavLink className="nav-link scrollto" onClick={goToTop} to='/' style={ActiveLink} >Home</NavLink></li>
            <li><NavLink className="nav-link scrollto" onClick={goToTop} to='/service' style={ActiveLink} >Service</NavLink></li>
            <li><NavLink className="nav-link scrollto" onClick={goToTop} to="/about" style={ActiveLink} >About</NavLink></li>
            <li><NavLink className="nav-link scrollto" onClick={goToTop} to="/team" style={ActiveLink} >Team</NavLink></li>
            <li><NavLink className="nav-link scrollto" onClick={goToTop} to="/achievement" style={ActiveLink} >Achievement</NavLink></li>
            <li><NavLink className="nav-link scrollto" onClick={goToTop} to="/contact" style={ActiveLink} >Contact</NavLink></li>
            <li><NavLink className="nav-link scrollto" onClick={goToTop} to="/blogs" style={ActiveLink} >Blogs</NavLink></li>
          </ul>
          <i className={toggleClass} onClick={NavCss} ></i>
        </nav>
        
      </div>
    </header>
  )
}

export default Header