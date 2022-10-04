import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import About from './BodyElement/About';
import HomeImage from './img/home-img.svg'

function Body() {
    return ( 
        <div>
                
        {/* Home Section */}

        <section class="home" id="home">

            <div class="image">
                <img src={ HomeImage } alt="home-img"/>
            </div>

            <div class="content">
                <h3>stay safe, stay healthy</h3>
                <p>Please note that this is a pain reliever. However, is the problem true? Great, hard work!</p>
                {/* <Link to="/" className="btn">contact us <span class="fas fa-chevron-right"></span> </Link> */}
            </div>

        </section>
        <section class="icons-container">

            <div class="icons">
                <i class="fas fa-user-md"></i>
                <h3>140+</h3>
                <p>doctors at work</p>
            </div>

            <div class="icons">
                <i class="fas fa-users"></i>
                <h3>1040+</h3>
                <p>satisfied patients</p>
            </div>

            <div class="icons">
                <i class="fas fa-procedures"></i>
                <h3>500+</h3>
                <p>bed facility</p>
            </div>
            </section>
            {/* <About></About> */}
            <Outlet></Outlet>
        </div>
     );
}

export default Body;