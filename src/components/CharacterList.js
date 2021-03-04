import CharacterDetail from "./CharacterDetail";
import "../styleshets/_characterList.scss";
//import PropTypes from "prop-types";

const CharacterList = (props) => {
  const characterElement = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterDetail character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className="list">{characterElement}</ul>
    </section>
  );
};

export default CharacterList;
