import React from "react";
import portfolio from "../portfolio.json";
import "../assets/images/JavaScriptQuiz.JPG"


function MobileComp(props) {
   const portfolioName = portfolio.name
    return (
       
            <div className="card card-margin">
                <img
                    src={props.src}
                    className="card-img-top"
                    alt={props.altImg} />
                <a
                    href={props.href}
                    alt={props.altHref} >
                    <div className="card-body">
                        <p className="card-text-edited"> {portfolio.name}</p>
                    </div>
                </a>
            </div>

    )
}

export default MobileComp