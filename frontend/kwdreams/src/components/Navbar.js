import React from 'react';
import '../css/Navbar.css';
import {Link} from 'react-router-dom';
import gsap from 'gsap';
import { wrapYoyo } from 'gsap/all';

class Navbar extends React.Component {

    componentDidMount() {
        gsap.to("#Navbar_Logo", {duration: 1, x: 25})
    }

    render() {
        return(
            <nav id="Navbar_Container">
                <div style={{display: "flex", 
                    justifyContent:"center", 
                    alignItems: "center",
                    color: "whitesmoke"
                }}>
                    <h1 id="Navbar_Logo">Kw-Dreams.</h1>
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
                    <Link id="Navbar_Links" to="/selling">
                        <h4>Selling</h4>
                    </Link>
                    <Link id="Navbar_Links" to="/credit">
                        <h4>Credit-Repair</h4>
                    </Link>
                    <Link id="Navbar_Links" to="/logistics">
                        <h4>Logistics</h4>
                    </Link>
                    <Link id="Navbar_Links" to="/data">
                        <h4>Data</h4>
                    </Link>
                    <Link id="Navbar_Links" to="/login">
                        <button id="Login_Button">
                            <h4>Login</h4>
                        </button>
                    </Link>
                </div>
            </nav>
        )
    }
}
export default Navbar;