import React from "react";
import Footer from "../Footer";
import OrderTable from "../modal/orderTable";
import { Link } from "react-router-dom";
const tableB = () =>{
    return(      
        <>
        <div className="bg-dark text-white" style={{height:`80vh`}}> 
            <div className="text-white"></div>
                <div className="section text-center mt-5 text-white">
                    <h1 className="mb-5">HallB</h1>
                    <div className="table_select mb-lg-5">
                        <h5>Table</h5>
                        <div className="tableStyle check">
                            <input className="mb-2" type="checkbox" name="check"/>
                            <label for="check">All</label>
                        </div>
                    </div>  
                </div>
                <div className="container text-center">
                    <div className="row mt-4 mb-5">
                        <div className="col-4 d-flex justify-content-between">
                            <OrderTable></OrderTable>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-danger">Table2</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-info">Table3</button>
                        </div>
                    </div>
                    <div className="row text-center mt-4 mb-5">
                        <div className="col-4 d-flex justify-content-between">
                            <button type="button" className="btn btn-danger">Table4</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-info">Table5</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-info">Table6</button>
                        </div>
                    </div>
                    <div className="row text-center mt-4 mb-5">
                        <div className="col-4 d-flex justify-content-between">
                            <button type="button" className="btn btn-info">Table7</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-info">Table8</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-info">Table9</button>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col-4 d-flex justify-content-between">
                            <button type="button" className="btn btn-info">Table10</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-info">Table11</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-info">Table12</button>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col-4 d-flex justify-content-between">
                            <button type="button" className="btn btn-info d-none">Table10</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-info d-none">Table11</button>
                        </div>
                        <div className="col-4">
                            <Link to='/Hall'><button type="button" className="btn btn-secondary mt-2">Cancel</button></Link>
                        </div>
                    </div>
                </div>
            </div> 
            <Footer></Footer>
        </>
    )
}

export default tableB;