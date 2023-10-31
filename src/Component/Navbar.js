import React from "react";


import { Link } from 'react-router-dom';
import { useState } from "react";
import Layer6 from '../Layer 6.png'
import Bg3 from '../br3.jpg'
export default function Navbar(){
const [sliderImg, setSliderImg] = useState(0);
  const images = [Layer6,Bg3];
  const [isNavActive, setNavActive] = useState(false);

  function prev() {
    setSliderImg((prevImg) => (prevImg <= 0 ? images.length - 1 : prevImg - 1));
  }

  function next() {
    setSliderImg((prevImg) => (prevImg >= images.length - 1 ? 0 : prevImg + 1));
  }
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return(
          <div className="header">
            <div className="head1">
              <nav className="navbar">
                <div className="left-side">www.psdtemplate.com</div>
            
                <div>
      <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`nav-list ${menuOpen ? 'open' : ''}`} id="nav-list">
      <p class="h"><Link to="/home">HOME</Link></p>
        <p>+</p>
        <p class="h"><Link to="/services">SERVICES</Link></p>
        <p>+</p>
        <p class="h"><Link to="/section3">PORTFOLIO</Link></p>
        <p>+</p>
        <p class="h"><Link to="/Blog">READ BLOG</Link></p>
        <p>+</p>
        <p class="h"><Link to="/contact1">CONTACT</Link></p>
        <p>+</p>
        <p class="h"><Link to="/contact">NEWSLETTER</Link></p>
      </div>
    </div>
              </nav>
            </div>
            {/* <div className="head2">
              <div className="head2-1">
                <p className="lefth">
                  <span style={{ color: 'grey' }}>THE</span>
                  <span style={{ color: 'rgb(6, 94, 182)', fontFamily: 'Montserrat' }}>SPACIOUS</span>
                </p>
                <p className="headline">Transform your living spaces into dreamscapes with our exquisite furniture collections</p>
              </div>
              <div className="head2-2">
                <div className="navsearch">
                  <input placeholder="   Search for products" className="input" height="50px" />
                  <div className="navlogo">
                    <a href=" "><i className="fa-solid fa-magnifying-glass"></i></a>
                  </div>
                </div>
                <div className="heading2">
                  <i>Follow us on Social Media</i>
                  <a href=""><div className="sm-1 hello"><i className="fa-brands fa-twitter"></i></div></a>
                  <a href=""><div className="sm-2 hello"><i className="fa-brands fa-facebook"></i></div></a>
                  <a href=""><div className="sm-3 hello"><i className="fa-brands fa-google-plus-g"></i></div></a>
                  <a href=""><div className="sm-4 hello"><i className="fa-brands fa-youtube"></i></div></a>
                </div>
              </div>
            </div>
            <div className="main slider-img">
            <img src={images[sliderImg]} alt="" />
            <p className="main-1">Welcome to the thespacious</p>
            <p className="main-2">a furniture and interiors agency</p>
            <button type="button" className="b1">About</button>
            <button type="button" className="b2">Go Shop</button>
            <div className="logo1" onClick={prev}><i className="fa-solid fa-chevron-left fa-beat-fade fa-3x"></i></div>
            <div className="logo2" onClick={next}><i className="fa-solid fa-angle-right fa-beat-fade fa-3x"></i></div>
          </div> */}
          </div>
);
}