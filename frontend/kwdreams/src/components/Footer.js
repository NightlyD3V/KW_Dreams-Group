import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <footer style={{backgroundColor:"black"}}>
            <h1 style={{
                textSize: "5rem",
                padding: "10px",
                fontStyle: "Roboto",
                textAlign: "center",
                color: "white",
            }}>&copy; 2021 <a id="Footer_Github_Link" href="https://github.com/NightlyD3V">NightlyD3V</a></h1>
        </footer>
    )
}

export default Footer;