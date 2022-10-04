import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
function Footer() {
    return ( 
        <div>
            <div class = "contact" id = "contact">
            <section class="footer">

            <div class="box-container">

                {/* <div class="box">
                    <h3>quick links</h3>
                    <Link to="/" className="fas fa-chevron-right"> home </Link>
                    <Link to="/" className="fas fa-chevron-right"> services </Link>
                    <Link to="/" className="fas fa-chevron-right"> about </Link>
                    <Link to="/" className="fas fa-chevron-right"> doctors </Link>
                    <Link to="/" className="fas fa-chevron-right"> book </Link>
                    <Link to="/" className="fas fa-chevron-right"> review </Link>
                    <Link to="/" className="fas fa-chevron-right"> blogs </Link>
                </div>

                <div class="box">
                    <h3>our services</h3>
                    <Link to="/" className="fas fa-chevron-right"> dental care </Link>
                    <Link to="/" className="fas fa-chevron-right"> message therapy </Link>
                    <Link to="/" className="fas fa-chevron-right"> cardioloty </Link>
                    <Link to="/" className="fas fa-chevron-right"> diagnosis </Link>
                    <Link to="/" className="fas fa-chevron-right"> ambulance service </Link>

                </div> */}

                <div class="box">
                    <h3>contact info</h3>
                    <Link to="/" className="fas fa-phone"> 0906807226 </Link>
                    <Link to="/" className="fas fa-phone"> +111-222-3333 </Link>
                    <Link to="/" className="fas fa-envelope"> nguyenhlong0910@gmail.com </Link>
                    <Link to="/" className="fas fa-envelope"> nhloan09@gmail.com </Link>
                    <Link to="/" className="fas fa-map-marker-alt"> TP.HCM, Viet Nam </Link>
                </div>

                <div class="box">
                    <h3>follow us</h3>
                    <Link to="/" className="fab fa-facebook-f"> facebook </Link>
                    <Link to="/" className="fab fa-twitter"> twitter </Link>
                    <Link to="/" className="fab fa-instagram"> instagram </Link>
                    <Link to="/" className="fab fa-linkedin"> linkedin </Link>
                    <Link to="/" className="fab fa-pinterest"> pinterest </Link>
                </div>

            </div>

        <div class="credit"> created by <span>mr. HoangLong</span> | all rights reserved </div>

    </section>
    </div>
    <Outlet />
</div>
     );
}

export default Footer;