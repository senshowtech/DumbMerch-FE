import Navbars from "../../component/Navbar";
import HomePage from "../../component/Home/HomePage";

const HomeUser = () => {
  return (
    <div>
      <Navbars final_url="/user" />
      <HomePage />
    </div>
  );
};

export default HomeUser;
