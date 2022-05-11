import Product from "../../component/Product/ProductComponent";
import Navbars from "../../component/Navbar";

const ProductPage = () => {
  return (
    <div>
      <Navbars final_url="/product" />
      <Product />
    </div>
  );
};
export default ProductPage;
