import FramedPhoto  from "./framed-photo";


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

const ListAllPhotos=({
  allPhotos,
  removePhoto,
  location })=>(allPhotos.map(
        (photoObj,index)=>(
             <FramedPhoto removeFrame={removePhoto}
                caption={photoObj.alt_description}
                key={index}
                id={index}
                url={photoObj.urls.small}
                download={photoObj.links.download}
                location={location} /> )));


//Photogallery with collection of photos
const PhotoGallery=(props)=>{
    return(
        <Gallery>
            <ListAllPhotos
                allPhotos={props.allPhotos}
                dispatch={props.dispatch}
                location={props.location}
                removePhoto={props.removePhoto} />
        </Gallery>
    )
}
export default PhotoGallery;
