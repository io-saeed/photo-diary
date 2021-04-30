import { useEffect } from "react";
import { useLocation,useParams } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import FramedPhoto from "./layouts/framed-photo";
import {selectPage, selectAllPhotos,fetchGalleryPhotos } from "../redux/gallery-slice";

const Gallery =(props)=>{
  return(
    <div className="columns is-multiline">
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
        download={doc.links.download}
        location={location} />));

  return allFramedPhotos;

}
const GalleryWithPhotos =()=>{
  const photoDocs = useSelector(selectAllPhotos);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const {id} = useParams();
  console.log(id);

  useEffect(
    ()=>{
      if(page==1){
        dispatch(fetchGalleryPhotos(page,id))
      }
    },
    [id,page]
  );

  return(
    <Gallery>
      <GridPhotos list={photoDocs}/>
    </Gallery>
  )
}

export default GalleryWithPhotos;
