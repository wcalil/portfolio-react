import React from "react";
import Navtab from "../components/Navtab";
import Footer from "../components/Footer";

function About() {

    return (
        <div id="wrap">
            <div id="main" className="clear-top">
                <div className="row">
                <Navtab />
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
                                                <h1 id="h1">About Me</h1>
                                            </div>
                                        </div>
                                        <div className="row flexWrap">
                                            <div className="col-md-12"></div>
                                            <About />
                                        </div>
                                    </div>
                                    <div className="col-md-1 whiteBlock">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12"><br /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About