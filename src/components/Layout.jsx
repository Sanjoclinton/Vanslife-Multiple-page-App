import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='d-flex flex-column' style={{minHeight: '100vh'}}>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout