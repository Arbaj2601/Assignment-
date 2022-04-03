//import React, { Component } from 'react';
import React from 'react';
import { useState } from 'react';
import Moves from './Moves';
import { FaTruck,FaUserAlt } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri"
import { BiLogInCircle } from "react-icons/bi"
import "./style1.css";
const Boxigo = () => {
  const[click,setclick]=useState(false);
  return <>

  <div class="container">
  <div class="menu"><div onClick={()=> setclick(!click) }><FaTruck/> MY MOVES</div>

  <br></br>
  <div><FaUserAlt/> MY PROFILE</div>
  <br></br>
  <div><RiBillLine/> GET QOUTE</div>
  <br></br>
  <div><BiLogInCircle/> LOGOUT</div></div>
  <div class="result">{click && <Moves/>}</div>
</div>
<br></br>


    </>
}

export default Boxigo