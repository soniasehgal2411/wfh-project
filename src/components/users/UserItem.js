import React, { Component } from 'react'

class UserItem extends Component {
    constructor(props) {
        super(props);
        // initialising state
        this.state = {
            name: 'Sonia',
            id: '123456',
            domain: 'React-JS',
        };
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: "center" }}>This is User Info Page</h1>
                <h3>Hi, my name is {this.state.name}</h3>
                <h3>My id is {this.state.id}</h3>
                <h3>My domain is {this.state.domain}</h3>
            </React.Fragment>
        )
    }
}

export default UserItem