import React from "react";

import Fevorite from "./Fevorite";

import '../App.css'

const FevoritePage = ({ fevProperty, setfevProperty }) => {


  return (
    <>
    <div id="property_container">
      {fevProperty.map(({ image, price, adress, PropertName, bathroom, bed, area, city, id }) => {
        return (
          <>
            <div id="property_box">
              <div id="image">
                <img src={image} alt="" />
              </div>
              <div id="price_heart">
                <p><strong>{price}</strong>/month</p>
                <Fevorite id={id} data={fevProperty} fevProperty={fevProperty} setfevProperty={setfevProperty} />
              </div>
              <h3 id="property">{PropertName}</h3>
              <p id="adress" >{adress}</p>
              <div id="services">
                <p><i className="fa fa-bed"></i>{bed} Bed</p>
                <p> <i className="fa fa-shower"></i>{bathroom} Bathroom</p>
                <p> <i className="fa fa-circle-o"></i>{area} Area</p>

              </div>
            </div>
          </>
        )
      })}
      </div>
    </>
  )
}
export default FevoritePage;