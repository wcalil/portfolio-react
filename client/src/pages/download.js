import React from "react";
import Resume from "../assets/WilsonCalil_Resume.pdf"

function Download() {
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
                                                <h1 id="h1">Download Resume</h1>
                                            </div>
                                        </div>
                                        <div className="row" style={{ fontSize: "30px", textAlign:"center" }}>
                                            <div className="col-md-12">
                                                <br />
                                                <a
                                                    href={Resume}
                                                    style={{ color: "darkGray"}}
                                                >
                                                    Click here to download Wilson Calil's resume
</a>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
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
            <div className="row"><br /><br /><br /><br /><br /></div>
        </div>

    )
}

export default Download;