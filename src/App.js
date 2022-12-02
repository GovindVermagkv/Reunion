import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Reunion from "./components/Reunion";
import Header from "./components/Header";
import FavoritePage from "./components/FavoritePage";

import './App.css'

const App = () => {

  const [favProperty, setFavProperty] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header favProperty={favProperty} setFavProperty={setFavProperty} />}>
          <Route index element={<Reunion favProperty={favProperty} setFavProperty={setFavProperty} />} />
          <Route path="favoritepage" element={<FavoritePage favProperty={favProperty} setFavProperty={setFavProperty} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}
export default App;