import { categoryColumns } from "../utils";

export function removePhotoReducer(state, action){
    state.photos = state.photos.filter((_,index)=>index!==action.payload); // underscore means ignore value
}

export function addPhotosReducer(state, action){
  state.photos.push(...categoryColumns(action.payload));
  state.page += 1;
  state.loading={
    ...state.loading,
    status:false
  }
}

export function getPhotosReducer(state){
   state.loading={
     ...state.loading,
     status:true
   }
}

export function setErrorsReducer(state){
    state.loading={
      status:false,
      hasErrors:true
    }

}
