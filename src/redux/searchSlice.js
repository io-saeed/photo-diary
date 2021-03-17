import {createSlice} from "@reduxjs/toolkit";
import unsplash from "../unsplash";

const searchSlice = createSlice({
    name:"searchPhotos",
    initialState:{
        photos:[],
        page: 1,
        query:"",
        loading:false,
        hasErrors: false,
    },
    reducers:{
        removePhoto:(state, action)=>{
            state.photos = state.photos.filter((_,index)=>index!==action.payload); // underscore means ignore value
        },
        addPhotos:(state, action)=>{
            state.photos =action.payload;
            state.page += 1;
            state.loading=false;
        },
        getPhotos: state=>{
           state.loading= true;
            
        },
        setQuery: (state, action)=>{
           state.query= action.payload;
        }
        ,
        setErrors: state=>{
            state.loading=false;
            state.hasErrors= true;
            
        }

    }


})

export const {removePhoto, addPhotos,getPhotos, setErrors,setQuery} = searchSlice.actions;
export const selectAllPhotos = state => state.searchPhotos.photos;
export const selectPage = state => state.searchPhotos.page;
export const selectPhoto = (state,index) => state.searchPhotos.photos[index];
export const isloading = (state)=> state.searchPhotos.loading;
export const getQuery = (state)=> state.searchPhotos.query;

export function fetchSearchPhotos(query="sport"){
    return async (dispatch)=>{
          dispatch(getPhotos());
          try{
              const data = await unsplash.search.getPhotos({query: query});
              dispatch(addPhotos(data.response.results));
          }catch(error){
              dispatch(setErrors());
              
        }
      }

}

export default searchSlice.reducer;
