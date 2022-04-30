import React from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../config/axios";
import "../../assets/css/category.css";

const Category = () => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [category, setCategory] = React.useState(null);
  const [idCategory, setidCategory] = React.useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setidCategory(id);
  };

  React.useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await API.get("/categories");
        setCategory(response.data.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, [idCategory]);

  const Delete = async () => {
    try {
      const response = await API.delete("/category/" + idCategory);
      if (response.status === 201) {
        setShow(false);
        setidCategory(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const EditCategory = (id) => {
    navigate("/edit-category", {
      state: {
        id: id,
      },
    });
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
            {category?.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td className="column-1 align-middle">{value.id}</td>
                  <td className="column-2 align-middle">{value.name}</td>
                  <td className="align-middle">
                    <Button
                      variant="success"
                      onClick={() => EditCategory(value.id)}
                      className="button-category"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleShow(value.id)}
                      className="button-category"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <h3>Delete Data</h3>
            <p>Are you sure you want to delete this data?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => Delete()}>
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
