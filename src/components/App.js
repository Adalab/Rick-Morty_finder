import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../styleshets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import Footer from "./Footer";
import CharacterCard from "./CharacterCard";
import NotFound from "./NotFound";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [specie, setSpecie] = useState("all");

  //API
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //FILTERS
  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "specie") {
      setSpecie(inputChange.value);
    }
  };
  const filterCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((character) => {
      if (specie === "all") {
        return true;
      } else {
        return character.specie === specie;
      }
    });

  //Link to character detail
  const chDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === id;
    });

    if (selectCharacter) {
      return <CharacterCard character={selectCharacter} />;
    } else {
      return <NotFound />;
    }
  };

  //main page
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Filters handleFilter={handleFilter} />
            <CharacterList characters={filterCharacters} name={name} />
          </Route>
          <Route path="/character/:id" render={chDetail}></Route>
        </Switch>
      </main>

      <Footer />
    </>
  );
};
export default App;
