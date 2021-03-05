import "../styleshets/_header.scss";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Rick and Morty" />
    </header>
  );
};
export default Header;
