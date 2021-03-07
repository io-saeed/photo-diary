import { Link } from "react-router-dom";

import {  removePhoto } from "../../redux/randomSlice";

//a framed photo in a the gallery
const FramedPhoto=(
    { url,
      caption,
      location,
      id, 
      dispatch,
      download
    })=>{
  
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

export default FramedPhoto;
