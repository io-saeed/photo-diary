import {Link, useLocation } from "react-router-dom";
const RANDOM = "/category/random";
const NATURE = "/category/nature";
const PEOPLE = "/category/people";


const selectTab =({pathname})=>{
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

const Tabs=(props)=>{
    const location = useLocation();
    const { selectFirst, selectSecond, selectThird } = selectTab(location);

    
    return(
    <div className="tabs is-boxed">
      <div className="container">
      <ul>
        <li className={ selectFirst }><Link to={RANDOM}>Random</Link></li>
        <li className={ selectSecond }><Link to="/category/nature">Nature</Link></li>
        <li className={ selectThird }> <Link to="/category/people">People</Link></li>
      </ul>
      </div>
    </div>       
    );
}
export default Tabs;