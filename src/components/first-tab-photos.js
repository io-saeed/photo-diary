import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchRandomPhotos,
         selectAllPhotos,
         selectPage, isloading, removePhoto} from "../redux/random-slice";
import PhotoGallery from "./layouts/photo-gallery";
import FetchPhotosButton from "./layouts/fetch-photos-button";


const RandomPhotos =()=>{
    const photos = useSelector(selectAllPhotos)
    const pageNum = useSelector(selectPage);
    const loading = useSelector(isloading);
    const dispatch = useDispatch();
    const location = useLocation();

    const removeFramedPhoto=(index)=>{
        dispatch(removePhoto(index));
    }

    useEffect(()=>{
        if(pageNum === 1){
            dispatch(fetchRandomPhotos(pageNum));
        }

    },[dispatch,pageNum])

    return(
       <div>
          <PhotoGallery
            allPhotos ={photos}
            removePhoto = {removeFramedPhoto}
            location ={location}
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
