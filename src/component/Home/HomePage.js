import "../../assets/css/home.css";
import CardHome from "./CardHome";
import React from "react";
import { Form, Pagination } from "react-bootstrap";
import { API } from "../../config/axios";

const HomePage = () => {
  const [values, setValues] = React.useState("");
  const [products, setProducts] = React.useState({
    product: null,
    total_page: null,
    current_page: null,
    last_page: null,
    total_data: null,
  });
  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState([]);

  React.useEffect(() => {
    const getProduct = async () => {
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
    getProduct();
  }, [page]);

  const Paginations = () => {
    // selalu kurang 3
    let items = [];
    let totalPage = products.total_page;
    let currentPage = products.current_page;
    if (totalPage <= 5) {
      for (let number = 1; number <= totalPage; number++) {
        items.push(number);
      }
    } else if (
      totalPage > 5 &&
      currentPage <= 3 &&
      totalPage - currentPage > 2
    ) {
      items = ["1", "2", "3", "4", "...", totalPage];
    } else if (
      totalPage > 5 &&
      currentPage > 3 &&
      totalPage - currentPage > 2
    ) {
      items = [currentPage - 1, currentPage, currentPage + 1, "...", totalPage];
    } else if (
      totalPage > 5 &&
      currentPage > 3 &&
      totalPage - currentPage <= 2
    ) {
      items = [
        "1",
        "...",
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
        totalPage,
      ];
    }
    let active = page;
    return (
      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.First />
          {items.map((value) => {
            return (
              <Pagination.Item
                key={value}
                active={value === active}
                onClick={() => ChangePage(value)}
              >
                {value}
              </Pagination.Item>
            );
          })}
          <Pagination.Last />
        </Pagination>
      </div>
    );
  };

  const ChangePage = (id) => {
    setPage(id);
  };

  let data_search = products.product?.filter((value) => {
    return value.title.toLocaleLowerCase().includes(values.toLocaleLowerCase());
  });

  return (
    <div className="container">
      <h5 className="judul-produk">Product</h5>
      <Form.Control
        values={values}
        onChange={(e) => setValues(e.target.value)}
        type="text"
        placeholder="Search By Nama Produk"
        className="form-search"
      />
      <div className="row">
        {data_search?.length === 1
          ? products.product?.map((value) => {
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
          : data_search?.map((value) => {
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
            })}
        {Paginations()}
      </div>
    </div>
  );
};

export default HomePage;
