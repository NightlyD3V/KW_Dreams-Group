import React from 'react';

// CSS -> 
const formContainerStyle = {
    padding: '25px',
    textAlign: 'center',
    backgroundColor: 'lightgrey'
}

const inputStyle = { 
    border: 'none',
    margin: '10px',
    padding: '5px',
    backgroundColor: 'lightgrey',
}

const loginButton = {
    border: 'none',
    backgroundColor: 'darkslateblue',
    color: 'lightgrey',
    padding: '5px',
    width: '100%',
}

const submitButton = {
    border: 'none',
    backgroundColor: 'olive',
    padding: '5px',
    width: '100%',
    marginBottom: '15px'
}

const profileImage = {
    backgroundColor: 'lightgrey',
    border: '1px solid black',
    padding: '100px',
    marginBottom: '25px'
}

//COMPONENT START ->
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profile_picture: {},
            user_name: '',
            email: '',
            password: '',
            location: '',
        }
    }

    render(){
        return (
            <div style={{display: 'flex', paddingTop: '100px', maxWidth: '900px', margin: '0 auto'}}>                
                <div style={formContainerStyle}>
                    <h1 style={{fontFamily: 'Roboto', fontSize: '1rem', padding: '35px'}}>REGISTER</h1>
                    <div style={profileImage}>
                    </div>
                    <form>
                        <input type="file"></input>
                        <h1>Email</h1>
                        <input style={inputStyle} required></input>
                        <h1>User name</h1>
                        <input style={inputStyle} required></input>
                        <h1>Password</h1>
                        <input style={inputStyle} required></input>
                        <br/>
                        <button style={submitButton}>
                            <h1>REGISTER</h1>
                        </button>
                        <button style={loginButton}>
                            <h1>LOGIN</h1>
                        </button>
                    </form>
                </div>
                <div>
                    <p style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '2rem', padding: '25px 3', marginTop: '100px'}}>
                        <hr />
                        Everyone eventually wants to buy, sell or rent a home. 
                        Wouldn't it be better if there was a way to see ratings from 
                        previous owners, get insights into potential issues, and all before 
                        you even take the time to view a property? 
                        <hr />
                    </p>
                    <p>-Someone somewhere</p>
                </div>
            </div>
        )
    }
}

export default Register;