import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import unsplash from "../unsplash";


//a photo in a the gallery
const Photo=({url})=>{
  return(
       <div className="column is-narrow">
            <div className="box">
            <figure className="image">
              <Link to="/image/som.jpg"><img src={url} alt="random images"/></Link>
            </figure>
            </div>
        </div>
    )
}

//to position each photo
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
const PhotoGallery=({photoUrl})=>{

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
            {photoData.map((photoObj,index)=> <Photo key={photoObj.id} url={photoObj.urls.small} />)}
        </GalleryContainer>
    )
}
export default PhotoGallery;
