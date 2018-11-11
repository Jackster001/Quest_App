// import React, { Component } from 'react';
// import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
// import {CSSTransition, TransitionGroup} from 'react-transition-group';
// import uuid from 'uuid';

// class UserProfile extends Component{
//     state= {
//         UserData:[
//             {id: uuid(), 
//             picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTIgKaxkreAmBgWI1jSPZAI5G3WACpSKMvh5-xmxmc7ozf7Uk", 
//             name:"Jack", 
//             email:"wlin001@gmail.com",
//             rating: 5 }
//         ]
//     }
//     render(){
//         return(
//             <center>
//             <div className="UserProfileBox">
//                 <img src={this.state.UserData[0].picture} height='300px' width="300px"/>
//                 <h3>Hi my name is {this.state.UserData[0].name}</h3>
//             </div></center>
//         )
//     }
// }

// export default UserProfile;