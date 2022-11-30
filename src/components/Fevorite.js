import React, { useState } from "react";

import '../App.css'

const Fevorite = ({ id, data, fevProperty, setfevProperty }) => {
  const [color, setcolor] = useState(false)
  let fevArray = [];
  function Cart(e) {


    if (color === false) {
      const property = data.find(item => item.id === id);
      setfevProperty([...fevProperty, property]);
      fevArray.push(property)
      setcolor(!color)
    }
    else {
      setcolor(!color)
      let removeFev = fevProperty;
      removeFev = removeFev.filter((remove) => remove.id !== id)
      setfevProperty(removeFev);
    }




  }



  return (
    <>
      <div id="fevIcon">
        {color ? <i className="fa fa-heart" value={id} onClick={Cart}></i> : <i className="fa fa-heart-o" onClick={Cart}></i>}

      </div>
    </>
  )
}

export default Fevorite;