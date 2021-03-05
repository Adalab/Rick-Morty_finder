import "../styleshets/_notFound.scss";
import gif from "../images/noResults.gif";

const NotFound = () => {
  return <img src={gif} alt="Sorry, there is no result" />;
};

export default NotFound;
