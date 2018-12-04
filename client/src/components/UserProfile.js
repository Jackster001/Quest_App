import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profileActions';
import {getUser} from '../actions/userActions';
import QuestionsList from './QuestionsList';
import QuestionModal from './QuestionModal';
import store from '../store';
import {Provider} from 'react-redux';


class UserProfile extends Component{
    // componentDidMount() {
    //     this.props.getUser();
    // }
    state= {
        UserData:[
            {id: uuid(), 
            picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTIgKaxkreAmBgWI1jSPZAI5G3WACpSKMvh5-xmxmc7ozf7Uk", 
            name:"Linus Torvalds", 
            email:"Professor@baruchmail.cuny.edu",
            description:"This course emphasizes an object-oriented approach to solving computer programming problems. Using these techniques leads to shorter system development life cycles, increased programmer productivity, code reusability, and reduced system maintenance costs. This course provides a thorough, practical knowledge of object-oriented programming methods. Student learn the principles underlying programming using a language such as C++. This is the first part of a two-semester sequence. No prior knowledge of computer programming is required."
        }
            
            // {getUser()}
        ]
    }
    
    render(){
        
        return(
            // {this.state.UserData[0].name
        <div>
            <div className="UserProfileBox">
                <div className="row">
                <div className="col-md-3"><img src={this.state.UserData[0].picture} height='auto' width="auto"/></div>
                <div className="col-md-9">
                    <div className="container"><h3>Professor: {this.state.UserData[0].name}</h3>
                    <h4>Email: {this.state.UserData[0].email}</h4>
                    <p><b>Course Description: </b>{this.state.UserData[0].description}</p></div>
                </div>
                    
                    
                </div>
                
                <Provider store={store}>
                <Container>
                <QuestionModal className="modal"/>
                <QuestionsList/>
                </Container></Provider>
            </div>
        </div>
        )
    };
};

// UserProfile.propTypes = {
//     getUser:PropTypes.func.isRequired,
//     firstName:PropTypes.object.isRequired,
//     lastName:PropTypes.object.isRequired
// };
  
// const mapStateToProps = state => ({
//     firstName: state.firstName,
//     lastName: state.lastName
// });
  
//   export default connect(mapStateToProps, {getUser})(UserProfile);
export default UserProfile