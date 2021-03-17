import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import PhotoGallery from "./features/PhotoGallery";
import {selectAllPhotos, fetchSearchPhotos } from "../redux/searchSlice";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResult =()=>{
   const dispatch = useDispatch();
   const allPhotos = useSelector(selectAllPhotos);
   const location = useLocation();
   const query = useQuery().get("photos");

   useEffect(()=>{
       dispatch(fetchSearchPhotos(query));    

   },[dispatch,query]);

    
    return(
      <div> 
        <div className="container">
            <h1 className="title m-4">Search Result for <code>{query}</code></h1>
        </div>
        <PhotoGallery 
          allPhotos={allPhotos}
          dispatch={dispatch}
          location={location}
        />
      </div>
    );

}

export default SearchResult;
