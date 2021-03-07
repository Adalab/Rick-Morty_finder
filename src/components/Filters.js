import FilterName from "./FilterName";
import FilterSpecie from "./FilterSpecie";
import "../styleshets/_filter.scss";
import PropTypes from "prop-types";

const Filters = (props) => {
  const prevent = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" action="" onSubmit={prevent}>
      <FilterName handleFilter={props.handleFilter} />
      <FilterSpecie handleFilter={props.handleFilter} />
    </form>
  );
};
FilterSpecie.propTypes = {
  handleFilter: PropTypes.func,
};

export default Filters;
