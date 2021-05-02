import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category-slice";
import galleryPhoto from "./gallery-slice";

export default configureStore({
    reducer:{
      photoCategory: categoryReducer,
      galleryPhotos: galleryPhoto

    }
});
