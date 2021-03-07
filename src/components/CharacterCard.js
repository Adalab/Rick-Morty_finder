import "../styleshets/_characterCard.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <div className="card">
      <Link to="/" onClick={props.handleReset}>
        <span className="close">
          <i className="fas fa-times"></i>
        </span>
      </Link>
      <article className="detail">
        <img className="detail__img" src={props.img} alt={props.name} />
        <div>
          <h4 className="detail__title">{props.name}</h4>
          <ul className="detail__list">
            <li>Status: {props.status}</li>
            <li>Specie: {props.specie}</li>
            <li>Gender: {props.gender}</li>
            <li>Origin: {props.location}</li>
            <li>Episodes: {props.episodes}</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

CharacterCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  specie: PropTypes.string,
  gender: PropTypes.string,
  location: PropTypes.string,
  episodes: PropTypes.string,
};

export default CharacterCard;
