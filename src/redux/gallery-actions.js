
export function addPhotosReducer(state, action){
    state.photos.push(...action.payload);
    state.page += 1;
    state.loading =false;
}

export function getPhotosReducer(state){
   state.loading= true;
}

export function setErrorsReducer(state){
    state.loading=false;
    state.hasErrors= true;
}
