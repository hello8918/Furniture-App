import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Routes}  from 'react-router-dom'; 

import '../App.css';


import Layer6 from '../Layer 6.png'
import Bg3 from '../br3.jpg'
import Contactus from '../Component/Contactus';
import Blog from '../Component/Blog';
import Footer from '../Component/Footer';
import Section3 from '../Component/Section3';
import Services from '../Component/Services';
import Navbar from '../Component/Navbar';
import CreateAccount from '../Component/CreateAccount';
import Login from '../Component/Login';
import Customercontact from '../Component/Customercontact'
function Home() {
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
    return (
      
        <div className="container1223">
          {/* <Navbar/> */}
          <div classname="header">
          <div className="head2">
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
            <button type="button" className="b1"><a href='#blog'>About</a></button>
            <button type="button" className="b2"><a href='#shop'>Go Shop</a></button>
            <div className="logo1" onClick={prev}><i className="fa-solid fa-chevron-left fa-beat-fade fa-3x"></i></div>
            <div className="logo2" onClick={next}><i className="fa-solid fa-angle-right fa-beat-fade fa-3x"></i></div>
          </div>
          
          </div>
          <Services/>
          <Section3/>
          <Blog/>
          <Contactus/>
          {/* <CreateAccount/>
          <Login/>
          <Customercontact/> */}
          {/* <Footer/> */}
          
      </div>
    
    );
  }

export default Home;