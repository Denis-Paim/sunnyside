import React from "react";
import imgMilk from "../images/image-gallery-milkbottles.jpg"
import imgCone from "../images/image-gallery-cone.jpg"
import imgSugar from "../images/image-gallery-sugarcubes.jpg"
import imgOrange from "../images/image-gallery-orange.jpg"
import "./pictures.css"

const Pictures = () => {
    return(
        <div className="pictures-container">
            <div>
                <img src={imgMilk} alt="" />
            </div>
            <div>
                <img src={imgOrange} alt="" />
            </div>
            <div>
                <img src={imgCone} alt="" />
            </div >
            <div>
                <img src={imgSugar} alt="" />
            </div>
        </div>
    );
}

export default Pictures;