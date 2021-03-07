import {createSlice} from "@reduxjs/toolkit";
import unsplash from "../unsplash";

const randomSlice = createSlice({
    name:"randomPhotos",
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
            state.loading=false;
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

export const {removePhoto, addPhotos,getPhotos, setErrors} = randomSlice.actions;
export const selectAllPhotos = state => state.randomPhotos.photos;
export const selectPage = state => state.randomPhotos.page;
export const selectPhoto = (state,index) => state.randomPhotos.photos[index];
export const isloading = (state)=> state.randomPhotos.loading;

export function fetchRandomPhotos(page){
    return async (dispatch)=>{
          dispatch(getPhotos());
          try{
              const data = await unsplash.photos.list({page:page})
              dispatch(addPhotos(data.response.results));
          }catch(error){
              dispatch(setErrors());
        }
      }

}

export default randomSlice.reducer;
