import { configureStore } from "@reduxjs/toolkit";
import randomReducer from "./randomSlice";
import natureReducer from "./natureSlice";

export default configureStore({
    reducer:{
       randomPhotos : randomReducer,
       naturePhotos : natureReducer
    }
});
