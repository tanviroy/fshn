// This is the Contact Us Page

import React, { Component } from "react";
import "../App.css";

class Contact extends Component {

  render() {
    return (
      <div className="container" style={{marginBottom: "5%"}}>

        <h1>Contact</h1> 
        <br/><br/><br/><br/>
        
        <p style={{textAlign: "left", fontSize: "small"}}>
        Please write us at contact@fshn.com with any questions, concerns, or technical problems.
        
        <br/><br/><br/><br/>
        <h2>Personal Chatbot Assistance</h2> 
        For immediate responses please message our AI personal assistant at:
        <div>UK: +44 (0) 201 950 4450</div>
        IN: +91 (0) 784 298 9150
        <div>US: +1 (0) 689 221 1150</div>
        <br/>
        If your request cannot be handled by your personal assistant, our representative will be happy to assist you over the phone at the following number:
        <div>IN: +91 877 800 9191 </div>
        <br/><br/><br/>

        <h2>COVID Related Assistance</h2> 
        Our Customer Assistance team continues to be available for your convenience by chat as well:
        • Monday to Friday from 08:00 to 21:00 GMT
        • Saturday, Sunday and National Holidays from 10:00 to 13:00 GMT.
        
        You can contact FSH Customer Assistance for COVID at: cvdcustomercare@fshn.com. A sales representative will respond as soon as possible.
        <br/><br/><br/>

        <h2>We hope you enjoy FSHN</h2> 

        </p>
      </div>
    );
  }
}

export default Contact;