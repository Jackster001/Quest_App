import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getQuestions, deleteQuestion, addQuestion} from '../actions/questonActions';
import PropTypes from 'prop-types';


class QuestionsList extends Component{
    // state={
    //     questionItems:[
    //         {id: uuid(), question:"question 1" },
    //         {id: uuid(), question:"question 2" },
    //         {id: uuid(), question:"question 3" },
    //         {id: uuid(), question:"question 4" }
    //     ]
    // }

    componentDidMount(){
        this.props.getQuestions();
    }

    onDeleteClick=(id)=>{
        this.props.deleteQuestion(id);
    }

    // addQuestionClick=(question)=>{
    //     this.props.addQuestion(question);
    // }

    render(){
        const { questionItems } =this.props.question;
        return(
            <Container>
                {/* <center>
                <Button color="success" style={{marginBottom:'2rem'}}
                onClick= {()=>{
                    const question=prompt("Enter Question");
                    if(question){
                        this.addQuestionClick(question);
                        // this.setState(state => ({
                        //     questionItems: [...state.questionItems, {id: uuid(), question}]
                        // }))
                    }
                }}>
                Add Question</Button></center> */}
                
                <ListGroup>
                    <TransitionGroup>
                        {questionItems.map(({id, question})=>(
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    {question}
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, id)}
                                        >
                                        Delete
                                    </Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

QuestionsList.propTypes={
    getQuestions:PropTypes.func.isRequired,
    question:PropTypes.object.isRequired
}

const mapStateToProps =(state)=>({
    question:state.question
});

// export default QuestionsList;
export default connect(mapStateToProps, {getQuestions, deleteQuestion})(QuestionsList);