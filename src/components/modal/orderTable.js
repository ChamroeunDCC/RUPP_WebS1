import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function OrderTable() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Table1
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill your information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
              <div className="container">
                  <div className="row mt-5">
                      <div className="mb-3 col-4">
                          <input style={{ fontSize: 15 }} type="text" className="form-control" placeholder="Name"/>
                      </div>
                      <div className="mb-3 col-4">
                          <input style={{ fontSize: 15 }} type="tel" className="form-control" placeholder="Phone"/>
                      </div>
                      <div className="mb-3 col-4">
                          <select style={{ fontSize: 15 }}  class="form-select btn btn-secondary">
                              <option selected>Hall</option>
                              <option value="1">A</option>
                              <option value="2">B</option>
                              <option value="3">C</option>
                          </select>
                      </div>                                   
                  </div>

                  <div className="row">
                      <div className="mb-3 col-4">
                          <input style={{ fontSize: 15 }} type="date" className="form-control" placeholder="Date"/>
                      </div>
                      <div className="mb-3 col-4">
                          <input style={{ fontSize: 15 }} type="time" className="form-control" placeholder="Time"/>
                      </div>
                      <div className="mb-3 col-4">
                          <select style={{ fontSize: 15 }}  class="form-select btn btn-secondary">
                              <option selected>Table</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="1">4</option>
                              <option value="2">5</option>
                              <option value="3">6</option>
                              <option value="1">7</option>
                              <option value="2">8</option>
                              <option value="3">9</option>
                              <option value="1">10</option>
                              <option value="2">11</option>
                              <option value="3">12</option>
                          </select>
                      </div>                        
                  </div>
                  <div class="mb-3 col-12">
                      <textarea class="form-control" rows="10"></textarea>
                  </div>
              </div>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Link className='btn btn-primary' to='/'>Booking Now</Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderTable;