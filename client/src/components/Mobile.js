import React from "react";
import portfolio from "../portfolio.json";

function Mobile(props) {
   const eachPortfolio = portfolio.name
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
                        <p className="card-text-edited"> {eachPortfolio}</p>
                    </div>
                </a>
            </div>

    )
}

export default Mobile