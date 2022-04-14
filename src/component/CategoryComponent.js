import { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "../assets/css/category.css";
const Category = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditCategory = () => {
    navigate("/edit-category");
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="box-table">
        <div className="d-flex justify-content-between">
          <h5 className="judul-login">List Category</h5>
          <Link
            to="/add-category"
            className="btn btn-primary"
            style={{ width: "100px" }}
          >
            Add
          </Link>
        </div>
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
                <Button
                  variant="success"
                  onClick={EditCategory}
                  className="button-category"
                >
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
