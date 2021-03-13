import { createSlice } from "@reduxjs/toolkit";
import unsplash from "../unsplash";

const natureSlice = createSlice({
    name:"naturePhotos",
    initialState:{
        photos:[],
        page: 4,
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
            state.loading =false;
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
export const isloading = (state)=> state.naturePhotos.loading;

export function fetchNaturePhotos(page){
    return async (dispatch)=>{
          dispatch(getPhotos());
          try{
              const data = await unsplash.photos.list({page:page});
              dispatch(addPhotos(data.response.results));
          }catch(error){
              dispatch(setErrors());
        }
      }

}

export default natureSlice.reducer;
