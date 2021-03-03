import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchRandomPhotos,selectAllPhotos, removePhoto , selectPage} from "../redux/randomSlice";



//a framed photo in a the gallery
const FramedPhoto=(
    { url,
      caption,
      location,
      id, 
      dispatch,
      download
    })=>{
  console.log(id);
  const remove=(index,_)=>{
   dispatch(removePhoto(index));
  } 

  return(
       <div className="column is-narrow">
            <div className="box">
               <div className="relative">
                <i onClick={(e)=>remove(id,e)} className="delete"></i> 
                <a className="button is-small is-outlined top-right" href={download}>Download</a>    
               </div>
               
               <p className="heading">{ caption }</p>
                
            <figure className="image cursor">
              
              <Link  to={
                    {pathname:`/image/${id}` ,
                     state:{ background: location }                     
                    }}>
              <img  src={url} alt="random images"/></Link>
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
const PhotoGallery=({photoUrl,location, fetch})=>{
    const dispatch = useDispatch();
    const allPhotos = useSelector(selectAllPhotos);
    const page = useSelector(selectPage);
    useEffect(()=>{
      dispatch(fetch(page));
 
    },[dispatch]);

    return(
        <GalleryContainer>
            {allPhotos.map((photoObj,index)=>(
             <FramedPhoto location={location}
                caption={photoObj.alt_description} 
                key={index} 
                id={index} 
                url={photoObj.urls.small} 
                download={photoObj.links.download}
                dispatch={dispatch} />  ))
            }
           
        </GalleryContainer>
    )
}
export default PhotoGallery;
