import React from "react";
import FormComp from "../components/FormComp"

function Contact() {
    return (

        <div>
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <div className="row" style={{ marginBottom: "2rem" }}>
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
                                                < FormComp />
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

    )
}

export default Contact