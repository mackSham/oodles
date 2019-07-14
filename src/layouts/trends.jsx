import React, { Component } from 'react';
import Slider1 from '../resources/images/slider/Real-Estate-Investment-Dropping.png';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Form, InputGroup, FormControl } from 'react-bootstrap';

class Trends extends Component {
    state = {}
    render() {
        return (
            <div style={{ flex: 1, color: "white" }}>
                <center>
                    How Blockchain Technology<br />Will Fortify <br />Real Estate Indutry
                </center>
                <center><img src={Slider1} className="slideImage" /></center>
                <center className="relativeCenter"><Button variant="outline-info" style={{ backgroundColor: "white", width: 150 }}>&nbsp;&nbsp;&nbsp;View All&nbsp;&nbsp;&nbsp;</Button></center>
            </div>
        );
    }
}

export default Trends;