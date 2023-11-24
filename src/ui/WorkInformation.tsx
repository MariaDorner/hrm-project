import "../styles/WorkInformation.css";
const WorkInformation = function () {
  return (
    <div className="workinfo-container">
      <div className="workinfo-midcontainer">
        <h3 className="info-title">Work Information</h3>
        <div className="workinfo-cl">
          <div className="workdetail1-container">
            <h6 className="info-label">Job Title</h6>
            <p className="info-detail">Senior Example</p>
          </div>
          <div className="workdetail2-container">
            <h6 className="info-label">Status</h6>
            <p className="info-detail active-badge">In Office</p>
            <span className="info-detail">/</span>
            <p className="info-detail inactive-badge">Out of Office</p>
          </div>

          <div className="workdetail3-container">
            <h6 className="info-label">Manager</h6>
            <p className="info-detail">John Doe</p>
          </div>
          <div className="workdetail4-container">
            <h6 className="info-label">Department</h6>
            <p className="info-detail">IT Department</p>
          </div>
        </div>
      </div>
      <div className="worktxt-container">
        <h6 className="info-label">Job Description</h6>
        <p className="infodetail-txt">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
          optio dolore nihil aperiam in magni ab cupiditate quidem blanditiis,
          vitae laborum nam quod deserunt est, illum tempora! Ipsam, ipsum
          eaque!
        </p>
      </div>
    </div>
  );
};
export default WorkInformation;
