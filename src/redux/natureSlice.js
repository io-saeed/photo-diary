import { createSlice } from "@reduxjs/toolkit";
import unsplash from "../unsplash";

const natureSlice = createSlice({
    name:"naturePhotos",
    initialState:{
        photos:[],
        page: 1,
        loading:false,
        hasErrors: false,
    },
    reducers:{
        removePhoto:(state, action)=>{
            state.photos = state.photos.filter((_,index)=>index!==action.payload); // underscore means ignore value
        },
        addPhotos:(state, action)=>{
            state.photos.push(...action.payload);
            state.page += 1;
        },
        getPhotos: state=>{
           state.loading= true;
        },
        setErrors: state=>{
            state.loading=false;
            state.hasErrors= true;
        }

    }


})

export const {removePhoto, addPhotos,getPhotos, setErrors} = natureSlice.actions;
export const selectAllPhotos = state => state.naturePhotos.photos;
export const selectPage = state => state.naturePhotos.page;
export const selectPhoto = (state,index) => state.naturePhotos.photos[index];

export function fetchNaturePhotos(page){
    return async (dispatch)=>{
          dispatch(getPhotos());
          try{
              const data = await unsplash.photos.list({page:4});
              dispatch(addPhotos(data.response.results));
          }catch(error){
              dispatch(setErrors());
        }
      }

}

export default natureSlice.reducer;
