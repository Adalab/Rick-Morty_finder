import "../styleshets/_filterName.scss";
import PropTypes from "prop-types";

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
FilterName.propTypes = {
  handleFilter: PropTypes.func,
};

export default FilterName;
