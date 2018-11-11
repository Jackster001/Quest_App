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

class SideNavbar extends Component{
    state={
        isOpen: false
    }
    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        return(
            <div className="sibeBar">
                <div></div>
            </div>
        )
    }
}

export default SideNavbar;