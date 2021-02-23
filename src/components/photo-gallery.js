import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import  Modal  from "./modal";
import unsplash from "../unsplash";


//a photo in a the gallery
const FramedPhoto=({url,caption,location})=>{
  return(
       <div className="column is-narrow">
            <div className="box">
            <p className="heading">{ caption }</p>
            <figure className="image">
              <Link to={
                    {pathname:"/image",
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
    console.log(location);
    const [photoData, setPhotoData] = useState([]);
    useEffect(()=>{
      const fetch = async ()=>{
          const data = await unsplash.photos.list({page:6})
          setPhotoData(data.response.results)
      }
      fetch();
      
      
    },[]);
    return(
        <GalleryContainer>
            {photoData.map((photoObj,index)=>(
             <FramedPhoto location={location}
                caption={photoObj.alt_description} 
                key={photoObj.id} 
                url={photoObj.urls.small} 
            />))}
           
        </GalleryContainer>
    )
}
export default PhotoGallery;
