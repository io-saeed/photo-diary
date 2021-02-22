import {useState} from "react";

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
          
          <a className="navbar-item" href="/">
            <img src={logo}
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" 
            width="112" 
            height="28"/>
          </a>
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
    return(
    <div className="navbar-end"><div className="navbar-item">
        <div className="field has-addons">
          <div className="control">
            <input className="input rounded" type="text" placeholder="Text input"/>
          </div>
         <p className="control">
            <button className="button">Search</button>
          </p>
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
