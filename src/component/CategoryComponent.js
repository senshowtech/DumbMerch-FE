import { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import "../assets/css/category.css";
const Category = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-center">
      <div className="box-table">
        <h5 className="judul-login">List Category</h5>
        <Table
          striped
          bordered
          hover
          variant="dark"
          responsive
          className="my-4"
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="column-1">1</td>
              <td className="column-2">Mouse</td>
              <td>
                <Button variant="success" className="button-category">
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={handleShow}
                  className="button-category"
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <h3>Delete Data</h3>
            <p>Are you sure you want to delete this data?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Ya
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Tidak
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Category;
