import LogoutIcon from "../images/LogoutIcon";
import NotificationIcon from "../images/Notification";
import "../styles/MainBar.css";
const MainBar = function () {
  return (
    <>
      <div className="mainbar-container">
        <NotificationIcon />
        <LogoutIcon />
      </div>
    </>
  );
};
export default MainBar;
