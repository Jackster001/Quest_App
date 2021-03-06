import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getQuestions, deleteQuestion, addQuestion, oneQuestion} from '../actions/questionActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { hashHistory } from 'react-router';
class QuestionsList extends Component{
    state={
        questionId:null,
        // modal: false,
        // text: '',
        // answer: this.text,
        // description: this.Desc
    }
    componentDidMount(){
        this.props.getQuestions();
    }

    toggle= () =>{
        this.setState({
            modal: !this.state.modal
        })
    }

    onDeleteClick=(id)=>{
        this.props.deleteQuestion(id);
    }
    // onAnswerClick=()=>{

    //     browserHistory.push('/AnswerList');
        
    // }
    onChange1=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    // onFocusClick=(id)=>{
    //     this.setState.questionId=this.props.oneQuestion(id)
    // }


    render(){
        const {questionItems } =this.props.question;
        return(
            <Container>            
                <ListGroup>
                    <TransitionGroup className="QuestContainer">
                    <hr/>
                        <h1>Questions</h1>
                        {questionItems.map(({_id, question, description})=>(
                            
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                            <div className="row1">
                                <ListGroupItem className="questionLi column1">
                                    <div className="questionContent">
                                            <div>{question}</div>
                                        
                                        {/* {description} */}
                                        <br/>
                                        <center>
                                        
                                        <Button
                                        className="answerbutton"
                                            color="success"
                                            size="sm"
                                            // onClick={()=>(
                                                
                                            //         hashHistory.push('/AnswerList')
                                                
                                            // )}
                                            // {this.onAnswerClick.bind(this)}
                                        ><Link style={{ textDecoration: 'none' , color: 'white'}} className='answer' to="./AnswerList">Answer</Link></Button>
                                        {/* <Button
                                            className="remove-btn"
                                            color="secondary"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                            >
                                            Delete
                                        </Button> */}
                                        </center>
                                    </div>
                                </ListGroupItem>
                            </div>
                               
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            {/* <p>{questionItems
                .filter(questionItems => questionItems._id === this.state.questionId)
                .map(questionItems=>questionItems.question)
                }</p> */}
                 {/* { this.props.oneQuestion
                    ? this.props.oneQuestion.map(item =>
                    <this.renderData key={item.id} item={item} />)
                    : null
                } */}
                {/* <div>
                {this.props.oneQuestion.map(({_id, question})=>{
                    <p key={_id}>{question}</p>
                })}
                
                </div> */}
            </Container>
        )
    }
}

QuestionsList.propTypes={
    getQuestions:PropTypes.func.isRequired,
    question:PropTypes.object.isRequired,
    description:PropTypes.object.isRequired,
    oneQuestion:PropTypes.func.isRequired

}

const mapStateToProps =(state)=>({
    question:state.question,
    description:state.description,
    oneQuestion: state.oneQuestion
});

// export default QuestionsList;
export default connect(mapStateToProps, {getQuestions, deleteQuestion, addQuestion, oneQuestion})(QuestionsList);