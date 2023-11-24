import profile from "./profile.jpg";
const ProfileImage = function () {
  return (
    <img
      src={profile}
      style={{
        display: "inline",
        margin: "0 auto",
        height: "100%",
        width: "auto",
        // borderRadius: "50%",
      }}
    />
  );
};
export default ProfileImage;
