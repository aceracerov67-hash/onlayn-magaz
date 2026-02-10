import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Layout
