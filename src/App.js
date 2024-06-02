import React from 'react';
import Diary from './components/Diary/Diary';
import { Route, Routes } from "react-router-dom";
import ShopConteiner from './components/ShopConteiner/ShopConteiner'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route 
       exact  
          path="/pruebasubidadepaginagithubpage/listacompras"
          element={<ShopConteiner />}
        /> 
      <Route 
          exact 
          path="/pruebasubidadepaginagithubpage/"
          element={<Diary />}
        /> 
      </Routes>
    </div>
  )
}

export default App;