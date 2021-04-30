import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category-slice";
import randomReducer from "./random-slice";
import natureReducer from "./nature-slice";
import searchReducer from "./search-slice";
import galleryPhoto from "./gallery-slice";

export default configureStore({
    reducer:{
      photoCategory: categoryReducer,
      randomPhotos : randomReducer,
      naturePhotos : natureReducer,
      searchPhotos : searchReducer,
      galleryPhotos: galleryPhoto

    }
});
