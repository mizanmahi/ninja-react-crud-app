import React from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
    return ( 
        <div className="nav">
            <div className="logo">
              <Link to="/"><h2>Posts</h2></Link>  
            </div>
            <ul className="nav-list">
                <li className="nav-list-item"><Link to="/" className="nav-list-link">Home</Link></li>
                <li className="nav-list-item"><Link to="/create" className="nav-list-link">New Post</Link></li>
            </ul>
        </div>
     );
}
 
export default Nav;