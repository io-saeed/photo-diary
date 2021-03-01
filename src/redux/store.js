import { configureStore } from "@reduxjs/toolkit";
import randomReducer from "./randomSlice";

export default configureStore({
    reducer:{
       randomPhotos : randomReducer
    }
});
