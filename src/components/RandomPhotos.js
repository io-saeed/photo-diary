import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchRandomPhotos,
         selectAllPhotos, 
         selectPage, isloading } from "../redux/randomSlice";
import PhotoGallery from "./features/PhotoGallery";
import FetchPhotosButton from "./features/FetchPhotosButton"; 







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
          <FetchPhotosButton 
            page={pageNum}
            fetch ={fetchRandomPhotos}
            dispatch={dispatch}
            progress={loading}
          />
            
       </div>
    )

}

export default RandomPhotos;
