import React from "react";
import bg_breakfast1 from "../Images/DishCut/10.png";
import bg_breakfast2 from "../Images/DishCut/11.png";
import bg_breakfast3 from "../Images/DishCut/12.png";
import bg_breakfast4 from "../Images/DishCut/13.png";
import bg_breakfast5 from "../Images/DishCut/14.png";
import bg_breakfast6 from "../Images/DishCut/15.png";

const Breakfast = () =>{
    return(
        <section>
            <div className="row d-flex justify-content-center mt-5">
                <h2>Breakfast</h2>
                <div className="col-3">
                    <img src={bg_breakfast1} alt=""/>
                        <h5>Beefstack</h5>
                        <button type="button" className="btn btn-outline-danger">$24.99</button>
                
                </div>
                <div className="col-3">
                    <img src={bg_breakfast2} alt=""/>
                    <div>
                        <h5>Beefstack</h5>
                        <button type="button" className="btn btn-outline-danger">$24.99</button>
                    </div>
                </div>
                <div className="col-3">
                    <img src={bg_breakfast3} alt=""/>
                    <div>
                        <h5>Beefstack</h5>
                        <button type="button" className="btn btn-outline-danger">$24.99</button>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-3">
                    <img src={bg_breakfast4} alt=""/>
                    <div>
                        <h5>Beefstack</h5>
                        <button type="button" className="btn btn-outline-danger">$24.99</button>
                    </div>
                </div>
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
            </div>
        </section>
    );
}

export default Breakfast;