import "../styles/PersonalInformation.css";
const PersonalInformation = function () {
  return (
    <div className="personalinfo">
      <h3 className="info-title">Personal Information</h3>
      <div className="info-cl">
        <div className="infolabel-container">
          <h6 className="info-label">First name</h6>

          <h6 className="info-label">Last name</h6>
          <h6 className="info-label">Birth Data</h6>
          <h6 className="info-label">Education</h6>
        </div>
        <div className="infodetail-container">
          <p className="info-detail">Mary</p>
          <p className="info-detail">Doe</p>

          <p className="info-detail">04/10/1993</p>

          <p className="info-detail">Master's Degree at Example University</p>
        </div>
      </div>
    </div>
  );
};
export default PersonalInformation;
