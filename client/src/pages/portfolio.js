import React from "react";
import PortfolioList from "../portfolio.json"
import MobileComp from "../components/MobileComp"
import "../assets/css/styles.css"
// import Images from "../components/ImagesComp"

function Portfolio() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row margin-centered">
                                        <div className="col-md-1 whiteBlock">
                                        </div>
                                        <div className="col-md-10 whiteBlock">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <br />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 line">
                                                    <h1 id="h1">Development Portfolio</h1>
                                                </div>
                                            </div>
                                            <div class="row flexWrap">
                                            {PortfolioList.map(list => (
                                                <MobileComp 
                                                src={list.src}
                                                altImg={list.altImg}
                                                href= {list.href}
                                                altHref= {list.altHref}
                                                name={list.name}
                                                // {...list}

                                                />
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-1 whiteBlock">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"><br /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"><br /><br /><br /></div>
        </div>
    )
}

export default Portfolio