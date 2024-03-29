import React, { Component } from 'react';
import logo from '../resources/images/icons/oodles-logo.png';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Container,Form,InputGroup,FormControl } from 'react-bootstrap';
import { homedir } from 'os';

class Header extends Component {
    state = { 
        menu : {
          'HOME' : [],
          'PORTFOLIO' : [],
          'TECHNOLOGIES' : [],
          'MARKETING INSIGHT' : [],
          'SERVICES' : ["SAAS DEVELOPMENT APPLICATION","SAAS DEVELOPMENT APPLICATION"],
          'ABOUT US' : []

        }
     }
    render() { 
      
        return (  
          <div style={{marginLeft:30,marginRight:30}}>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                {/* {this.state.map((menu,items) => "HELLO  ")} */}
                <Nav.Link href="#deets">HOME</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                PORTFOLIO
                </Nav.Link>

                <Nav.Link href="#pricing">TECHNOLOGIES</Nav.Link>
                <Nav.Link href="#pricing">MARKETING INSIGHT</Nav.Link>
                <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" className="grow">SERVICE 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="grow">SERVICE 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className="grow">SERVICE 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="grow">SERVICE 4</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing">ABOUT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
}
 
export default Header;