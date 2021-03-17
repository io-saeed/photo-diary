import {BrowserRouter as Router} from "react-router-dom";

import NavBar from "./components/Navbar";
import ModalSwitch from "./components/modal-switch";
import {MENU} from "./utils";




const Body=(props)=>{
    return(
    <div className="m-5">
       {props.children}
   </div>
)
}

const Footer=()=>{
    return(
      <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>All right reserved</strong> by <a href="https://saeed-wahab.github.io">Saeed</a>. The source code is on 
              <a href="http://github.com/saeed-wahab/photo-dairy"> Github</a>. 
            </p>
          </div>
      </footer>)  

}
const App = (props) =>{
   return(
       <>
       <Body>
           <Router>
             <NavBar logo="https://bulma.io/images/bulma-logo.png" menu={MENU}/>
             <ModalSwitch  /> { /* to switch  layout route*/}
           </Router> 
       </Body>
       <Footer />
      </>
    )
}
export default App;
