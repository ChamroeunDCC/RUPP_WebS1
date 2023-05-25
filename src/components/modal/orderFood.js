import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import food1 from '../../Images/DishCut/14.png'

function OrderFood() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        11$
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="text-center">
        <div>
            <img src={ food1 } width="200px" alt=""/>
        </div>
        <h3>Kor Ko</h3>
        <h2 style={{ fontSize:`15px` }}>Quantity</h2>
        <div className="mb-2">
            <button className='me-2'><i class="fa-solid fa-minus"></i></button>
            <b><span>1</span></b>
            <button className='ms-2'><i class="fa-solid fa-plus"></i></button>
        </div>
        <h4 className="mb-2">11$</h4>
    </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OrderNow
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderFood;