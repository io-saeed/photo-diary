import {
    Link, 
    useLocation, 
    Switch,
    Route, useRouteMatch } from "react-router-dom";
import RandomPhotos from "./RandomPhotos";
import NaturePhotos from "./NaturePhotos";
import PeoplePhotos from "./PeoplePhotos";

const RANDOM = "/category/random";
const NATURE = "/category/nature";
const PEOPLE = "/category/people";


const TabSelector =({pathname})=>{
    switch(pathname){
       case RANDOM:
         return {
            selectFirst : "is-active",
            selectSecond :"",
            selectThird :"",    
         }
  
       case NATURE:
         return {
            selectFirst : "",
            selectSecond :"is-active",
            selectThird :"",    
         }
        
       case PEOPLE:
         return {
            selectFirst : "",
            selectSecond :"",
            selectThird :"is-active",    
         }
        default:
            return {
            selectFirst : "is-active",
            selectSecond :"",
            selectThird :"",    
         }
    }
    

}

const TabSwitch = ({path})=>{
    console.log(path);
    return(
    <Switch>
        <Route path={`${path}/random`}>
            <RandomPhotos /></Route>
        <Route path={`${path}/nature`}>
            <NaturePhotos /></Route>
        <Route path={`${path}/people`}>
            <PeoplePhotos /></Route>
    </Switch>
);
}
const Tabs=(props)=>{
    const location = useLocation();
    const {path, url} = useRouteMatch();
   
    const { selectFirst, selectSecond, selectThird } = TabSelector(location);

    
    return(
    <>
    <div className="tabs is-boxed">
      <div className="container">
      <ul>
        <li className={ selectFirst }><Link to={`${url}/random`}>Random</Link></li>
        <li className={ selectSecond }><Link to={`${url}/nature`}>Nature</Link></li>
        <li className={ selectThird }> <Link to={`${url}/people`}>People</Link></li>
      </ul>
      </div>
    </div>
        <TabSwitch path={path} />
    </>       
    );
}
export default Tabs;
