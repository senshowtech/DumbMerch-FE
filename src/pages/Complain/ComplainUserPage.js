import Navbars from "../../component/Navbar";
import ComplainUserComponent from "../../component/Complain/ComplainUserComponent";
const ComplainUserPage = () => {
  return (
    <div>
      <Navbars final_url="/complain" />
      <ComplainUserComponent />
    </div>
  );
};

export default ComplainUserPage;
