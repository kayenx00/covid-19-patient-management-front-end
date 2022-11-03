import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, Outlet } from 'react-router-dom';
function Header(params) {
    const user_id = localStorage.getItem('user_id')
    const setLoginOrLogout = () => {
        if(params.isAuth === false){
        return (
            <Link to= "/login" id="login-button" class="button logout login w-button">Login</Link>
        )}
        else{
            return (
            <Link onClick = {() => handleLogout()} to= "/" id="login-button" class="button logout login w-button">Logout</Link>
            )
        }
    }
    const handleLogout = () => {
        params.setIsLoggedin(false)
        localStorage.clear()
    }
    return ( 
        <div>
            <header class="header">
            {setLoginOrLogout()}
            <nav class="navbar">

            {/* Logo and Login */}
            <Link to  ="/" class="logo"> <i class="fas fa-heartbeat"></i> medcare. </Link>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to  = {`/Patient/${user_id}`}> Patient </Link>
            <Link to  = {`/Doctor/${user_id}`}> Doctor </Link>
            <Link to  = {`/Admin/`}> Nurse </Link>
            <Link to  = {`/Admin/`}> Admin </Link>
            {/* <Link to = "/about">Home</Link> */}
            </nav>

{/* Navbar */}
{/*
            <nav class="navbar">
                <HashLink smooth to="/#">Home</HashLink>
                {/* <HashLink smooth to="/#services">Services</HashLink> */}
{/*                <HashLink smooth to="/#about">About</HashLink>
                <HashLink smooth to="/#contact">Contact</HashLink>
                {/* <HashLink smooth to="/#doctors">Doctor</HashLink> */}
                {/* <HashLink smooth to="/#review">Review</HashLink> */}
                {/* <HashLink smooth to="/#blogs">Blogs</HashLink>
                <HashLink smooth to="/#booking">Booking</HashLink> */}
{/*                            </nav>
*/}

            </header>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Outlet />
        </div>
     );
}

export default Header;