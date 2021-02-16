import "./Carous.css";

const Carous = ({ projimg, details }) => {
  return (
    <div>
      <div id="projdetails">
        <p>{details}</p>
      </div>
      <div id="projimg">
        <img src={projimg.default} alt="" />
      </div>
    </div>
  );
};
export default Carous;
