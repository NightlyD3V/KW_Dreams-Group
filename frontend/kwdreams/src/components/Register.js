import React from 'react';
import { render } from 'react-dom';

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
            <div style={{position: 'relative', top: '200px', textAlign: 'center'}}>
                <h1 style={{fontFamily: 'Roboto', fontSize: '2rem'}}>REGISTER</h1>
                <form>
                    <input></input>
                    <input></input>
                </form>
            </div>
        )
    }
}

export default Register;