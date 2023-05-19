import React, { useRef } from "react";
import "./header.css";
import {Container} from "reactstrap";
import {Link, NavLink} from "react-router-dom";

const NAV_LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
  {
    display: "Contact",
    url: "/contact",
  },
   
];

const Header = () => {

  const menuRef=useRef(null)
  const toggleMenu =()=>menuRef.current.classList.toggle('active_menu')
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <i className="ri-firefox-fill"></i>
              </span>
              NFTs
            </h2>
          </div>
          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV_LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.url} >{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav_right d-flex align-items-center" >
            <button className="btn d-flex align-items-center gap-2 " >
            <span><i className="ri-wallet-line"></i></span>
              <Link to='/wallet' >Connect Wallet</Link></button>
            <span className="mobile_menu" >
            <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
