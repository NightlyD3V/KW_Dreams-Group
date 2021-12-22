import React from 'react';
import '../css/Top_Content.css';

function Top_Content(props) {
    return( 
        <div id="Top_Content_Container">
            <div>
                <img id="Hero_Image" src="/images/Hero_Image.jpg"></img>
            </div>
            <div id="Hero_Text_Container">
                <h1 id="Hero_Text">A modern way to buy.</h1>
                <h1 id="Hero_Text">A better way to sell.</h1>
                <div id="Hero_Button_Container">
                    <button id="Hero_Button">RENTALS</button>
                    <button id="Hero_Button">SELLING</button>
                    <button id="Hero_Button">BUYING</button>
                    <button id="Hero_Button">BECOME AN AGENT</button>
                    <button id="Hero_Register_Button">MAKE AN ACCOUNT</button>
                </div>
            </div>
        </div>
    )
}
export default Top_Content;