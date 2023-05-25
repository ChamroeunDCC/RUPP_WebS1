import React from "react";

const NavAdmin = () =>{
    return(
        <>
            <header>
                <div className="nav-bar">
                    <div className="logo mt-1">                       
                        <h2>Food.</h2>
                    </div> 

                <div className="order_item ms-5">
                       
                    <button type="button" className="btn btn-outline-secondary me-3"><i className="fa-solid fa-bell p-2 "></i></button>
                    <div className="alert_number position-absolute ms-4 mb-3 text-danger">0</div>

                    </div>
                </div>
            </header>
        </>
    )
}


export default NavAdmin;