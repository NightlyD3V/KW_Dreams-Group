import React from 'react';

//CSS
const containerStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "lightskyblue",
    marginTop: '300px',
    width: '80%',
    padding: '50px'
}
const buttonStyle = {
    border: "none",
    padding: '10px',
    margin: '10px',
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={containerStyle}>
                    <h1 style={{fontSize: '4rem', fontFamily: 'Yesteryear, cursive', color:'whitesmoke'}}>Kw-Dreams</h1>
                    <h4 style={{padding:"20px"}}>Login</h4>
                    <div>
                        <form>
                            <input placeholder="Username"></input>
                            <br/>
                            <input placeholder="Password"></input>
                        </form>
                        <button id="Submit_Button" style={buttonStyle}>SUBMIT</button>
                        <button id="Register_Button" style={buttonStyle}>REGISTER</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;