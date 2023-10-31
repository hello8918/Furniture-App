import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Routes}  from 'react-router-dom'; 
import './App.css';

import Contactus from './Component/Contactus';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import Section3 from './Component/Section3';
import Services from './Component/Services';
import Navbar from './Component/Navbar';
import CreateAccount from './Component/CreateAccount';
import Login from './Component/Login';
import Customercontact from './Component/Customercontact'
import Home from './Component/Home'
function App() {
    return (
     <Router>
        <div className="container">
          <Navbar/>
          <Routes>
          {/* <Home/> */}
          {/* <Services/>
          <Section3/>
          <Blog/>
          <Contactus/>
          <CreateAccount/>
          <Login/>
          <Customercontact/> */}
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/section3" element={<Section3/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/contact1" element={<Customercontact/>}/>
          <Route exact path="/contact" element={<Contactus/>}/>
         < Route exact path="/login" element={<Login/>}/>
         < Route exact path="/createaccount" element={<CreateAccount/>}/>
         < Route exact path="/info" element={<Blog/>}/>
         <Route exact path="/tandc" element={<Section3/>}/>
         <Route exact path="/policy" element={<Section3/>}/>
         <Route exact path="/sellers" element={<Section3/>}/>
         <Route exact path="/buyers" element={<Section3/>}/>
         <Route exact path="/refund" element={<Section3/>}/>
         <Route exact path="/wholesale" element={<Section3/>}/>

        {/* <Route exact path="/Company" element={<Company/>}/>
        <Route exact path="/creativeW" element={<Creative/>}/>
        <Route exact path="/blogmn" element={<Blog/>}/>
        <Route exact path="/Contactgit" element={<Contactus/>}/>
        <Route exact path="/logSignp" element={<Logsign/>}/> */}
          </Routes>
          <Footer/>
          
      </div>
    </Router>
    );
  }

export default App;