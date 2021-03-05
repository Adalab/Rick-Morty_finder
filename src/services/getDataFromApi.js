const getDataFromApi = () => {
  return fetch("//rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          specie: character.species,
          gender: character.gender,
          location: character.location.name,
          img: character.image,
          episode: character.episode,
        };
      });
    });
};
export default getDataFromApi;
