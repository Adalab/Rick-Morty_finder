import React, { useEffect, useState } from "react";
//import { Route, Switch } from "react-router-dom";
import "../styleshets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import Footer from "./Footer";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [specie, setSpecie] = useState("all");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
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
      // return specie === "all" ? true : character.specie === specie;
    });

  return (
    <>
      <Header />
      <main>
        <Filters handleFilter={handleFilter} />
        <CharacterList characters={filterCharacters} />
      </main>
      <Footer />
    </>
  );
};
export default App;
