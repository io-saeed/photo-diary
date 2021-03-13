import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PhotoGallery from "./features/PhotoGallery";
import { fetchNaturePhotos,selectAllPhotos,selectPage, isloading } from "../redux/natureSlice";
import FetchPhotosButton from "./features/FetchPhotosButton";

const NaturePhotos = () =>{
    const location = useLocation();
    const dispatch = useDispatch();
    const photos  = useSelector(selectAllPhotos);
    const loading = useSelector(isloading);
    const pageNum = useSelector(selectPage);


    useEffect(()=>{
       if(pageNum === 4){
           dispatch(fetchNaturePhotos(pageNum));
       }
    }, [dispatch,pageNum]);
    return(
      <div>
       <PhotoGallery
            dispatch={dispatch}
            allPhotos ={photos}
            location = {location}
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
