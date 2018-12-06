import React, { Component } from 'react';
// import{
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container
// } from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
class AppNavBar extends Component{
    state={
        isOpen: false
    }
    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpenj
        })
    }  
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
      }
    render(){
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
        </li>
      </ul>
        // <div>
        //     <Navbar color="dark" dark expand="sm" className="mb-5">
        //         <Container>
        //             <NavbarBrand href="/">Quest</NavbarBrand>
        //             <NavbarToggler onClick={this.toggle}/>
        //             <Collapse isOpen={this.state.isOpen} navbar>
        //                 <Nav className="ml-auto" navbar>
        //                     {/* <NavItem>
        //                         <NavLink><Link  class="navLink" to="/">Home</Link>
        //                         </NavLink>
        //                     </NavItem> */}
        //                     <NavItem>
        //                     <NavLink><Link 
        //                     href=""
        //                     onClick={this.onLogoutClick.bind(this)} class="navLink"><img
        //                     className="rounded-circle"
        //                     src={user.avatar}
        //                     alt={user.firstName}
        //                     style={{ width: '25px', marginRight: '5px' }}
        //                     title="You must have a Gravatar connected to your email to display an image"
        //                   />{' '}
        //                   Logout</Link></NavLink>
        //                     </NavItem>
        //                 </Nav>
        //             </Collapse>
        //         </Container>
        //     </Navbar>
        // </div>
    //   <ul className="navbar-nav ml-auto">
    //     <li className="nav-item">
    //       <a
    //         href=""
    //         onClick={this.onLogoutClick.bind(this)}
    //         className="nav-link"
    //       >
    //         <img
    //           className="rounded-circle"
    //           src={user.avatar}
    //           alt={user.name}
    //           style={{ width: '25px', marginRight: '5px' }}
    //           title="You must have a Gravatar connected to your email to display an image"
    //         />{' '}
    //         Logout
    //       </a>
    //     </li>
    //   </ul>
    );
    const guestLinks = (
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="./Login">
            Login
          </Link>
        </li>
      </ul>
        // <div>
        //     <Navbar color="dark" dark expand="sm" className="mb-5">
        //         <Container>
        //             <NavbarBrand href="/">Quest</NavbarBrand>
        //             <NavbarToggler onClick={this.toggle}/>
        //             <Collapse isOpen={this.state.isOpen} navbar>
        //                 <Nav className="ml-auto" navbar>
        //                     {/* <NavItem>
        //                         <NavLink><Link  class="navLink" to="/">Home</Link>
        //                         </NavLink>
        //                     </NavItem> */}
        //                     <NavItem>
        //                         <NavLink><Link  class="navLink" to="/Register">Register</Link></NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                     <NavLink><Link class="navLink" to="/Login">Login</Link></NavLink>
        //                     </NavItem>
        //                 </Nav>
        //             </Collapse>
        //         </Container>
        //     </Navbar>
        // </div>
      );
        return( 
            <nav className="navbar navbar-expand-sm navbar-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Quest
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {' '}
                  Developers
                </Link>
              </li>
            </ul> */}
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
        // <div>
            
        //     <Navbar color="dark" dark expand="sm" className="mb-5">
        //         <Container>
        //             <NavbarBrand href="/">Quest</NavbarBrand>
        //             <NavbarToggler onClick={this.toggle}/>
        //             <Collapse isOpen={this.state.isOpen} navbar>
        //                 <Nav className="ml-auto" navbar>
        //                     {/* <NavItem>
        //                         <NavLink><Link  class="navLink" to="/">Home</Link>
        //                         </NavLink>
        //                     </NavItem> */}
        //                     <NavItem>
        //                         <NavLink><Link  class="navLink" to="/Register">Register</Link></NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                     <NavLink><Link class="navLink" to="/Login">Login</Link></NavLink>
        //                     </NavItem>
        //                 </Nav>
        //             </Collapse>
        //         </Container>
        //     </Navbar>
        // </div>
        )
    }
}

AppNavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { logoutUser })(AppNavBar);