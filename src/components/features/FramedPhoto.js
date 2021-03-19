import { Link } from "react-router-dom";
import {  removePhoto as removeRandomPhotos } from "../../redux/randomSlice";
import {  removePhoto as removeNaturePhotos } from "../../redux/natureSlice";


// select photo remove base on path 
const selectPhoto =(index, {pathname} ,dispatch)=>{
    switch(pathname){
        case "/category/random":
                dispatch(removeRandomPhotos(index));
        break;
         case "/category/nature":
                dispatch(removeNaturePhotos(index));
        break;
        default:
                dispatch(removeRandomPhotos(index)); 
    }
}

//a framed photo in a the gallery
const FramedPhoto=(
    { url,
      caption,
      location,
      id, 
      dispatch,
      download
    })=>{
    
  const removePhoto=(index,_)=>{
        selectPhoto(index, location,dispatch);
  } 

  return(
       <div className="column is-narrow">
            <div className="box">
               <div className="relative">
                <i onClick={(e)=>removePhoto(id,e)} className="delete"></i> 
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

export default FramedPhoto;
