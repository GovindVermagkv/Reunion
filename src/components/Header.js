import React from "react";
import { Outlet, Link } from "react-router-dom";

import '../App.css'

const Header=()=>{
    return(
        <>
            <div>
            <header>
          <div id="logo_nav">
            <div id="logo">
              <i className="fa fa-home"></i>
              <p>Reunion</p>
            </div>
            <div id="navbar">
              <ul>
                <li><Link to={"/"}>Rent</Link></li>
                <li>Buy</li>
                <li>Sell</li>
                <li>Manage Property <i className="fa fa-angle-down"></i></li>
                <li>Resources <i className="fa fa-angle-down"></i></li>
              </ul>
            </div>
          </div>

          <div id="credential">
            <button>LogIn</button>
            <button>Sign Up</button>
            <Link to={"fevoritepage"}><i  className="fa fa-heart-o"></i></Link>
          </div>
        </header>

            </div>
            <Outlet />
        </>
    )
}

export default Header;