import {useHistory, useParams} from "react-router-dom";
import { useSelector } from "react-redux";

const Modal=()=>{
  let history = useHistory();
  const {id} = useParams()
  const photo = useSelector((state) => state.randomPhotos.photos[id].urls.small);
  return(
  <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image is-4by3">
          <img src={photo} alt=""/>
        </p>
      </div>
  <button class="modal-close is-large" aria-label="close"
    onClick={()=> history.goBack()}
   ></button>
</div>
   )
}


export default Modal;
