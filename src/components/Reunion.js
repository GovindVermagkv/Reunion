import React, { useEffect, useState } from "react";
import axios from 'axios';

import Fevorite from "./Fevorite";

import '../App.css'


const Reunion = ({fevProperty,setfevProperty}) => {

  const [SearchedData, SetSearchedData] = useState([]);

  const [data, SetData] = useState([]);
  const [query, setquery] = useState("");

  const [item, setItem] = useState([])

  const [price, setprice] = useState({ "lowerlimit": null, "upperlimit": null, })

  const [filter, setfilter] = useState({
    "Location": "",
    "Type": "",
    "date": "",


  })


  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/GovindVermagkv/JSON/main/product_details")
      .then((responce) => {
        SetData(responce.data);
        setItem(responce.data)
        SetSearchedData(responce.data)
      })
  }, [])


  useEffect(() => {
    SetSearchedData(item.filter(user => user.PropertName.toLowerCase().includes(query)))
    SetData(item.filter(user => user.PropertName.toLowerCase().includes(query)))

  }, [query])

  const handleChange = (e) => {
    setfilter({ ...filter, [e.target.name]: e.target.value })


  }
  const handlePriceChange = (e) => {
    setprice({
      lowerlimit: parseInt(e.target.value.split("-")[0]),
      upperlimit: parseInt(e.target.value.split("-")[1])
    })

  }

  const convertToNumber = (number) => {
    return (parseInt(number.split("$")[1].replace(/,/g, "")))
  }




  const filterSearch = () => {

    const FilteredData = SearchedData.filter((result) => {
      if ((filter.Location === "" || result.city === filter.Location) &&
        (filter.Type === "" || result.category === filter.Type) &&
        (((price.lowerlimit === null) || (price.upperlimit === null) || (price.lowerlimit < convertToNumber(result.price))) && (convertToNumber(result.price) < price.upperlimit))) {
        return result;
      }
    })
    SetData(FilteredData)
  }


  return (
    <>
      <div id="main_container">

        <div id="content_container">
          <main>
            <div id="Searchbar">
              <h1>Search Property To Rent</h1>
              <input type={"text"} placeholder="Search" onChange={(e) => setquery(e.target.value)} />
            </div>

            <div id="filter_section">
              <div>
                <p>Location</p>
                <select name="Location" onChange={handleChange}>
                  <option value="All">All</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Noida">noida</option>
                  <option value="Gorakhpur">Gorakhpur</option>
                </select>
              </div>
              <div ><p>when</p><input type={"date"} name="date" onChange={handleChange} /></div>

              <div>
                <p>Price</p>
                <select name="price" onChange={handlePriceChange}>
                  <option value="1200-2600">$1200-2600</option>
                  <option value="2600-3600">$2600-3600</option>
                  <option value="3600-5600">$3600-5600</option>
                  <option value="5700-7700">$5700-7700</option>
                  <option value="7800-9700">$7800-9700</option>
                  <option value="9800-11200">$9800-11200</option>
                </select>
              </div>
              <div>
                <p>Property type</p>
                <select name="Type" onChange={handleChange}>
                  <option value="House">House</option>
                  <option value="flat">Flat</option>
                  <option value="Room">Room</option>
                  <option value="Hotel">Hotel</option>
                </select>
              </div>
              <div>
                <button onClick={filterSearch}>Apply</button>
              </div>
            </div>

            <div id="property_container">

              {data.map(({ image, price, adress, PropertName, bathroom, bed, area, city, id }) => {
                return (
                  <>
                    <div id="property_box" className={city} key={id}>
                      <div id="image">
                        <img src={image} alt="" />
                      </div>
                      <div id="price_heart">
                        <p><strong>{price}</strong>/month</p>
                        <Fevorite id={id} data={data} fevProperty={fevProperty} setfevProperty={setfevProperty} />
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
          </main>
        </div>

      </div>
    </>
  )


}
export default Reunion;