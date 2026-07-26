import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import  {FavoriteProvider } from './Context/FavoriteContext'
function Layout() {
  return (
    <>
      <FavoriteProvider>
        <Navbar/>
        <Outlet/> 
        <Footer/>
      </FavoriteProvider>
    </>
  )
}
export default Layout