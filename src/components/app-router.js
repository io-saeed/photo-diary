import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./layouts/footer"
import LandingPage  from "./pages/index";
import Gallery from "./pages/gallery";


const AppRouter =()=>{
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
      <Footer />
    </Router>
  )
}

export default AppRouter;
