import React from "react";
import ProfileImage from "../assets/images/Wilson-Calil.jpg"


function ProfileImageComp() {
    return (
        <img
            src={ProfileImage}
            alt="Wilson-Calil"
            style={{width:"170px", height:"170px", marginRight:"15px"}}
            className="imgWilson"

        />

    )
}

export default ProfileImageComp;

