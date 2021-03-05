import "../styleshets/_characterDetail.scss";
import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
  return (
    <article className="article">
      <img className="article__img" src={props.character.img} alt="" />
      <h4 className="article__name">{props.character.name}</h4>
      <p className="article__text">{props.character.specie}</p>
      <Link to={`/character/${props.character.id}`}>
        <small className="article__small">+ info</small>
      </Link>
    </article>
  );
};

export default CharacterDetail;
