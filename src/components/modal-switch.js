import {
    Switch,
    useLocation,
    Route,
    Redirect} from "react-router-dom";

import Modal from "./layouts/modal";
import TabSwitch from "./tab-switch";
import Search from "./search-result";

const ModalSwitch =()=>{
    const location = useLocation();
    const background = location.state && location.state.background;

    return(
        <div>
            <Switch location={ background || location}>
                <Redirect exact from="/" to="/category/random"/>

                <Route path="/category" >
                    <TabSwitch />
                </Route>

                <Route path="/search" >
                    <Search />
                </Route>
            </Switch>
              {background && <Route  path= {`/image/:id`} children={<Modal path={background.pathname} />} />  }
        </div>
    )

}

export default ModalSwitch;
