import React, { Component } from 'react';
import Service from '../layouts/service';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Container,Form,InputGroup,FormControl } from 'react-bootstrap';
class ServiceBox extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <center><h1>OUR SERVICES</h1></center>
            <div style={{display:"flex"}}>
                <Service></Service>
                <Service></Service>
                <Service></Service>
            </div>
            <div style={{display:"flex"}}>
                <Service></Service>
                <Service></Service>
                <Service></Service>
            </div>
            <br/>
            <br/>
            <center><Button variant="outline-info">&nbsp;&nbsp;&nbsp;View all Services&nbsp;&nbsp;&nbsp;</Button></center>
            </React.Fragment>
         );
    }
}
 
export default ServiceBox;