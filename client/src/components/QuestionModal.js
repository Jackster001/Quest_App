import React, { Component } from 'react';
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addQuestion} from '../actions/questionActions';

class QuestionModal extends Component{
    state ={
        modal: false,
        name: '',
        Desc:'',
        question: this.name,
        description: this.Desc
    }

    toggle= () =>{
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange1=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }
    onChange2=(event)=>{
        this.setState({[event.target.Desc]: event.target.value});
    }

    onSubmit= (event) =>{
        event.preventDefault();
        const newQuestion ={
            question: this.state.name,
            description: this.state.Desc
        }

         //add item via addQuestion  question
         this.props.addQuestion(newQuestion);
         //Close modal
         this.toggle();
    }

    render(){
        return(
            <div>
                <center>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >ask Question</Button></center>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Ask Question</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="question">Question</Label>
                                <Input 
                                    type="text"
                                    question="question"
                                    name='name'
                                    placeholder="Place your question here..."
                                    onChange={this.onChange1}
                                />
                                <Label for="description">Description</Label>
                                <Input 
                                    type="textarea"
                                    Desc="Description"
                                    name='name'
                                    placeholder="More details..."
                                    onChange={this.onChange2}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop:"2rem"}}
                                    block
                                >Submit</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    question: state.question,
    description: state.Desc
});

export default connect(mapStateToProps, {addQuestion})(QuestionModal);