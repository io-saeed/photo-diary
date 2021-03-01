import { Switch, useLocation, Route} from "react-router-dom";
import PhotoGallery from "./photo-gallery";
import Modal from "./modal";

const ModalSwitch =()=>{
    let location = useLocation();
    let background = location.state && location.state.background;
 
    return(<div>
        <Switch location={ background || location}>
                
            <Route exact path="/" >
                <PhotoGallery location={location}/> 
            </Route>
            <Route exact path="/people" >
                <PhotoGallery /> 
            </Route>  
             
            
        </Switch>
          {background && <Route  path="/image/:id" children={<Modal />} />  }
    </div>
    )

}

export default ModalSwitch;
