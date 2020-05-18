import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavtabComp() {

    const location = useLocation();

    return (
        <div className="row" style={{ marginBottom: '2rem' }}>
            <div className="col-md-12">
                <div className="row margin-centered">
                    <div className="col-md-11 whiteBlock">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Wilson Calil</h2>
                            </div>
                            <div className="col-md-6">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" href="/index.html">
                                        <br />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarTogglerDemo02"
                                        aria-controls="navbarTogglerDemo02" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse menuRight"
                                        id="navbarTogglerDemo02" role="tablist">
                                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                                    About
        </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/portfolio"
                                                    className={location.pathname === "/porfolio" ? "nav-link active" : "navlink"}>
                                                    Portfolio
       </Link>
                                            </li>
                                            <li className="nav-item">
                                                < Link
                                                    to="/contact"
                                                    className={location.pathname === "/contact" ? "nav-link active" : "navlink"}>
                                                    Contact
        </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="../assets/WilsonCalil_Resume.pdf"
                                                    className={location.pathname === "/assets/WlsonCalil_Resume.pdf" ? "nav-link active" : "nav link"}>
                                                    Download
                    </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 whiteBlock">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavtabComp;

