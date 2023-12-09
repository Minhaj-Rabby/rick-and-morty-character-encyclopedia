import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export const FavContext = createContext(null);
const Main = () => {

  const [favchar,setFavChar]=useState([]);
  

  return (
    <div>
      <FavContext.Provider value={[favchar,setFavChar]}>
      <Navbar></Navbar>
        <Outlet></Outlet>
      </FavContext.Provider>
        
    </div>
  )
}

export default Main