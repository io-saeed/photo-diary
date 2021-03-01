import {Link} from "react-router-dom";

const Tabs=(props)=>{
    return(
    <div className="tabs is-boxed">
      <div className="container">
      <ul>
        <li className="is-active"><Link to="/">General</Link></li>
        <li><Link to="/nature">Nature</Link></li>
        <li><Link to="/people">People</Link></li>
      </ul>
      </div>
    </div>       
    );
}
export default Tabs;
