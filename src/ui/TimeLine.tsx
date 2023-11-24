import "../styles/TimeLine.css";
const TimeLine = function () {
  return (
    <div className="timeline-container">
      <h3 className="title">Work History</h3>
      <div className="timeline">
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component ">
          <h4 className="timeline__title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h4>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component">
          <h4 className="timeline__title">
            Eius, incidunt voluptas? Dolorem, eos voluptate.
          </h4>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component">
          <h4 className="timeline__title">
            Iusto inventore aut eos quam reprehenderit est error incidunt, id
            exercitationem beatae magni!
          </h4>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component timeline__bottom">
          <h4 className="timeline__title">
            Magnam consectetur iusto rem accusantium tenetur ut assumenda
            temporibus eligendi veritatis praesentium blanditiis quaerat quae.
          </h4>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
