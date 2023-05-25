import React from "react";
import Nav from "../components/Nav";
import view_hall1 from "../Images/Hall/hall1.jpg";
import view_hall2 from "../Images/Hall/hall2.jpg";
import view_hall3 from "../Images/Hall/hall3.jpg";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import ImgHallA from "./hallManagement/hallA";
import ImgHallB from "./hallManagement/hallB"
import ImgHallC from "./hallManagement/hallC";





const Hall = () => {
    return(
        <>
            <Nav></Nav>
            <section className="hall" style={{height:`80vh`}} id="hall">
                <h1>HALL</h1>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-6">
                
                            <div className="slider">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" >
                                        <Link to="/tableA"><img src={view_hall1} className="d-block w-100" alt=""/></Link>
                                        </div>
                                        <div className="carousel-item">
                                            <Link to="/tableB"><img src={view_hall3} className="d-block w-100" alt=""/></Link>
                                        </div>
                                        <div className="carousel-item">
                                            <Link to="/tableC"><img src={view_hall2} className="d-block w-100" alt=""/></Link>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                            <div className="col-6">
                                <div className="row mb-4 position-relative">
                                    <Link to="/tableA"><ImgHallA/>
                                    <h3 className="text-white position-absolute top-0 start-position-absolute top-50 start-50 translate-middle">HallA</h3>
                                    </Link>
                                    <span className="position-absolute top-0 start-100 translate-middle">12</span>
                                </div>
                            <div className="row mb-4 position-relative">
                            <Link to="/tableB"><ImgHallB/>
                                <h3 className="text-white position-absolute top-0 start-position-absolute top-50 start-50 translate-middle">HallB</h3>
                                </Link>
                                <span className="position-absolute top-0 start-100 translate-middle">12</span>
                            </div>
                            <div className="row mb-4 position-relative">
                            <Link to="/tableC"><ImgHallC/>
                                <h3 className="text-white position-absolute top-0 start-position-absolute top-50 start-50 translate-middle">HallC</h3>
                                </Link>
                                <span className="position-absolute top-0 start-100 translate-middle">12</span>
                            </div>
                        </div>
                    </div>            
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}

export default Hall;