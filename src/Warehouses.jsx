import React from 'react'
import './Warehouses.css';
import SS from "./Image/ss.png";

function Warehouses() {
  return (
    <>
      <div className='first'>
        <h1>Warehouses</h1>
      </div>
      <hr
   style={{
   background: "black",
   height: "3px",
   border: "none",
   marginTop:"100px",
   }}
/>
    <div className='second'>
    <img src={SS} alt="react logo" />
    </div>

    
    </>
  )
}

export default Warehouses;

