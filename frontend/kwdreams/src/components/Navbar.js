import React from 'react';
import '../css/Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav id="Navbar_Container">
            <div style={{display: "flex", 
                justifyContent:"center", 
                alignItems: "center",
                color: "whitesmoke"
            }}>
                <h1 id="Navbar_Logo">Kw-Dreams</h1>
            </div>
            <div id="Navbar_Links_Container">
                <Link id="Navbar_Links" to="/">
                    <h4>Home</h4>
                </Link>
                <Link id="Navbar_Links" to="/about">
                    <h4>About</h4>
                </Link>
                <Link id="Navbar_Links" to="/buying">
                    <h4>Buying</h4>
                </Link>
                <h4 id="Navbar_Links">Selling</h4>
                <h4 id="Navbar_Links">Data</h4>
                <button id="Login_Button">
                    <h4 id="Navbar_Login">Login</h4>
                </button>
            </div>
        </nav>
    )
}
export default Navbar;