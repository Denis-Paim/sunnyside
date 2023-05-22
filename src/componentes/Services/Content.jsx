import React from "react";
import "./content.css";

const Content = () => {
    return(
        <div className="content-container">

            <div className="content content-one">
                <h2>Transform you brand</h2>
                <p>We are a full-service agency specializing in  helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."</p>
                <a className="learn-one" href="">LEARN MORE</a>
            </div>
            <div className="content-egg">
                
            </div>
            
            <div className="content-cup">
                
            </div>
            <div className="content content-four">
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we´ll bult and extend your brand in digital places.</p>
                <a className="learn-two" href="">LEARN MORE</a>
            </div>
            <div className="text-berries center-content content content-berries">
                <div className="text-fruits">
                <h2>Graphic Design</h2>
                <p>Great design makes you memorable. We deliver art work that underscores your brand message and capture potential client's attention.</p>
            
                </div>
                
            </div>
            <div className="text-orange center-content content content-orange">
                <div className="text-fruits">
                <h2>Photography</h2>
                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                
                </div>
                
            </div>
        </div>
    )
}

export default Content;