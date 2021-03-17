import { 
    Switch, 
    useLocation, 
    Route, 
    Redirect} from "react-router-dom";

import Modal from "./features/Modal";
import Tabs from "./Tabs";
import Search from "./SearchResult";

const ModalSwitch =()=>{
    let location = useLocation();
    let background = location.state && location.state.background;
 
    return(<div>
        <Switch location={ background || location}>
               
            <Redirect exact from="/" to="/category/random"/>
            <Route path="/category" >
                <Tabs />
            </Route>
            <Route path="/search" >
                <Search />
            </Route>    
            
            
        </Switch>
          {background && <Route  path= {`/image/:id`} children={<Modal />} />  }
    </div>
    )

}

export default ModalSwitch;
