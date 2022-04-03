import React from 'react'
import { useEffect,useState } from 'react'
const Movedetails=() =>{

  const [detail,setdetail]=useState([]);
  const getData=async()=>{
   const response= fetch('http://v2.test.api.boxigo.in/product/assignment.php')
    setdetail(await (await response).json());
   
  }
  
  useEffect(()=>{
    getData();

  },[]);
  return <>
  <br></br>
 
  
  {
  detail.map((currelem)=>{
    return(
   <div class="Items-list">
     <span key={detail.id}><b>
            {detail.name}</b><button class="Edit-btn">Edit Inventory</button></span>
   
     </div>
        )
    })
    }
        
        
        </>
}

export default Movedetails