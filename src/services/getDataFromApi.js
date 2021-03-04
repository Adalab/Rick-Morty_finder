const getDataFromApi = () => {
  //   return fetch("//rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10")
  return fetch(
    "//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
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
        };
      });
    });
};
export default getDataFromApi;
