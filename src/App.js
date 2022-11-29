
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Reunion from "./components/Reunion";
import Header from "./components/Header";
import FevoritePage from "./components/FevoritePage";

import './App.css'

const App = () => {
return(
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Reunion  />} />
          <Route path="fevoritepage" element={<FevoritePage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
)

}
export default App;