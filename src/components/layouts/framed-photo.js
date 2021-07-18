import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//a framed photo in a the gallery
function FramedPhoto(
    { url,//string
      caption, //string
      id,//number
      location
    }){

  return(
       <div className="column is-4">
            <div className="box">

                <figure className="image cursor">
                  <Link  to={
                        {pathname:`/image/${id}` ,
                         state:{ background: location }
                        }}>
                  <img  src={url} alt="random images"/></Link>
                </figure>
            </div>


        </div>
    )
}

export default FramedPhoto;

//Prop type checking
FramedPhoto.propTypes ={
  url:PropTypes.string.isRequired,
  caption:PropTypes.string,
  id:PropTypes.number.isRequired,
  location:PropTypes.object.isRequired

}
