import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
export const PatientNavBar = (params) => {
    const user_id = localStorage.getItem('user_id')
    return (
        <div>
        <header class="header">
        <nav class="navbar">
        {/* Logo and Login */}
        <Link to  = {`/Patient/${user_id}`}> Patient Information </Link>
        <Link to = "/login">Login</Link>

{/* Navbar */}
        
        </nav>


        </header>


        <Outlet />
    </div>
    );
}

