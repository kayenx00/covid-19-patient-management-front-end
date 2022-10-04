import { Outlet, Link } from "react-router-dom";

import AboutImage from '../img/about-img.svg';

function About(){
    return(
        <div>
            <section class="about" id="about">

                <h1 class="heading"> <span>about</span> us </h1>

                    <div class="row">

                    <div class="image">
                            <img src= {AboutImage} alt="About Image"/>
                        </div>

                    <div class="content">
                        <h3>we take care of your healthy life</h3>
                        <p>It's Pain, It's Advanced, Competitive Adipiscing. We Think Right, There Is No Way Out Of Taking An Older Time And Sin Hate Them Anytime Who Works This Escape, Not Knowing Less.</p>
                        <p>Please note that this is a pain, and it should be done during the Adipisic Competition. Born Is Really Her Snacks And Pleasures And Pleasures From Nothing In Good Time?</p>
                        {/* <Link to="/" className="btn"> learn more <span class="fas fa-chevron-right"></span> </Link> */}
                    </div>

                    </div>

                </section>
        </div>
    )
}

export default About;
