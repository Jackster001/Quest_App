// import React, { Component } from 'react';
// import{
//     Button,
//     Modal,
//     ModalHeader,
//     ModalBody,
//     Form,
//     FormGroup,
//     Label,
//     Input
// } from 'reactstrap';
// import {connect} from 'react-redux';
// import {addQuestion} from '../actions/questionActions';

// class SideNavBar extends Component{
//     state ={
//         modal: false,
//         name: 'kjghkesn',
//         question: this.name
//     }

//     toggle= () =>{
//         this.setState({
//             modal: !this.state.modal
//         });
//     }

//     onChange=(event)=>{
//         this.setState({[event.target.name]: event.target.value});
//     }

//     onSubmit= (event) =>{
//         event.preventDefault();
//         const newQuestion ={
//             question: this.state.name,
//         }

//          //add item via addQuestion  question
//          this.props.addQuestion(newQuestion);
//          //Close modal
//          this.toggle();
//     }

//     render(){
//         return(
//             <div>
//                 <center>
//                 <Button
//                     color="dark"
//                     style={{marginBottom: '2rem'}}
//                     onClick={this.toggle}
//                 >ask Question</Button></center>
//                 <Modal
//                     isOpen={this.state.modal}
//                     toggle={this.toggle}
//                 >
//                     <ModalHeader toggle={this.toggle}>Ask Question</ModalHeader>
//                     <ModalBody>
//                         <Form onSubmit={this.onSubmit}>
//                             <FormGroup>
//                                 <Label for="question"></Label>
//                                 <Input 
//                                     type="text"
//                                     question="question"
//                                     name='name'
//                                     placeholder="Ask your question here..."
//                                     onChange={this.onChange}
//                                 />
//                                 <Button
//                                     color="dark"
//                                     style={{marginTop:"2rem"}}
//                                     block
//                                 >Submit</Button>
//                             </FormGroup>
//                         </Form>
//                     </ModalBody>
//                 </Modal>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     question: state.question
// });

// export default connect(mapStateToProps, {addQuestion})(SideNavBar);