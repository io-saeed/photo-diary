import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PhotoGallery from "./layouts/photo-gallery";
import { fetchNaturePhotos,
          selectAllPhotos,
          selectPage,isloading ,removePhoto} from "../redux/nature-slice";
import FetchPhotosButton from "./layouts/fetch-photos-button";

const NaturePhotos = () =>{
    const location = useLocation();
    const dispatch = useDispatch();
    const photos  = useSelector(selectAllPhotos);
    const loading = useSelector(isloading);
    const pageNum = useSelector(selectPage);

    const removeFramedPhoto=(index)=>{
        dispatch(removePhoto(index));
    }

    useEffect(()=>{
       if(pageNum === 4){
           dispatch(fetchNaturePhotos(pageNum));
       }
    }, [dispatch,pageNum]);
    return(
      <div>
       <PhotoGallery
            allPhotos ={photos}
            removePhoto = {removeFramedPhoto}
            location ={location}
        />
        <FetchPhotosButton
            page={pageNum}
            fetch ={fetchNaturePhotos}
            dispatch={dispatch}
            progress={loading}
        />
      </div>
    )

}

export default NaturePhotos;