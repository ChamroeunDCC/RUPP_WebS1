import React from "react";
import NavAdmin from "./NavAdmin";

const BookingResquest = () =>{
    return(
      <>
        <NavAdmin></NavAdmin>
        <div className="container mt-5">
          <h2>Booking Requests from clients</h2>
          <nav>
            <ul className="list d-flex">
              <li className="line mt-4">Pending</li>
              <li className="mt-4">Accepted</li>
              <li className="mt-4">Canceled</li>
            </ul>
          </nav>
          <table className="table table-striped table-hover mt-4">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Hall</th>
                <th scope="col">Table</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>B</td>
                <td>1</td>
                <td>11/2/2023</td>
                <td>09:00 AM</td>
                <td>Pending</td>
                <td><i className="fa-solid fa-check me-4"></i> <i className="fa-solid fa-xmark"></i></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>John</td>
                <td>A</td>
                <td>1</td>
                <td>22/05/2023</td>
                <td>08:30 PM</td>
                <td>Pending</td>
                <td><i className="fa-solid fa-check me-4"></i> <i className="fa-solid fa-xmark"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
    </>

    );
}

export default BookingResquest;