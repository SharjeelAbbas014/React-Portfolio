import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./SingleProject.css";
import Carous from "../Carous/Carous";
const SingleProject = ({
  name,
  tech,
  image,
  colors,
  pos,
  id,
  details,
  projimg,
  link,
}) => {
  const [showPorjDet, setShowProj] = useState(0);
  const getStyle = () => {
    return {
      position: "fixed",
    };
  };
  useEffect(() => {
    if (showPorjDet != 0) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showPorjDet]);
  if (pos === "right") {
    return (
      <div
        className={
          "single-project " + (showPorjDet === 0 ? "" : "zoomNow fixed")
        }
      >
        {showPorjDet === 0 ? null : (
          <span id="closeIcon" onClick={() => setShowProj(0)}>
            <AiOutlineCloseCircle />
          </span>
        )}
        <div className="side-proj">
          <h3>{name}</h3>
          <h5>{tech}</h5>
          {showPorjDet === 0 ? null : (
            <Carous details={details} projimg={projimg} />
          )}
          <button
            style={{
              background: `linear-gradient(to top right, ${colors[0]}, ${colors[1]})`,
            }}
            id="showButton"
            onClick={() => setShowProj(id)}
          >
            {showPorjDet === 0 ? (
              "View Project"
            ) : (
              <a id="githublink" href={link} target="_blank">
                <p>View Github</p>
              </a>
            )}
          </button>
        </div>
        <div
          className={
            "proj-img " +
            (pos === "left" ? "left " : " ") +
            (showPorjDet == 0 ? "" : "noRound")
          }
          style={{
            background: `linear-gradient(to top right, ${colors[0]}, ${colors[1]})`,
          }}
        >
          <img src={image.default} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={
          "single-project " + (showPorjDet === 0 ? "" : "zoomNow fixed")
        }
      >
        {showPorjDet === 0 ? null : (
          <span id="closeIcon" onClick={() => setShowProj(0)}>
            <AiOutlineCloseCircle />
          </span>
        )}
        <div
          className={
            "proj-img " +
            (pos === "left" ? "left " : " ") +
            (showPorjDet == 0 ? "" : "noRound")
          }
          style={{
            background: `linear-gradient(to top right, ${colors[0]}, ${colors[1]})`,
          }}
        >
          <img src={image.default} alt="" />
        </div>
        <div className="side-proj">
          <h3>{name}</h3>
          <h5>{tech}</h5>
          {showPorjDet === 0 ? null : (
            <Carous details={details} projimg={projimg} />
          )}
          <button
            id="showButton"
            style={{
              background: `linear-gradient(to top right, ${colors[0]}, ${colors[1]})`,
            }}
            onClick={() => setShowProj(id)}
          >
            {showPorjDet === 0 ? (
              "View Project"
            ) : (
              <a id="githublink" href={link} target="_blank">
                <p>View Github</p>
              </a>
            )}
          </button>
        </div>
      </div>
    );
  }
};
export default SingleProject;
