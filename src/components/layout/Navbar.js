import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: "center" }}> This is navbar section</h1>
                <nav className="navbar bg-dark">
                    {/* passing props */}
                    <h2>{this.props.topic} Navbar Heading</h2>
                    <button className="btn btn-secondary" type="submit">SUBMIT</button>
                </nav>
                <p><b>Click on submit button to view user details</b></p>
            </React.Fragment>
        )
    }
}

export default Navbar