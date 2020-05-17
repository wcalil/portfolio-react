import React from "react";
import NavTab from "../components/NavTab";
import Footer from "../components/Footer"

function Contact() {
    return (

        <div>
            <div id="wrap">
                <div id="main" className="clear-top">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <div className="row" style="margin-bottom:2rem">
                                    < NavTab />
                                </div>
                            </div>
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
                                                        <h1 id="h1">Contact</h1>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        < Form />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-1 whiteBlock">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12"><br /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    < Footer />
        </div>

    )
}

export default Contact