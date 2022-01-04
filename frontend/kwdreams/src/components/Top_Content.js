import React from 'react';
import '../css/Top_Content.css';
import {Link} from 'react-router-dom';

function Top_Content(props) {
    return( 
        <div id="Top_Content_Container">
            <div>
                <img id="Hero_Image" src="/images/Hero_Image.jpg"></img>
            </div>
            <div id="Hero_Text_Container">
                <p id="Hero_Text">A <em>modern</em> way to buy.</p>
                <h1 id="Hero_Text">A better way to sell.</h1>
                <div id="Hero_Button_Container">
                    <div id="Rent_Sell_Buy">
                        <button id="Hero_Button">RENTALS</button>
                        <button id="Hero_Button">SELLING</button>
                        <button id="Hero_Button">BUYING</button>
                    </div>
                    <button id="Hero_Button">BECOME AN AGENT</button>
                    <Link to="/register">
                        <button id="Hero_Register_Button">MAKE AN ACCOUNT</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Top_Content;