import FramedPhoto  from "./FramedPhoto";



//to display picuture in columns and row
const Gallery=(props)=>{
  
  return(
    <div className="container mb-5">
        <div className="columns  is-multiline">
         {props.children}
        </div>
    </div>
  )

}

const ListAllPhotos=({allPhotos,dispatch,location})=>{
  const photos = allPhotos.map(
        (photoObj,index)=>(
         <FramedPhoto location={location}
            caption={photoObj.alt_description} 
            key={photoObj.id} 
            id={index} 
            url={photoObj.urls.small} 
            download={photoObj.links.download}
            dispatch={dispatch} /> ));
  return photos;
}

//Photogallery with collection of photos
const PhotoGallery=(props)=>{
    
    return(
        <Gallery>
         <ListAllPhotos 
            allPhotos={props.allPhotos} 
            dispatch={props.dispatch} 
            location={props.location}/>  
        </Gallery>
    )
}
export default PhotoGallery;
