import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Login from '../pages/Login';

const AuthRequired = () => {

    const isLoggedIn = false;
  return (
    <>
        {
            isLoggedIn ?  
            <Outlet /> : 
            <Navigate to="/login" />
        }
       
    </>
  )
}

export default AuthRequired