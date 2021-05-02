import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage  from "./components/index";
import Gallery from "./components/gallery";


const App =()=>{
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/category/:id">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;





// import {BrowserRouter as Router} from "react-router-dom";
// import NavBar from "./components/layouts/navbar";
// import ModalSwitch from "./components/modal-switch";
//
//
//
//
// const Body=(props)=>{
//     return(
//     <div className="m-5">
//        {props.children}
//    </div>
// )
// }
//
// const Footer=()=>{
//     return(
//       <footer className="footer">
//           <div className="content has-text-centered">
//             <p>
//               <strong>All right reserved</strong> by <a href="https://saeed-wahab.github.io">Saeed</a>. The source code is on
//               <a href="http://github.com/saeed-wahab/photo-dairy"> Github</a>.
//             </p>
//           </div>
//       </footer>)
//
// }
// const App = (props) =>{
//    return(
//        <>
//        <Body>
//            <Router>
//              <NavBar logo="https://bulma.io/images/bulma-logo.png" />
//              <ModalSwitch  /> { /* to switch  layout route*/}
//            </Router>
//        </Body>
//        <Footer />
//       </>
//     )
// }

// export default App;
