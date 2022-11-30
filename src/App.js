import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Reunion from "./components/Reunion";
import Header from "./components/Header";
import FevoritePage from "./components/FevoritePage";

import './App.css'

const App = () => {

  const [fevProperty, setfevProperty]=useState([])

return(
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Header fevProperty={fevProperty} setfevProperty={setfevProperty}/>}>
          <Route index element={<Reunion fevProperty={fevProperty} setfevProperty={setfevProperty}  />} />
          <Route path="fevoritepage" element={<FevoritePage fevProperty={fevProperty} setfevProperty={setfevProperty} />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
)

}
export default App;