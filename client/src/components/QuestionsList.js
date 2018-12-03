import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getQuestions, deleteQuestion, addQuestion} from '../actions/questionActions';
import PropTypes from 'prop-types';


class QuestionsList extends Component{

    
    componentDidMount(){
        this.props.getQuestions();
    }

    onDeleteClick=(id)=>{
        this.props.deleteQuestion(id);
    }

    render(){
        const {questionItems } =this.props.question;
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
                    <TransitionGroup className="QuestContainer">
                        <h1>Questions</h1>
                        {questionItems.map(({_id, question, description})=>(
                            
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                            
                                <ListGroupItem className="questionLi">
                                    <div className="questionContent">
                                            <div>{question}</div>
                                        
                                        {/* {description} */}
                                        <br/>
                                        <center>
                                        <Button
                                        className="answerbutton"
                                            color="success"
                                            size="sm"
                                        >Answer</Button>
                                        <Button
                                            className="remove-btn"
                                            color="secondary"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                            >
                                            Delete
                                        </Button></center>
                                    </div>
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
    question:PropTypes.object.isRequired,
    description:PropTypes.object.isRequired

}

const mapStateToProps =(state)=>({
    question:state.question,
    description:state.description
});

// export default QuestionsList;
export default connect(mapStateToProps, {getQuestions, deleteQuestion, addQuestion})(QuestionsList);