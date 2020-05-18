import React from "react";
import PortfolioList from "../portfolio.json"
import MobileComp from "../components/MobileComp"

function Portfolio() {

    return (
        <div>
            <div className="row">
                {/* <NavtabComp /> */}
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
                                            {PortfolioList.map(list => (
                                                <MobileComp {...list}

                                                />
                                            ))}
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
        </div>
    )
}

export default Portfolio