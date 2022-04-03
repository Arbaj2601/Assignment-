import React from 'react'
import { useState } from 'react';
import "./style1.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { BiHome,BiBuilding,BiPencil } from "react-icons/bi"
import {GiRoad } from "react-icons/gi"
import {BsFillCalendarDateFill,BsFillExclamationTriangleFill } from "react-icons/bs"
import {RiCheckboxLine} from "react-icons/ri"
import Movedetails from './Movedetails';
function Moves() {
const [active,setactive]=useState(false);
 return <>

  <h6 class="heading"><b>MY MOVES</b></h6>
  <br></br>
    <div class="contentbox">
   <div class="road">
    <div><h6><b>From</b></h6><h6>Ejipura,Bengaluru,karnatka</h6></div>
    <div><BsFillArrowRightCircleFill/></div>
    <div><h6><b>To</b></h6>HRS layout,Bengaluru,karnatka<h6></h6></div>
    <div><h6><b>Requst#</b></h6><h6 style={{color:"orangered"}}><b>E21418</b></h6></div>
    </div>  
    <div class="detailbox">
        <span><span style={{color:"red"}}><BiHome/></span>1BHK</span>
        <span><span style={{color:"red"}}><BiBuilding/></span>32</span>
        <span><span style={{color:"red"}}><GiRoad/></span>4.8 km</span>
        <span><span style={{color:"red"}}><BsFillCalendarDateFill/> </span>sept 26,2020 at 6:18 pm <span style={{color:"red"}}><BiPencil/></span></span>
        <span><span style={{color:"red"}}><RiCheckboxLine/></span> is flexible</span>
        <button class="viewbutton" onClick={()=> setactive(!active)}>view move details</button>
       
    
        <button class="viewqoute">Qoutes Awaiting</button>
       
    </div>
    <span><BsFillExclamationTriangleFill/> Please update your move date before 2 days of shifting</span>
    </div>
    <div>{active && <Movedetails/>}</div>
    

    </>
}

export default Moves