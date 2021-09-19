import "./MainProjectCard.css";
import { Link } from "react-router-dom";

const MainProjectCard = (props) => {
  return (
    <>
      <section id="mainProjects">
        <div className="card">
          <div className="cardImg">
            <img src={props.src} alt={props.title} />
          </div>
          <div className="cardText">
            <h2>{props.title}</h2>
            <p className="stack">{props.stack}</p>
            <p className="description">{props.description}</p>
            {props.site && (
              <a href={props.site} target="_blank">
                <i className="fas fa-globe"></i>
              </a>
            )}
            {props.code && (
              <a href={props.code} target="_blank">
                <i className="fab fa-github"></i>
              </a>
            )}
            {props.linkto && <Link
              to={props.linkto}
              style={{ textDecoration: "underline", paddingRight: "30px" }}
            >
              Project Details
            </Link>}
            {props.linktoALT &&
              <a href={props.linktoALT} style={{ textDecoration: "underline", paddingRight: "30px" }}> Project Details</a>}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainProjectCard;
