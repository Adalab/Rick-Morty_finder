import "../styleshets/_characterDetail.scss";
const CharacterDetail = (props) => {
  return (
    <article className="article">
      <img className="article__img" src={props.character.img} alt="" />
      <h4 className="article__name">{props.character.name}</h4>
      <p className="article__text">{props.character.specie}</p>
      {/* <small className="article__small">+ info</small> */}
    </article>
  );
};

export default CharacterDetail;
