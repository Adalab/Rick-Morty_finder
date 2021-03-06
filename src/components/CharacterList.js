import CharacterDetail from "./CharacterDetail";
import "../styleshets/_characterList.scss";
import NotFound from "./NotFound";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  if (props.characters.length === 0 && props.name !== "") {
    return <NotFound />;
  } else {
    const characterElement = props.characters.map((character) => {
      return (
        <li key={character.id}>
          <CharacterDetail
            character={character}
            img={character.img}
            name={character.name}
            specie={character.specie}
            id={character.id}
          />
        </li>
      );
    });
    return (
      <section>
        <ul className="list">{characterElement}</ul>
      </section>
    );
  }
};

CharacterList.PropTypes = {
  character: PropTypes.string,
  name: PropTypes.string,
  characters: PropTypes.string,
};

export default CharacterList;
