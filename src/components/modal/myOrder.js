import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalOrder() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        <i className="fa-solid fa-cart-shopping"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MyOrder</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form action="" method="post">
                <table className="table table-striped">
                        <thead>
                            <th>Image</th>
                            <th>Name</th> 
                            <th>Price</th>                  
                            <th>Quantity</th>
                        </thead>
                        <tbody>
                            <tr className="table-active">
                                <td>
                                    <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZi46hUxiQ8DDJ2ft29nMYZ1CQ8r-BVoMAMg&usqp=CAU " alt=""/>
                                </td>
                                <td>Fastfood</td>
                                <td>5$</td>
                                <td><i className="fa-solid fa-minus"></i> 1 <i className="fa-solid fa-plus"></i></td>
                                <td><i class="fa-solid fa-trash"></i></td>
                            </tr>
                            <tr className="table-active">
                                <td>
                                    <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1gCi9D06sf_p3_7fBdqQbH0ugVq2euT6UA&usqp=CAU" alt=""/>
                                </td>
                                <td>Fastfood</td>
                                <td>5$</td>
                                <td><i className="fa-solid fa-minus"></i> 1 <i className="fa-solid fa-plus"></i></td>
                                <td><i class="fa-solid fa-trash"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOrder;