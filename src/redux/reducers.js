import { categoryColumns } from "../utils";


export function removePhotoReducer(state, action){
    state.photos = state.photos.filter((_,index)=>index!==action.payload); // underscore means ignore value
}

export function addPhotosReducer(state, action){
  state.photos.push(...categoryColumns(action.payload));
  state.page += 1;
  state.loading=false;
}

export function getPhotosReducer(state){
   state.loading= true;
}

export function setErrorsReducer(state){
    state.loading=false;
    state.hasErrors= true;

}
