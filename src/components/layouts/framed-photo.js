import { Link } from "react-router-dom";

//a framed photo in a the gallery
const FramedPhoto=(
    { url,
      caption,
      id,
      location
    })=>{

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
