import React from 'react'
import Header from './Header'
import Foot from './Foot'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Foot/>
    </>
  )
}

export default Layout