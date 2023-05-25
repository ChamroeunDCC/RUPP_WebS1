
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import bg_Home from "../Images/DishCut/4.png"
// import bg_Private1 from "../Images/PrivateRoom/private1.png"
// import bg_Private2 from "../Images/PrivateRoom/private2.png"
// import bg_Private3 from "../Images/PrivateRoom/private3.png"
// import bg_breakfast1 from "../Images/DishCut/2.png"
import view_hall1 from "../Images/Hall/hall1.jpg"
import view_hall2 from "../Images/Hall/hall4.jpg"
import view_hall3 from "../Images/Hall/hall3.jpg"

// import bg_breakfast7 from "../Images/DishCut/6.png"
// import bg_breakfast9 from "../Images/DishCut/8.png"
// import bg_breakfast4 from "../Images/DishCut/3.png"
// import bg_breakfast5 from "../Images/DishCut/4.png"
// import bg_breakfast6 from "../Images/DishCut/10.png"
import MenuHome from '../components/MenuHome';


import { Link } from 'react-router-dom';


const HomePage = () =>{
    return(
        <>     
        <btn_table></btn_table>
            <Nav></Nav>  
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="txt-slide-detail">
                                <h3>WELCOME!
                                    <br/>
                                    JONG NHAM EY?
                                </h3>
                                <p>This is a Popular Food in our Country <br/>
                                Taste never Forget</p>
                            </div>
                            <Link to="/menu"><button type="button" className="btn btn-outline-danger me-2">ViewMenu</button></Link>
                        </div>
                        <div className="col-6 mt-5">
                            <img src={bg_Home} width="90%" alt=""/>
                        </div>
                    </div>  
                </div>
            </section>

            {/* <section className="menu" id="menu">
                <div className="container mt-5">
                    <h1>CHECK OUT OUR MENU</h1>
                    <div className="list-menu mt-5">
                        <p>Breakfast</p>
                        <p>Lunch</p>
                        <p>Dinner</p>
                    </div>           
                </div>

            <section>
                

                
                <div className="row d-flex justify-content-center mt-5">
                    <h2>Breakfast</h2>
                    <div className="col-3">
                        <img src={bg_breakfast1} alt=""/>
                            <h5>Beefstack</h5>
                            <button type="button" className="btn btn-outline-danger">$24.99</button>
                        
                        </div>
                        <div className="col-3">
                            <img src={bg_breakfast4} alt=""/>
                            <div>
                                <h5>Beefstack</h5>
                                <button type="button" className="btn btn-outline-danger">$24.99</button>
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={bg_breakfast9} alt=""/>
                            <div>
                                <h5>Beefstack</h5>
                                <button type="button" className="btn btn-outline-danger">$24.99</button>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-3">
                            <img src={bg_breakfast5} alt=""/>
                            <div>
                                <h5>Beefstack</h5>
                                <button type="button" className="btn btn-outline-danger">$24.99</button>
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={bg_breakfast6} alt=""/>
                            <div>
                                <h5>Beefstack</h5>
                                <button type="button" className="btn btn-outline-danger">$24.99</button>
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={bg_breakfast7} alt=""/>
                            <div>
                                <h5>Beefstack</h5>
                                <button type="button" className="btn btn-outline-danger">$24.99</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section> */}
            <MenuHome></MenuHome>

            <section className="hall mt-5">
                <h1>HALL VIEW</h1>
                <div className="slider container">
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
            </section>

            {/* <section className="private-room mt-5 mb-5">
                <h1>BOOKING PRIVATE ROOM</h1>   
                <div className="row">                  
                        <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private1})` }}>
                            <div className="card-body d-flex align-items-end">
                                <Link to="/booking">
                                    <p className="card-text"><b>Birthday</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private2})` }}>
                            <div className="card-body d-flex align-items-end">
                                <Link to="/booking">
                                    <p className="card-text"><b>Birthday</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private3})` }}>
                            <div className="card-body d-flex align-items-end">
                                <Link to="/booking">
                                    <p className="card-text"><b>Birthday</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p>
                                </Link>
                            </div>
                        </div>

                </div>
            </section> */}

            <section className="contact text-center">
                <h1>Location</h1>
                <div className="map container mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42350.58908432542!2d104.87953183601782!3d11.549819221810512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRUPP%20(Royal%20University%20of%20Phnom%20Penh)!5e0!3m2!1sen!2skh!4v1674487077238!5m2!1sen!2skh"
                    width="1200" 
                    height="490" 
                    style={{border:0}} 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="map"></iframe>
                </div>
            </section>
            <Footer></Footer>
            
        </>

    );
}

export default HomePage;