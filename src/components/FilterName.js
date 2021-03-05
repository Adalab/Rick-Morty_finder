import "../styleshets/_filterName.scss";
const FilterName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({ key: "name", value: ev.target.value });
  };
  return (
    <>
      <label htmlFor="search">Search for your character</label>
      <input
        className="input"
        placeholder="e.g. Rick"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </>
  );
};

export default FilterName;
