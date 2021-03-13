import { 
    Switch, 
    useLocation, 
    Route, 
    Redirect,
    useRouteMatch} from "react-router-dom";

import Modal from "./features/Modal";
import Tabs from "./Tabs";

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
            <Route path="/category" >
                <Tabs />
            </Route>  
            <Route path="/search" >
                <h1 className="title">seach query goes here</h1>
            </Route>  
            
        </Switch>
          {background && <Route  path= {`/image/:id`} children={<Modal />} />  }
    </div>
    )

}

export default ModalSwitch;
