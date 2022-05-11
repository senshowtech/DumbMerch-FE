import Navbars from "../../component/Navbar";
import ProfileComponent from "../../component/Profile/ProfileComponent";
const ProfilePage = () => {
  return (
    <div>
      <Navbars final_url="/profile" />
      <ProfileComponent />
    </div>
  );
};

export default ProfilePage;
