import React from "react";
import AboutComp from "../components/AboutComp";
import "../assets/css/styles.css"
// import ProfileImageComp from "../components/ProfileImageComp";

function About() {

    return (
                 <div className="row">
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
                                            <AboutComp />
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
    )
}
export default About