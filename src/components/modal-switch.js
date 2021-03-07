import { 
    Switch, 
    useLocation, 
    Route, 
    Redirect,
    useRouteMatch} from "react-router-dom";
import RandomPhotos from "./RandomPhotos";
import NaturePhotos from "./NaturePhotos";
import PeoplePhotos from "./PeoplePhotos";
import Modal from "./features/modal";

const ModalSwitch =()=>{
    let location = useLocation();
    let { category } = useRouteMatch();
    console.log(category);
    let background = location.state && location.state.background;
 
    return(<div>
        <Switch location={ background || location}>
                
            <Route exact path="/" >
                <Redirect to="/category/random"/>
            </Route>
            <Route path="/category/random" >
                <RandomPhotos />
            </Route>  
            <Route path="/category/nature" >
                <NaturePhotos />
            </Route>  
            <Route path="/category/people" >
                <PeoplePhotos />
            </Route>  
             
            
        </Switch>
          {background && <Route  path= {`/image/:id`} children={<Modal />} />  }
    </div>
    )

}

export default ModalSwitch;
