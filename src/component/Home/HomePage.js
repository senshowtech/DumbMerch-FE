import "../../assets/css/home.css";
import CardHome from "./CardHome";
import Paginations from "../Pagination";
import React from "react";
import Select from "react-select";
import { colourStyles } from "../../data/colourStyles";
import { Form, Pagination } from "react-bootstrap";
import { API } from "../../config/axios";

const HomePage = () => {
  const [values, setValues] = React.useState("");
  const [productsAll, setProductsAll] = React.useState([]);
  const [products, setProducts] = React.useState({
    product: null,
    total_page: null,
    current_page: null,
    last_page: null,
    total_data: null,
  });
  const [categories, setCategories] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const getAllProductPagination = async () => {
      try {
        const response = await API.get("/products/" + page);
        setProducts((prevState) => {
          return {
            ...prevState,
            product: response.data.data.products,
            total_page: response.data.data.total_page,
            current_page: response.data.data.current_page,
            last_page: response.data.data.last_page,
            total_data: response.data.data.total_data,
          };
        });
      } catch (error) {
        console.log(error);
      }
    };
    getAllProductPagination();
    const getAllProduct = async () => {
      try {
        const response = await API.get("/products/");
        setProductsAll(response.data.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProduct();
    const getCategories = async () => {
      try {
        const response = await API.get("/categories");
        if (response.status === 201) {
          let data_categories = response.data.data.categories;
          const data_categories_baru = data_categories.map((value) => {
            return {
              value: value.name,
              label: value.name,
            };
          });
          data_categories_baru.unshift({
            value: "",
            label: "Semua Category",
          });
          setCategories(data_categories_baru);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, [page]);

  const ChangePage = (id) => {
    setPage(id);
  };

  let data_search = productsAll?.filter((value) => {
    if (value.categories.length !== 0) {
      for (let index in value.categories) {
        return (
          value.title
            .toLocaleLowerCase()
            .includes(values.toLocaleLowerCase()) ||
          value.categories[index].name
            .toLocaleLowerCase()
            .includes(values.toLocaleLowerCase())
        );
      }
    } else {
      return value.title
        .toLocaleLowerCase()
        .includes(values.toLocaleLowerCase());
    }
  });

  return (
    <div className="container">
      <h5 className="judul-produk">Product</h5>

      <div className="d-flex justify-content-between">
        <Form.Control
          values={values}
          onChange={(e) => setValues(e.target.value)}
          type="text"
          placeholder="Search By Nama Produk"
          className="form-search"
        />
        <div style={{ width: "250px" }}>
          <Select
            defaultValue={{ label: "Semua Category", value: "" }}
            values={values}
            options={categories}
            styles={colourStyles}
            onChange={(e) => setValues(e.value)}
            name="category"
            placeholder="Category"
          />
        </div>
      </div>

      <div className="row">
        {data_search?.length === 0 ? (
          <div>
            <h5
              style={{ color: "white", marginTop: "50px" }}
              className="text-center"
            >
              Data Not Found
            </h5>
          </div>
        ) : data_search?.length !== 0 && values === "" ? (
          products.product.map((value) => {
            return (
              <CardHome
                key={value.id}
                id={value.id}
                nama={value.title}
                harga={value.price}
                stok={value.qty}
                gambar={value.image}
                categories={value.categories}
              />
            );
          })
        ) : (
          data_search?.map((value) => {
            return (
              <CardHome
                key={value.id}
                id={value.id}
                nama={value.title}
                harga={value.price}
                stok={value.qty}
                gambar={value.image}
                categories={value.categories}
              />
            );
          })
        )}
        {data_search?.length !== 0 && values === "" ? (
          <Paginations
            products={products}
            ChangePage={ChangePage}
            page={page}
            Pagination={Pagination}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HomePage;
