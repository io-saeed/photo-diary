import { 
    Switch, 
    useLocation, 
    Route,
    Redirect} from "react-router-dom";

import Modal from "./features/Modal";
import Tabs from "./Tabs";
import Search from "./SearchResult";

const ModalSwitch =()=>{
    const location = useLocation();
    const background = location.state && location.state.background;
 
    return(
        <div>
            <Switch location={ background || location}>
                <Redirect exact from="/" to="/category/random"/>

                <Route path="/category" >
                    <Tabs />
                </Route>

                <Route path="/search" >
                    <Search />
                </Route>   
            </Switch>
              {console.log(background)}
              {background && <Route  path= {`/image/:id`} children={<Modal path={background.pathname} />} />  }
        </div>
    )

}

export default ModalSwitch;
