import {BrowserRouter as Router} from "react-router-dom";

import NavBar from "./components/navbar";
import Tabs from "./components/tabs";
import ModalSwitch from "./components/modal-switch";
import {MENU} from "./utils";



const url = [
"https://bulma.io/images/placeholders/256x256.png",
"https://bulma.io/images/placeholders/480x320.png",
"https://bulma.io/images/placeholders/256x256.png",
"https://bulma.io/images/placeholders/480x320.png"
];
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
             <ModalSwitch url={url} />
           </Router> 
       </Body>
    )
}
export default App;
