import React, { useState } from "react";

import '../App.css'

const Fevorite=({id,data})=>{

  // let fevArray=[];
    const [color, setcolor] = useState(false)
    const [fevProperty, setfevProperty]=useState([])
// console.log((id));
// console.log((data));

  function Cart() {
    let fevArray=[];
    if (color === false) {
      setcolor(true)

      const property = data.find(item => item.id === id);
      setfevProperty(property);
      fevArray.push(property)
      localStorage.setItem("Fevorite",JSON.stringify(property))
    }
    else {
      setcolor(false)
    }
    
  }
  

  
    return(
        <>
            <div id="fevIcon">
            {color ? <i className="fa fa-heart" value={id} style={{ color: "red" }} onClick={Cart}></i> : <i className="fa fa-heart-o" style={{ color: "black" }} onClick={Cart}></i>}
            </div>
        </>
    )
}

export default Fevorite;