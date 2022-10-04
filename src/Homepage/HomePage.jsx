import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
function HomePage() {
    return ( 
        <div>
            {/* <Header></Header> */}
            <Body></Body>
            {/* <Footer></Footer> */}
            <Outlet />
        </div>
     );
}

export default HomePage;