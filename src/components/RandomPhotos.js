import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchRandomPhotos,
         selectAllPhotos, 
         selectPage } from "../redux/randomSlice";
import PhotoGallery from "./PhotoGallery"




const RandomPhotos =()=>{
    const photos = useSelector(selectAllPhotos)
    const pageNum = useSelector(selectPage);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(()=>{
        dispatch(fetchRandomPhotos(pageNum));
        
    },[dispatch])

    return(
       <div>
          <PhotoGallery
            dispatch={dispatch}
            allPhotos ={photos}
            location = {location}
         />
       </div>
    )

}

export default RandomPhotos;
