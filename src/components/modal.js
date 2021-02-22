import {useHistory} from "react-router-dom";

const Modal=()=>{
  let history = useHistory();
  return(
  <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt=""/>
        </p>
      </div>
  <button class="modal-close is-large" aria-label="close"
    onClick={()=> history.goBack()}
   ></button>
</div>
   )
}


export default Modal;
