import React from "react";
import imgEmily from "../images/image-emily.jpg";
import imgJennie from "../images/image-jennie.jpg";
import imgThomas from "../images/image-thomas.jpg";
import "./testimonials.css"

const Testimonials = () => {
    return(
        <div className="testimonials-section">
            <h2>CLIENTE TESTIMONIALS</h2>
            <div className="testimonials-container">
            <div>
                <img className="testimonials-img" src={imgEmily} alt="emily" />
                <p className="testimonials-text">We put out trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <h3>Emily P.</h3>
                <p className="testimonial-profession">Marketing Director</p>
            </div>
            <div>
                <img className="testimonials-img" src={imgThomas} alt="thomas" />
                <p className="testimonials-text">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
                <h3>Thomas S.</h3>
                <p className="testimonial-profession">Chief Operating Officer</p>
            </div>
            <div>
                <img className="testimonials-img" src={imgJennie} alt="jennie" />
                <p className="testimonials-text">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <h3>Jennie F.</h3>
                <p className="testimonial-profession">Business Owner</p>
            </div>
            </div>
        </div>
            
            

           
        
    );
}

export default Testimonials;