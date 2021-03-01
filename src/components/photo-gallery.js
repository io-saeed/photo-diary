import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addPhotos,selectAllPhotos } from "../redux/randomSlice";
import unsplash from "../unsplash";


//a framed photo in a the gallery
const FramedPhoto=({url,caption,location, id})=>{
  return(
       <div className="column is-narrow">
            <div className="box">
            <p className="heading">{ caption }</p>
            <figure className="image">
              <Link to={
                    {pathname:`/image/${id}` ,
                     state:{ background: location }                     
                    }}>
              <img src={url} alt="random images"/></Link>
            </figure>
            </div>
            
        
        </div>
    )
}

//to display picuture in columns and row
const GalleryContainer=(props)=>{
  
  return(
    <div className="container">
        <div className="columns  is-multiline">
         {props.children}
        </div>
    </div>
  )

}


//Photogallery with collection of photos
const PhotoGallery=({photoUrl,location})=>{
    const dispatch = useDispatch();
    const allPhotos = useSelector(selectAllPhotos);
    useEffect(()=>{
      const fetch = async ()=>{
          const data = await unsplash.photos.list({page:6})
          dispatch(addPhotos(data.response.results));
      }
      fetch();
 
    },[]);
    return(
        <GalleryContainer>
            {allPhotos.map((photoObj,index)=>(
             <FramedPhoto location={location}
                caption={photoObj.alt_description} 
                key={photoObj.id} 
                id={index} 
                url={photoObj.urls.small} 
            />))}
           
        </GalleryContainer>
    )
}
export default PhotoGallery;
