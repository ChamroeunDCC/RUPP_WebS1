import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import bg_Private1 from "../Images/Hall/hall1.jpg";
import bg_Private2 from "../Images/Hall/hall2.jpg";
import bg_Private3 from "../Images/Hall/hall3.jpg";
import bg_Private4 from "../Images/Hall/hall4.jpg";
import bg_Private5 from "../Images/Hall/hall5.jpg";
import bg_Private6 from "../Images/Hall/hall6.jpg";
import bg_Private7 from "../Images/Hall/hall7.jpg";

import { Link } from 'react-router-dom';



const Room = () => {
    return( 
        <>
            <Nav></Nav>
            <section className="private-room mt-5 mb-5" id="private">
                <h1>BOOKING PRIVATE ROOM</h1>   
                <div className="row">
                    <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private1})` }}>
                        <div className="card-body d-flex align-items-end">
                            <Link to="/booking"><p className="card-text"><b>Birthday</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p></Link>
                        </div>
                    </div>
                    <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private2})` }}>
                        <div className="card-body d-flex align-items-end">
                            <Link to="/booking"><p className="card-text"><b>Party</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p></Link>
                        </div>
                    </div>
                    <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private3})` }}>
                        <div className="card-body d-flex align-items-end">
                            <Link to="/booking"><p className="card-text"><b>Birthday</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p></Link>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private4})` }}>
                        <div className="card-body d-flex align-items-end">
                            <Link to="/booking"><p className="card-text"><b>Birthday</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p></Link>
                        </div>
                    </div>
                    <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private5})` }}>
                        <div className="card-body d-flex align-items-end">
                            <Link to="/booking"><p className="card-text"><b>Party</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p></Link>
                        </div>
                    </div>
                    <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private6})` }}>
                        <div className="card-body d-flex align-items-end">
                            <Link to="/booking"><p className="card-text"><b>Birthday</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p></Link>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private7})` }}>
                        <div className="card-body d-flex align-items-end">
                            <Link to="/booking"><p className="card-text"><b>Birthday</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p></Link>
                        </div>
                    </div>
                    <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private2})` }}>
                        <div className="card-body d-flex align-items-end">
                            <Link to="/booking"><p className="card-text"><b>Party</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p></Link>
                        </div>
                    </div>
                    <div className="col-4 card private1" style={{ backgroundImage: `url(${bg_Private1})` }}>
                        <div className="card-body d-flex align-items-end">
                            <Link to="/booking"><p className="card-text"><b>Birthday</b><br/><b>300$</b><br/>We have some private dining rooms for our VIP guests who want to dine in a private environment away from our other guests.</p></Link>
                        </div>
                    </div>
                </div>
            </section>
        <Footer></Footer>
        </>
    );
}

export default Room;