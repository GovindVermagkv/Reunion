import React, { useEffect, useState } from "react";
import axios from 'axios';

import Property from "./Property";

import '../App.css'


const Reunion = ({ favProperty, setFavProperty }) => {

  const [searchedData, setSearchedData] = useState([]);  //input value result will store 

  const [data, SetData] = useState([]); //initial fetched data
  const [query, setQuery] = useState("");  //input value

  const [item, setItem] = useState([])  

  const [price, setPrice] = useState({ "lowerlimit": null, "upperlimit": null, })

  const [filter, setFilter] = useState({  //will all three state's value store in filter
    "Location": "",
    "Type": "",
    "date": "",


  })


  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/GovindVermagkv/JSON/main/product_details")
      .then((responce) => {
        SetData(responce.data);
        setItem(responce.data)
        setSearchedData(responce.data)
      })
  }, [])  // for data from api


  useEffect(() => {
    setSearchedData(item.filter(user => user.PropertName.toLowerCase().includes(query)))
    SetData(item.filter(user => user.PropertName.toLowerCase().includes(query)))
  }, [query])  // for render searched data
  
  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value })  // will handle the value of location,type & date functionality
  }

  const handlePriceChange = (e) => { // will handle price
    setPrice({
      lowerlimit: parseInt(e.target.value.split("-")[0]), //price will be in [$12,23]
      upperlimit: parseInt(e.target.value.split("-")[1])
    })
  }

  const convertToNumber = (number) => { //will convert [$12-23] to 1223
    return (parseInt(number.split("$")[1].replace(/,/g, "")))
  }





  const filterSearch = () => { //filter function will follow this conditions

    const FilteredData = searchedData.filter((result)=>{
      if((filter.Location==="" || result.city===filter.Location) && 
      (filter.Type==="" || result.category===filter.Type) && 
      (price.lowerlimit ===null || price.upperlimit===null || price.lowerlimit < convertToNumber(result.price) && convertToNumber(result.price) < price.upperlimit) &&
      (filter.date==="" ||result.date<=filter.date)){
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
              <input type={"text"} placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
            </div>

            <div id="filter_section">
              <div>
                <p>Location</p>
                <select name="Location" onChange={handleChange}>
                  <option value="All">All</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Noida">Noida</option>
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

              {data.map((item) => {
                return (
                  <Property key={item.id} item={item} data={data} favProperty={favProperty} setFavProperty={setFavProperty} />
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