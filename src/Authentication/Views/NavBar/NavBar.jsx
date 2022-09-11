import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function NavBar(params) {
    const navigate = new useNavigate();
    console.log(params.isAuth);
    const handleLogout=() =>{
        params.setIsLoggedin(false);
        localStorage.clear();
        navigate('/');
    }

    if(params.isAuth === false)
    {
        return ( 
            <div>
            
            </div>
     );}
    else {
        return (
            <div>
                <button onClick={handleLogout}>
                    Log out
                </button>
            </div>
        )
}}

export default NavBar;