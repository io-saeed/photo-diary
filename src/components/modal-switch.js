import { Switch, useLocation, Route} from "react-router-dom";
import PhotoGallery from "./photo-gallery";
import { fetchRandomPhotos } from "../redux/randomSlice";
import { fetchNaturePhotos } from "../redux/natureSlice";
import Modal from "./modal";

const ModalSwitch =()=>{
    let location = useLocation();
    let background = location.state && location.state.background;
 
    return(<div>
        <Switch location={ background || location}>
                
            <Route exact path="/" >
                <PhotoGallery 
                location={location}
                 fetch={fetchRandomPhotos}
                /> 
            </Route>
            <Route exact path="/nature" >
                <PhotoGallery 
                fetch={fetchNaturePhotos}
                location={location} /> 
            </Route>  
             
            
        </Switch>
          {background && <Route  path="/image/:id" children={<Modal />} />  }
    </div>
    )

}

export default ModalSwitch;
