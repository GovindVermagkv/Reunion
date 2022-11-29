import React from "react";

import Fevorite from "./Fevorite";

import '../App.css'

const FevoritePage=()=>{
    const fevdata=JSON.parse(localStorage.getItem("Fevorite"));


    return(
        <>
           <div id="property_box">
                      <div id="image">
                        <img src={fevdata.image} alt="" />
                      </div>
                      <div id="price_heart">
                        <p><strong>{fevdata.price}</strong>/month</p>
                        <Fevorite />
                      </div>
                      <h3 id="property">{fevdata.PropertName}</h3>
                      <p id="adress" >{fevdata.adress}</p>
                      <div id="services">
                        <p><i className="fa fa-bed"></i>{fevdata.bed} Bed</p>
                        <p> <i className="fa fa-shower"></i>{fevdata.bathroom} Bathroom</p>
                        <p> <i className="fa fa-circle-o"></i>{fevdata.area} Area</p>

                      </div>
                    </div>
        </>
    )
}
export default FevoritePage;