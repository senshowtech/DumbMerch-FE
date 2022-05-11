import Category from "../../component/Category/CategoryComponent";
import Navbars from "../../component/Navbar";

const CategoryPage = () => {
  return (
    <div>
      <Navbars final_url="/category" />
      <Category />
    </div>
  );
};

export default CategoryPage;
