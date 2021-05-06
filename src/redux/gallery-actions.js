
export function addPhotosReducer(state, action){
    state.photos.push(...action.payload);
    state.page += 1;
    state.loading ={
      status:false,
      hasErrors:false
    };
}

export function getPhotosReducer(state){
   state.loading={
     status:true,
     hasErrors:false
   }
}

export function setErrorsReducer(state){
    state.loading={
      status:false,
      hasErrors:true
    }

}
export function unMountValuesReducer(state){
   state.photos =[];
   state.page =1;
   state.loading=false;
   state.hasErrors=false;
}
