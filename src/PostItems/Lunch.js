import React from "react";
import bg_breakfast1 from "../Images/Dish.png"

const Lunch = () =>{
    return(
        <section className="d-none">
        <div className="row d-flex justify-content-center mt-5">
            <h2>Lunch</h2>
            <div className="col-3">
                <img src={bg_breakfast1} alt=""/>
                <div>
                    <h5>Beefstack</h5>
                    <button type="button" className="btn btn-outline-danger">$24.99</button>
                </div>
            </div>
            <div className="col-3">
                <img src={bg_breakfast1} alt=""/>
                <div>
                    <h5>Beefstack</h5>
                    <button type="button" className="btn btn-outline-danger">$24.99</button>
                </div>
            </div>
            <div className="col-3">
                <img src={bg_breakfast1} alt=""/>
                <div>
                    <h5>Beefstack</h5>
                    <button type="button" className="btn btn-outline-danger">$24.99</button>
                </div>
            </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-3">
                <img src={bg_breakfast1} alt=""/>
                <div>
                    <h5>Beefstack</h5>
                    <button type="button" className="btn btn-outline-danger">$24.99</button>
                </div>
            </div>
            <div className="col-3">
                <img src={bg_breakfast1} alt=""/>
                <div>
                    <h5>Beefstack</h5>
                    <button type="button" className="btn btn-outline-danger">$24.99</button>
                </div>
            </div>
            <div className="col-3">
                <img src={bg_breakfast1} alt=""/>
                <div>
                    <h5>Beefstack</h5>
                    <button type="button" className="btn btn-outline-danger">$24.99</button>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Lunch;