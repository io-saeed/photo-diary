import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchRandomPhotos,
         selectAllPhotos, 
         selectPage, isloading } from "../redux/randomSlice";
import PhotoGallery from "./features/PhotoGallery";




const loadMorePhotos=(pageNum,dispatch)=>{
    dispatch(fetchRandomPhotos(pageNum));
}


const RandomPhotos =()=>{
    const photos = useSelector(selectAllPhotos)
    const pageNum = useSelector(selectPage);
    const loading = useSelector(isloading);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(()=>{
        if(pageNum === 1){
            dispatch(fetchRandomPhotos(pageNum));
        }
        
    },[dispatch,pageNum])

    return(
       <div>
          <PhotoGallery
            dispatch={dispatch}
            allPhotos ={photos}
            location = {location}
         />
         <div className="buttons is-centered">
          { loading ? 
          (<button className="button is-primary is-loading"></button>) :
           <button  onClick={(e)=> loadMorePhotos(pageNum,dispatch,e)}  className="button is-primary">Load More</button>
          }
        
         </div>
            
       </div>
    )

}

export default RandomPhotos;
