import React from "react";
import portfolio from "../../portfolio.json";

function Mobile() {
   const eachPortfolio = portfolio.name
    return (
       
            <div className="card card-margin">
                <img
                    src=""
                    className="card-img-top"
                    altImg="" />
                <a
                    href=""
                    altHref="" >
                    <div className="card-body">
                        <p className="card-text-edited"> {eachPortfolio}</p>
                    </div>
                </a>
            </div>

    )
}

export default Mobile