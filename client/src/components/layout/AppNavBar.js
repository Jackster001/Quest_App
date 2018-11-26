import React, { Component } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import {Link} from 'react-router-dom';

class AppNavBar extends Component{
    state={
        isOpen: false
    }
    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpenj
        })
    }  
    render(){
        return( 
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Quest</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <NavLink><Link  class="navLink" to="/">Home</Link>
                                </NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink><Link  class="navLink" to="/Register">Register</Link></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink><Link class="navLink" to="/Login">Login</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>)
    }
}


export default AppNavBar;