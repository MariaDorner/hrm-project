import "../styles/ContactInfo.css";
const ContactInfo = function () {
  return (
    <div className="contactinfo-container">
      <h3 className="info-title">Contact Information</h3>
      <div className="info-cl">
        <div className="infolabel-container">
          <h6 className="info-label">Email</h6>
          <h6 className="info-label">Mobile</h6>
          <h6 className="info-label">Location</h6>
          <h6 className="info-label">Address</h6>
        </div>
        <div className="infodetail-container">
          <p className="info-detail">marydoe@exmaple.com</p>
          <p className="info-detail">07966623863</p>
          <p className="info-detail">United Kingdom</p>
          <p className="info-detail">25 Example Street Example City 3432</p>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
