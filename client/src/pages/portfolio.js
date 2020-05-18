import React from "react";
import Footer from "../components/Footer";
import PortfolioList from "../portfolio.json"
import Navtab from "../components/Navtab";
import Mobile from "../components/Mobile"

function Portfolio() {
    
    return (
        <div>
            <div id="wrap">
                <div id="main" className="clear-top">
                    <div className="row">
                        <Navtab />
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
                                                        <Mobile {...list}
                                                            
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
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio