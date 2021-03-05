import "../styleshets/_characterCard.scss";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div className="card">
      <Link to="/">
        <span className="close">X</span>
      </Link>
      <article className="detail">
        <img
          className="detail__img"
          src={props.character.img}
          alt={props.character.name}
        />
        <div>
          <h4 className="detail__title">{props.character.name}</h4>
          <p>Status: {props.character.status}</p>
          <p>Specie: {props.character.specie}</p>
          <p>Gender: {props.character.gender}</p>
          <p>Origin: {props.character.location}</p>
          <p>Episodes: {props.character.episodes}</p>
        </div>
      </article>
    </div>
  );
};

export default CharacterCard;
