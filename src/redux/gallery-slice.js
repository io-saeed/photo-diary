import { createSlice } from "@reduxjs/toolkit";
import unsplash from "../unsplash";
import {
  addPhotosReducer,
  setErrorsReducer,
  getPhotosReducer,
  unMountValuesReducer} from "./gallery-actions";

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
      unMount :unMountValuesReducer
  }

});

export const { getPhotos, addPhotos,setError,unMount } = gallerySlice.actions;
export const selectAllPhotos = state => state.galleryPhotos.photos;
export const selectPage = state=> state.galleryPhotos.page;
export const loadStatus = state=> state.galleryPhotos.loading;

export function fetchGalleryPhotos(page, id){
    return async (dispatch)=>{
          dispatch(getPhotos());
          try{
              const data = await unsplash.topics.getPhotos({ topicIdOrSlug: id, page:page});
              dispatch(addPhotos(data.response.results));
          }catch(error){
              dispatch(setError());
              console.log(error);
        }
      }

}

export default gallerySlice.reducer;
