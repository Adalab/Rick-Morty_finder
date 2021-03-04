import "../styleshets/_filterSpecie.scss";
const FilterSpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "specie",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label htmlFor="specie">Especie</label>
      <select
        className="select"
        name="specie"
        id="specie"
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

export default FilterSpecie;
