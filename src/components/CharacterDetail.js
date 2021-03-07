import "../styleshets/_characterDetail.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  return (
    <article className="article">
      <img className="article__img" src={props.img} alt={props.name} />
      <h4 className="article__name">{props.name}</h4>
      <p className="article__text">{props.specie}</p>
      <Link to={`/character/${props.id}`}>
        <small className="article__small">+ info</small>
      </Link>
    </article>
  );
};

CharacterDetail.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  specie: PropTypes.string,
  id: PropTypes.number,
};

export default CharacterDetail;
