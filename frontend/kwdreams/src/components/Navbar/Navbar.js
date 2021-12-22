import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return(
        <nav id="Navbar_Container">
            <div style={{display: "flex", 
                justifyContent:"center", 
                alignItems: "center",
                color: "whitesmoke"
            }}>
                <h1 id="Navbar_Logo">Kw_Dreams</h1>
            </div>
            <div id="Navbar_Links_Container">
                <h4 id="Navbar_Links">Home</h4>
                <h4 id="Navbar_Links">About</h4>
                <h4 id="Navbar_Links">Buying</h4>
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