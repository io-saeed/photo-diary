import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PhotoGallery from "./features/PhotoGallery";
import { fetchNaturePhotos,selectAllPhotos,selectPage } from "../redux/natureSlice";

const NaturePhotos = () =>{
    const location = useLocation();
    const dispatch = useDispatch();
    const photos  = useSelector(selectAllPhotos);
    const page = useSelector(selectPage);


    useEffect(()=>{
       if(page === 1){
           dispatch(fetchNaturePhotos(4));
       }
    }, [dispatch,page]);
    return(
       <PhotoGallery
            dispatch={dispatch}
            allPhotos ={photos}
            location = {location}
        />
    ) 

}

export default NaturePhotos;
