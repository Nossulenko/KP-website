import React, { Component } from "react";
import ContactForm from "./ContactForm";

class ContactTwo extends Component {
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div id="contactContainer" className="row">
                        <div className="contactFormRow">
                            <div className="section-title mb--50">
                                <h2 className="title">Contact Us.</h2>
                                <p className="description"></p>
                            </div>
                            <div className="form-wrapper">
                                <ContactForm />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;