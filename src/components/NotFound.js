import "../styleshets/_notFound.scss";
import gif from "../images/noResults.gif";

const NotFound = () => {
  return (
    <div className="no_results">
      <h3 className="no_results__title">Sorry, there is no result</h3>
      <img className="no_results__img" src={gif} alt="Morty cry gif" />
    </div>
  );
};

export default NotFound;
