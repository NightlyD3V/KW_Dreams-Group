import React, {useState} from 'react';

class Data extends React.Component {
    state={
        username: "",
        password: "",
        email: "",
    }

    render() {
        return(
            <div>
                <form>
                    <input></input>
                    <input></input>
                </form>
            </div>
        )
    }
}