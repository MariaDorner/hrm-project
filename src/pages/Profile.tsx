import Edit from "../images/Edit";
import ProfileImage from "../images/ProfileImage";
import "../styles/Profile.css";
import ContactInfo from "../ui/ContactInfo";
import PersonalInformation from "../ui/PersonalInformation";
import TimeLine from "../ui/TimeLine";
import WorkInformation from "../ui/WorkInformation";

const Profile = function () {
  return (
    <div className="profile-container">
      <h1 className="profile-title">My Profile</h1>
      <button className="profile-btn">
        <Edit />
        <p>Edit Profile</p>
      </button>
      <ContactInfo />
      <PersonalInformation />
      <WorkInformation />
      <div className="profile-pic">
        <div className="image-container">
          <ProfileImage />
        </div>
        <div className="vertical-line"></div>
        <div className="descp-container">
          <p className="bio-txt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            dolores earum adipisci!
          </p>
        </div>
      </div>

      <TimeLine />
    </div>
  );
};
export default Profile;
