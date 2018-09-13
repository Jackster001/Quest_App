import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class QuestionsList extends Component{
    state={
        questionItems:[
            {id: uuid(), question:"question 1" },
            {id: uuid(), question:"question 2" },
            {id: uuid(), question:"question 3" },
            {id: uuid(), question:"question 4" }
        ]
    }
    render(){
        const {questionItems} =this.state;
        return(
            <Container>
                
                <Button color="success" style={{marginBottom:'2rem'}}
                onClick= {()=>{
                    const question=prompt("Enter Question");
                    if(question){
                        this.setState(state => ({
                            questionItems: [...state.questionItems, {id: uuid(), question}]
                        }))
                    }
                }}>
                Add Question</Button>

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
                                        onClick={
                                            () =>{
                                                this.setState(state => ({
                                                    questionItems: state.questionItems.filter(
                                                        questionItems => questionItems.id !== id)
                                                }))
                                            }
                                        }>
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

export default QuestionsList;