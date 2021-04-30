import {createSlice} from "@reduxjs/toolkit";
import unsplash from "../unsplash";
import {
  removePhotoReducer,
  addPhotosReducer,
  getPhotosReducer,
  setErrorsReducer
} from "./category-actions.js";



const initializeState ={
    photos:[],
    page: 1,
    loading:false,
    hasErrors: false,
}


const categorySlice = createSlice({
    name:"photoCategory",
    initialState:initializeState,
    reducers:{
        removePhoto:removePhotoReducer,
        addPhotos:addPhotosReducer,
        getPhotos: getPhotosReducer,
        setErrors: setErrorsReducer

    }


})

export const {removePhoto, addPhotos,getPhotos, setErrors,setQuery} = categorySlice.actions;
export const selectAllCategory = state => state.photoCategory.photos;
export const selectPage = state => state.photoCategory.page;
export const selectPhoto = (state,index) => state.categorySlice.photos[index];
export const isloading = (state)=> state.categorySlice.loading;
export const getQuery = (state)=> state.searchPhotos.query;

export function fetchPhotoCategories(){
    return async (dispatch)=>{
          console.log("Started");
          dispatch(getPhotos());
          try{
              const data = await unsplash.topics.list({
                page: 1,
                perPage: 9});
                dispatch(addPhotos(data.response.results));
          }catch(error){
              dispatch(setErrors());

        }
      }

}

export default categorySlice.reducer;
