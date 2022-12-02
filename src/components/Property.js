import React from "react";

import Favorite from "./Favorite";

const Property = ({ item, data, favProperty, setFavProperty }) => {
  return (
    <>
      <div id="property_box" className={item.city} key={item.id}>
        <div id="image">
          <img src={item.image} alt="" />
        </div>
        <div id="price_heart">
          <p><strong>{item.price}</strong>/month</p>
          <Favorite id={item.id} like={false} item={item} data={data} favProperty={favProperty} setFavProperty={setFavProperty} />
        </div>
        <h3 id="property">{item.PropertName}</h3>
        <p id="adress" >{item.adress}</p>
        <div id="services">
          <p><i className="fa fa-bed"/>{item.bed} Bed</p>
          <p> <i className="fa fa-shower"/>{item.bathroom} Bathroom</p>
          <p> <i className="fa fa-circle-o"/>{item.area} Area</p>
          <p>{item.date}</p>

        </div>
      </div>
    </>
  )
}

export default Property;