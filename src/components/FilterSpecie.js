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
      <label htmlFor="specie">Specie</label>
      <select
        className="select"
        name="specie"
        id="specie"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

export default FilterSpecie;
