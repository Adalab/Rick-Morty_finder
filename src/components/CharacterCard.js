//import "../styleshets/_characterCard.scss";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  if (props.character === undefined) {
    return (
      <>
        <Link to="/">
          <span>X</span>
        </Link>
        <h1>Personaje no encontrado</h1>
      </>
    );
  } else {
    return (
      <>
        <Link to="/">
          <span>X</span>
        </Link>
        <article>
          <img src={props.character.img} alt="" />
          <h4>{props.character.name}</h4>
          <p>{props.character.specie}</p>
        </article>
      </>
    );
  }
};

export default CharacterCard;
