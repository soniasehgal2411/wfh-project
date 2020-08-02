import React from 'react';
import { Component } from 'react';
import {Link } from 'react-router-dom';
import './../css/Navbar.css';


class FormPage extends Component{
    render() {
        return (
          <div className="registerfullbox">
            <form>
              <div className="container">
                <h2><b>REGISTER YOURSELF</b></h2>
                <p>Please fill in this form to create an account</p>
    
                <label><b>NAME</b></label>
                <input type="text" name="name" placeholder="Enter your full name..."/>
    
                <label><b>MOBILE NO</b></label>
                <input type="text" name="mobile" placeholder="Enter Your Mobile No..." maxLength="10" />
    
                <label><b>E-MAIL ID</b></label>
                <input type="text" name="mail-id" placeholder="Enter your e-mail id..."/>
    
                <label><b>PASSWORD</b></label>
                <input type="password" name="password" placeholder="Enter your password..."/>
    
                <p>By creating an account you agree to our Terms & Privacy.</p>
                <hr />
                <button type="submit" className="registerbtn" onClick={(event) => this.submitData(event)}> <b>SUBMIT</b></button>
                <div className="signin">
                  <p>Already have an account?<Link to="/SignIn">Sign in</Link></p>
                </div>
              </div >
            </form>
          </div>
        );
      }
    }

export default FormPage;