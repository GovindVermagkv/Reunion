import React, { useState } from "react";

import '../App.css'

const Favorite = ({id,like, data, favProperty, setFavProperty }) => {
  const [color, setcolor] = useState(like)

  function Cart() {

    console.log(data);
    if (color === false) {
      const property = data.find(item => item.id === id);
      setFavProperty([...favProperty, property]);
      setcolor(!color)
    }
    else {
      
      let removeFev = favProperty;
      removeFev = removeFev.filter((remove) => remove.id !== id)
      setFavProperty(removeFev);
      setcolor(!color)
    }
  }



  return (
    <>
      <div id="fevIcon">
        {color ? <i className="fa fa-heart" value={data.id} onClick={Cart}></i> : <i className="fa fa-heart-o" onClick={Cart}></i>}

      </div>
    </>
  )
}

export default Favorite;