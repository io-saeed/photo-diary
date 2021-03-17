import { configureStore } from "@reduxjs/toolkit";
import randomReducer from "./randomSlice";
import natureReducer from "./natureSlice";
import searchReducer from "./searchSlice";

export default configureStore({
    reducer:{
       randomPhotos : randomReducer,
       naturePhotos : natureReducer,
       searchPhotos : searchReducer

    }
});
