import React from "react";
import bg_breakfast7 from "../Images/DishCut/1.png";
import bg_breakfast8 from "../Images/DishCut/2.png";
import bg_breakfast9 from "../Images/DishCut/3.png";
import bg_breakfast10 from "../Images/DishCut/4.png";
import bg_breakfast11 from "../Images/DishCut/5.png";
import bg_breakfast1 from "../Images/DishCut/6.png";

const Dinner = () => {
    return(
        <section className="d-none">
            <div className="row d-flex justify-content-center mt-5">
                <h2>Dinner</h2>
                <div className="col-3">
                    <img src={bg_breakfast7} alt=""/>
                    <div>
                        <h5>Beefstack</h5>
                        <button type="button" className="btn btn-outline-danger">$24.99</button>
                    </div>
                </div>
                <div className="col-3">
                    <img src={bg_breakfast8} alt=""/>
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
                    <img src={bg_breakfast10} alt=""/>
                    <div>
                        <h5>Beefstack</h5>
                        <button type="button" className="btn btn-outline-danger">$24.99</button>
                    </div>
                </div>
                <div className="col-3">
                    <img src={bg_breakfast11} alt=""/>
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

export default Dinner;