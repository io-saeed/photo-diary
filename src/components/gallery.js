import { useEffect } from "react";
import { useLocation,useParams, Link } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import FramedPhoto from "./layouts/framed-photo";
import FetchPhotosButton from "./layouts/fetch-photos-button";
import { selectAllCategory } from "../redux/category-slice";
import {
  selectPage,
  selectAllPhotos,
  fetchGalleryPhotos,
  loadStatus, } from "../redux/gallery-slice";


const Gallery =(props)=>{
  return(
    <div className="container mt-3 home gallery">
      {props.children}
    </div>
  )
}

const GridPhotos =({list})=>{
  const location = useLocation();
  const allFramedPhotos =
    list.map((doc,index)=>(
      <FramedPhoto
        caption={doc.alt_description}
        key={index}
        id={index}
        url={doc.urls.small}
        location={location} />));

  return(
    <div className="columns is-multiline">
     {allFramedPhotos}
    </div>
  );

}

const GalleryNav=()=>{
  const topics = useSelector(selectAllCategory);
  console.log(topics);
  return(
    <div className="buttons is-centered"><Link className="button" to="/">Home</Link></div>
  )
}

const GalleryTitle =({caption})=>{
  return(
    <h1 className="title is-1 has-text-centered diary-title">{caption}</h1>
  )
}

const GalleryWithPhotos =()=>{
  const photoDocs = useSelector(selectAllPhotos);
  const page = useSelector(selectPage);
  const fetchStatus = useSelector(loadStatus);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(
    ()=>{
      if(page===1){
        dispatch(fetchGalleryPhotos(page,id))
      }

    },
    [id,page,dispatch]
  );

  return(
    <Gallery>
      <GalleryTitle caption={id} />
      <GalleryNav />

      <GridPhotos list={photoDocs}/>
      <FetchPhotosButton
        page={page}
        id={id}
        dispatch={dispatch}
        fetch={fetchGalleryPhotos}
        progress={fetchStatus} />


    </Gallery>
  )
}

export default GalleryWithPhotos;
