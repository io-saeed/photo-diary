import {BrowserRouter as Router} from "react-router-dom";

import NavBar from "./components/Navbar";
import Tabs from "./components/Tabs";
import ModalSwitch from "./components/modal-switch";
import {MENU} from "./utils";




const Body=(props)=>{
    return(
    <div className="">
       {props.children}
   </div>
)
}
const App = (props) =>{
   return(
       <Body>
           <NavBar logo="https://bulma.io/images/bulma-logo.png" menu={MENU}/>
           <Router>
             <Tabs />
             <ModalSwitch  /> { /* to switch  layout route*/}
           </Router> 
       </Body>
    )
}
export default App;
