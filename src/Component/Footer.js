import React from "react";
import { Link } from "react-router-dom";
export default function Footer(){
    return(<>
    <footer className="footer">
          <div className="footerl">
            <div className="footerleft">
              <span className="contentl" style={{ color: 'black' }}>THE</span>
              <span className="contentl" style={{ color: 'white', fontFamily: 'Montserrat' }}>SPACIOUS</span>
              <p className="contentp"> Transform your living spaces into dreamscapes with our exquisite furniture collections</p>
            </div>
          </div>
          <div className="footerright">
            <div className="footerr1">
              <span className="heads"> Site Navigation</span>
              <p className="headc"><Link to="/home">go to home</Link></p>
             <p className="headc"> <Link to="/services">services</Link></p>
              <p className="headc"><Link to="/section3">portfolio</Link></p>
              <p className="headc"><Link to="/Blog">read blog</Link></p>
              <p className="headc"><Link to="/contact1">contact us</Link></p>
              <p className="headc"><Link to="/contact">NewsLetter</Link></p>
            </div>
            <div className="footerr1 mid">
              <span className="heads"> INFORMATION</span>
              <p className="headc"><Link to="/login">USER LOGIN</Link></p>
              <p className="headc"><Link to="/createaccount">CREATE NEW ACCOUNT</Link></p>
              <p className="headc"><a href='#shop'>CHECKOUT</a></p>
              <p className="headc"><a href='#shop'>MY CART</a></p>
              <p className="headc"><Link to="/info">OTHER INFORMATION</Link></p>
            </div>
            <div className="footerr1">
              <span className="heads"> POLICIES & INFO</span>
              <p className="headc"><Link to="/tandc">TERMS CONDITIONS</Link></p>
              <p className="headc"><Link to="/policy">WEBSITE POLICY</Link></p>
              <p className="headc"><Link to="/sellers">POLICY FOR SELLERS</Link></p>
              <p className="headc"><Link to="/buyers">POLICY FOR BUYERS</Link></p>
              <p className="headc"><Link to="/refund">SHOPPING & REFUND</Link></p>
              <p className="headc"><Link to="/wholesale">WHOLESALE POLICY</Link></p>
            </div>
          </div>
        </footer>
        <div className="footerlast">
          (c) 2023, all rights reserved, thespacious theme, designed by krish wason
        </div>
    </>)};