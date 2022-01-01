import React from 'react';
import '../css/Login.css';
import {Link} from 'react-router-dom';
//CSS
const containerStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: '125px',
    width: '50%',
    height: '500px',
    padding: '50px',
    borderRadius: '5px'
}
const buttonStyle = {
    border: "none",
    padding: '10px',
    margin: '10px',
}
const inputStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    padding: '10px',
    border: 'none',
    backgroundColor: 'lightgrey'
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        // STATE //
        this.state = {
            email: '',
            password: '',
        }
    }

    // FUNCTIONS //
    handleChanges = (e) => {
        e.preventDefault(); 
        this.setState({
            ...this.state, 
            [e.target.name] : e.target.value
        })
   }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={containerStyle}>
                    <h4 style={{padding:"20px", fontFamily:"Roboto"}}>LOGIN</h4>
                    <div>
                        <form>
                            <input style={inputStyle}
                                onChange={this.handleChanges}
                                placeholder="Email"
                                name='email'
                                value={this.state.email}
                                required
                                >
                            </input>
                            <br/>
                            <input style={inputStyle}
                                onChange={this.handleChanges}
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                required
                                >    
                            </input>
                            <br/>
                            <button id="Submit_Button" style={buttonStyle}>SUBMIT</button>
                            <Link to="/register">
                                <button id="Register_Button" style={buttonStyle}>REGISTER</button>
                            </Link>
                        </form>
                    </div>
                </div>
                <div style={containerStyle}>
                    <h1 style={{color: 'black', fontFamily:'Roboto', fontSize:'3rem'}}>
                        Localized data with ratings and insights from users just like you.
                        <hr />
                    </h1>
                    <div style={{marginTop: '25px'}}>
                        <h1>
                            Powered by a high performance web server, reverse proxy & the Zillow api. 
                        </h1>
                        <div style={{displayt: 'flex', justifyContent: 'space-between'}}>
                            <img style={{width: '25%'}} src="/images/NGINX.png"/>
                            <img style={{width: '25%'}} src='https://static.djangoproject.com/img/logos/django-logo-positive.svg'/>
                            <img style={{width: '25%'}} src="/images/Gunicorn.png"/>
                            <img style={{width: '25%'}} src="/images/MongoDB.png"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;