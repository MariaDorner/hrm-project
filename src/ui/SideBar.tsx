import Logo from "../images/Logo";
import "../styles/SideBar.css";

const Sidebar = function () {
  return (
    <>
      <div className="sidebar-container">
        <Logo />
        <nav className="nav">
          <ul className="navlist-container">
            <li className="navlist-i active">Profile</li>
            <li className="navlist-i">Tasks</li>
            <li className="navlist-i">Timeline</li>
            <li className="navlist-i">Contract</li>
            <li className="navlist-i">Feedback</li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Sidebar;
