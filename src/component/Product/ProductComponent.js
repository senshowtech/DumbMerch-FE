import React from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../config/axios";
import "../../assets/css/category.css";

const Product = () => {
  const navigate = useNavigate();

  const [show, setShow] = React.useState(false);
  const [products, setProducts] = React.useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const EditProduct = (id) => {
    navigate("/edit-product", {
      state: {
        id: id,
      },
    });
  };

  React.useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await API.get("/products/0");
        setProducts(response.data.data.products.rows);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return (
    <div className="d-flex justify-content-center">
      <div className="box-table">
        <div className="d-flex justify-content-between">
          <h5 className="judul-login">List Product</h5>
          <Link
            to="/add-product"
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
              <th>Photo</th>
              <th>Product Name</th>
              <th>Product Desc</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td className="align-middle">{value.id}</td>
                  <td className="align-middle">{value.title}</td>
                  <td>
                    <div
                      style={{ width: "80px", height: "100px", margin: "auto" }}
                    >
                      <img src={value.image} className="img-fluid" alt="..." />
                    </div>
                  </td>
                  <td className="align-middle">{`${value.desc.slice(
                    0,
                    70
                  )}...`}</td>
                  <td className="align-middle">
                    {formatter.format(value.price)}
                  </td>
                  <td className="align-middle">{value.qty}</td>
                  <td className="align-middle">
                    <Button
                      onClick={() => EditProduct(value.id)}
                      variant="success"
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

export default Product;
