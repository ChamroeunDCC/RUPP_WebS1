import React from "react";
import view_hall1 from "../Images/Hall/hall1.jpg";
import view_hall2 from "../Images/Hall/hall3.jpg";
import view_hall3 from "../Images/Hall/hall2.jpg";
import Nav from "../components/Nav";


const BookingHall = () =>{    return(
        <>
            <Nav></Nav>
            <h2 className="text-center mt-5 mb-5">Booking Hall</h2>
            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                    <div className="slider">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src={view_hall1} className="d-block w-100" alt=""/>
                            </div>
                            <div className="carousel-item">
                                <img src={view_hall2}className="d-block w-100" alt=""/>
                            </div>
                            <div className="carousel-item">
                                <img src={view_hall3} className="d-block w-100" alt=""/>
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
                    <div className="col">
                        <form>
                            <div className="container">
                                <div className="row mt-5">
                                    <div className="mb-3 col-4">
                                        <input style={{ fontSize: 15 }} type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="mb-3 col-4">
                                        <input style={{ fontSize: 15 }} type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="mb-3 col-4">
                                        <input style={{ fontSize: 15 }} type="number" className="form-control" placeholder="Phone Number"/>
                                    </div>                        
                                </div>

                                <div className="row">
                                    <div className="mb-3 col-4">
                                        <input style={{ fontSize: 15 }} type="date" className="form-control" placeholder="Date"/>
                                    </div>
                                    <div className="mb-3 col-4">
                                        <input style={{ fontSize: 15 }} type="time" className="form-control" placeholder="Time"/>
                                    </div>
                                    <div className="mb-3 col-4">
                                        <select style={{ fontSize: 15 }}  class="form-select btn btn-secondary">
                                            <option selected>Table</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>                        
                                </div>
                                <div class="mb-3 col-12">
                                    <textarea class="form-control" rows="10"></textarea>
                                </div>
                                <div className=" d-flex justify-content-end">
                                    <button type="submit" className="btn btn-secondary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>        
        </>
    );
}

export default BookingHall; 