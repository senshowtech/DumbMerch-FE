import ComplainAdmin from "../../component/Complain/ComplainAdmin";
import Navbars from "../../component/Navbar";
const ComplainAdminPage = () => {
  return (
    <div>
      <Navbars final_url="/complain-admin" />
      <ComplainAdmin />
    </div>
  );
};

export default ComplainAdminPage;
