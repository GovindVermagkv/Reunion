import React, { useState } from "react";

import '../App.css'

const Favorite = ({id,like, data, favProperty, setFavProperty }) => {
  const [color, setColor] = useState(like)

  function Cart() {

    if (color === false) {
      const property = data.find(item => item.id === id);
      setFavProperty([...favProperty, property]);
      setColor(!color)
    }
    else {
      
      let removeFev = favProperty;
      removeFev = removeFev.filter((remove) => remove.id !== id)
      setFavProperty(removeFev);
      setColor(!color)
    }
  }



  return (
    <>
      <div id="fevIcon">
        <i className={`fa fa-heart${color?"":"-o"}`} value={color?data.id:''} onClick={Cart}/>

      </div>
    </>
  )
}

export default Favorite;