import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Figure=({small,medium,caption,id})=>{
  return(
    <div className="column">
      <figure className="image">
        <Link to={"/category/" + id}>
        <picture>
          <source srcSet={small} media="(max-width:800px)"/>
          <source srcSet={medium} media="(min-width:1901px)"/>
          <img className="topic-image" src={small} alt={caption}/>
        </picture>
        </Link>
        <figcaption className="title has-text-centered pt-2 topic" >{ caption } </figcaption>
      </figure>
    </div>
  );
}

export default Figure;

Figure.propTypes ={
  small:PropTypes.string.isRequired,
  medium:PropTypes.string,
  caption:PropTypes.string,
  id:PropTypes.string.isRequired,
}
