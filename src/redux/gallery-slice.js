import { createSlice } from "@reduxjs/toolkit";
import unsplash from "../unsplash";
import {
  addPhotosReducer,
  setErrorsReducer,
  getPhotosReducer } from "./gallery-actions";

const initializeState={
    photos:[],
    page: 1,
    loading:false,
    hasErrors: false,
}

const gallerySlice = createSlice({
  name:"galleryPhotos",
  initialState:initializeState,
  reducers:{
      getPhotos:getPhotosReducer,
      addPhotos:addPhotosReducer,
      setError:setErrorsReducer,
  }

});

export const { getPhotos, addPhotos,setError } = gallerySlice.actions;
export const selectAllPhotos = state => state.galleryPhotos.photos;
export const selectPage = state=> state.galleryPhotos.page;

export function fetchGalleryPhotos(page, id){
    return async (dispatch)=>{
          dispatch(getPhotos());
          try{
              const data = await unsplash.topics.getPhotos({ topicIdOrSlug: id, page:page});
              dispatch(addPhotos(data.response.results));
          }catch(error){
              dispatch(setError());
        }
      }

}

export default gallerySlice.reducer;
