import {useHistory, useParams} from "react-router-dom";
import { useSelector } from "react-redux";
const RANDOM = "/category/random";
const NATURE = "/category/nature";
const PEOPLE = "/category/people";


const selectPhoto =(pathname,id)=>{
    switch(pathname){
       case RANDOM:
         return( (state) => state.randomPhotos.photos[id].urls.regular)


       case NATURE:
         return((state) => state.naturePhotos.photos[id].urls.regular);

       case PEOPLE:
         return ((state) => state.peoplePhotos.photos[id].urls.regular);
        default:

    }


}
const Modal=({path})=>{
  let history = useHistory();
  const id = parseInt(useParams().id)
  const photo = useSelector(selectPhoto(path,id));
  return(
  <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <p className="image">
          <img className="display-pic" src={photo} alt=""/>
        </p>
      </div>
    <button className="modal-close is-large" aria-label="close"
        onClick={()=> history.goBack()}></button>
</div>
   )
}


export default Modal;
