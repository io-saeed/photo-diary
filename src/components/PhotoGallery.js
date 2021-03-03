import FramedPhoto  from "./FramedPhoto";



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
const PhotoGallery=({location, dispatch, allPhotos})=>{
    
    return(
        <GalleryContainer>
          {  allPhotos.map((photoObj,index)=>(
                 <FramedPhoto location={location}
                    caption={photoObj.alt_description} 
                    key={index} 
                    id={index} 
                    url={photoObj.urls.small} 
                    download={photoObj.links.download}
                    dispatch={dispatch} /> )
            )}
           
        </GalleryContainer>
    )
}
export default PhotoGallery;
