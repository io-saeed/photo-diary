import { useState } from "react";
import { Link, useHistory} from "react-router-dom";


const NavBar =(props)=>{
 return(
    <nav className="navbar is-white" role="navigation" aria-label="main navigation">
     <div className="container">
        {props.children}
     </div>
    </nav>
    );
}
const NavBarBrand =({logo,navStatus,handleClick})=>{
    return(
        <div className="navbar-brand">

          <Link className="navbar-item" to="/">
            <img src={logo}
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"/>
          </Link>
        </div>

      );
    }

/*const NavBarMenu=({menu, menu_links,navStatus})=>{
    return(
        <div className={"navbar-menu " + navStatus}>
            {menu.map((item,i)=>(<a className="navbar-item" key={i} href={item.url}>item.title</a>))}
        </div>
    )
}*/


const NavBarSearch =()=>{
   const history = useHistory();
   const [query, setQuery] = useState("");
   // const handleChange =(event)=>{
   //     setQuery(event.target.value);
   // }
   
   const path = `/search?photos=${query}`;
   const handleClick=(event)=>{
        history.push(path);

   }

    return(
    <div className="navbar-end"><div className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input name="photos" className="input is-rounded"
                type="text" placeholder="search..." onChange={(e)=>handleChange(e)} />
              </div>
            </div>
   </div></div>
    )
}

const Nav=(props)=>{
   const [navStatus,setStatus] = useState(false);
   const nav_drawer = navStatus ? "is-active":"";
   const handle=()=>{
        setStatus(!navStatus);
   }
    return(
       <NavBar>
           <NavBarBrand logo={props.logo} handleClick={handle} navStatus={nav_drawer}/>
           <NavBarSearch />
       </NavBar>
    )

}

export default Nav;
