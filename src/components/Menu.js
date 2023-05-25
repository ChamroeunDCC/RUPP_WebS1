import React from "react";
import Nav from "../components/Nav";
import bg_breakfast1 from "../Images/DishCut/1.png"
import bg_breakfast2 from "../Images/DishCut/2.png"
import bg_breakfast3 from "../Images/DishCut/3.png"
import bg_breakfast4 from "../Images/DishCut/7.png"
import bg_breakfast5 from "../Images/DishCut/4.png"
import bg_breakfast6 from "../Images/DishCut/10.png"
import bg_breakfast7 from "../Images/DishCut/19.png"
import bg_breakfast8 from "../Images/DishCut/11.png"
import bg_breakfast9 from "../Images/DishCut/12.png"
// import Footer from "./Footer";
import OrderFood from "./modal/orderFood";

const Menu = () =>{
    return(
        <>
            <Nav> </Nav>
            <section className="menu" id="menu">
                <div className="container mt-5">
                    <h1>CHECK OUT OUR MENU</h1>
                    <div className="list-menu mt-5">
                        <p href="#breakfast" id="refbreakfast">Breakfast</p>
                        <p href="#lunch" id="reflunch">Lunch</p>
                        <p href="#dinner" id="refdinner">Dinner</p>
                    </div>           
                </div>

            <section id="breakfast">
                <div className="row d-flex justify-content-center mt-5">
                    <h2>Breakfast</h2>
                    <div className="col-3">
                        <img src={bg_breakfast1} alt=""/>
                            <h5>Beefstack</h5>
                            <OrderFood></OrderFood>
                    
                    </div>
                    <div className="col-3">
                        <img src={bg_breakfast2} alt=""/>
                        <div>
                            <h5>Beefstack</h5>
                            <OrderFood></OrderFood>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={bg_breakfast3} alt=""/>
                        <div>
                            <h5>Beefstack</h5>
                            <OrderFood></OrderFood>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-3">
                        <img src={bg_breakfast4} alt=""/>
                        <div>
                            <h5>Beefstack</h5>
                            <OrderFood></OrderFood>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={bg_breakfast5} alt=""/>
                        <div>
                            <h5>Beefstack</h5>
                            <OrderFood></OrderFood>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={bg_breakfast6} alt=""/>
                        <div className="mb-5">
                            <h5>Beefstack</h5>
                            <OrderFood></OrderFood>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-3">
                        <img src={bg_breakfast7} alt=""/>
                        <div>
                            <h5>Beefstack</h5>
                            <OrderFood></OrderFood>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={bg_breakfast8} alt=""/>
                        <div>
                            <h5>Beefstack</h5>
                            <OrderFood></OrderFood>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={bg_breakfast9} alt=""/>
                        <div className="mb-5">
                            <h5>Beefstack</h5>
                            <OrderFood></OrderFood>
                        </div>
                    </div>
                </div>
            </section>
        </section> 
    </>
   
    );
}

export default Menu;