import { configureStore } from "@reduxjs/toolkit";
import randomReducer from "./random-slice";
import natureReducer from "./nature-slice";
import searchReducer from "./search-slice";

export default configureStore({
    reducer:{
       randomPhotos : randomReducer,
       naturePhotos : natureReducer,
       searchPhotos : searchReducer

    }
});
