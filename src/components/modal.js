import {useHistory, useParams} from "react-router-dom";
import { useSelector } from "react-redux";

const Modal=()=>{
  let history = useHistory();
  const {id} = useParams()
  const photo = useSelector((state) => state.randomPhotos.photos[id].urls.small);
  return(
  <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <p className="image">
          <img className="display-pic" src={photo} alt=""/>
        </p>
      </div>
  <button className="modal-close is-large" aria-label="close"
    onClick={()=> history.goBack()}
   ></button>
</div>
   )
}


export default Modal;
