import "../styleshets/_notFound.scss";
import gif from "../images/noResults.gif";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <section className="no_results">
      {/* <Link to={"/"} className="close2" onClick={props.handleReset}>
        <i className="fas fa-times"></i>
      </Link> */}
      <h3 className="no_results__title">Sorry, there is no result</h3>
      <img className="no_results__img" src={gif} alt="Morty cry gif" />
    </section>
  );
};

export default NotFound;
