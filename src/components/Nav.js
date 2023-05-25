import React from "react";
import { Link } from 'react-router-dom';
import ModalOrder from "./modal/myOrder";

const Nav = () =>{
    return(
        <>
            <header>
                <div className="nav-bar">
                    <div className="logo mt-1">                       
                        <Link to="/"><h2>Food.</h2></Link>
                    </div> 
                    <nav>
                        <ul className="d-flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/hall">Hall</Link></li>
                        </ul>
                    </nav>

                <div className="order_item ms-5">
                       
                    <button type="button" className="btn btn-outline-secondary me-3"><i className="fa-solid fa-bell p-2 "></i></button>
                    <div className="alert_number position-absolute ms-4 mb-3 text-danger">0</div>

                        <div className="alart position-relative d-flex justify-center">
                            {/* <Link to=""><button type="button" className="absolute btn btn-outline-secondary d-flex align-center"><i class="fa-solid fa-cart-shopping"></i></button></Link>              
                            <div className="alert_number position-absolute ms-4 mb-3 text-danger">0</div> */}
                            <ModalOrder/>
                            <div className="alert_number position-absolute ms-4 mb-3 text-danger">0</div>
                        </div>
                        <div className="ms-4">
                            <Link to="/"><button type="button" className="booking btn btn-outline-secondary">History</button></Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Nav;