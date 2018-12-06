import React, { Component } from 'react';

class AnswerList extends Component{
    render(){
        return(
            <div className="container" >
                <div className="oneQuest"><h2>What is polymorphism, what is it for, and how is it used?</h2></div>
                <hr/>
                <br/>
                
                <div className="answers ">
                    <div className="reply stu">
                        <h3><strong>Orion Fletcher</strong></h3>
                        <p>
                            I'm a little confused ont this concept too
                        </p>
                    </div>
                    <div className="reply stu">
                        <h3><strong>Joel Hernandez</strong></h3>
                        <p>
                            Polymorphism is kind of like a branch. For example, a car would be at the top and it would branch out to other things like a bus and a racing car.
                        </p>
                    </div>
                    <div className="reply prof">
                        <h3><strong>Professor Linus Torvalds</strong></h3>
                        <p>So polymorphism is the ability (in programming) to present the same interface for differing underlying forms (data types).

For example, in many languages, integers and floats are implicitly polymorphic since you can add, subtract, multiply and so on, irrespective of the fact that the types are different. They're rarely considered as objects in the usual term.

But, in that same way, a class like BigDecimal or Rational or Imaginary can also provide those operations, even though they operate on different data types.

The classic example is the Shape class and all the classes that can inherit from it (square, circle, dodecahedron, irregular polygon, splat and so on).

With polymorphism, each of these classes will have different underlying data. A point shape needs only two co-ordinates (assuming it's in a two-dimensional space of course). A circle needs a center and radius. A square or rectangle needs two co-ordinates for the top left and bottom right corners and (possibly) a rotation. An irregular polygon needs a series of lines. Here is an example: <br/><br/>
<center><img src="https://i.stack.imgur.com/6Ks3t.png" height="300px" width="650px"/></center>

                    </p>
                </div>
                <form>
                        <div class="form-group">
                        <label for="comment">Comment:</label>
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                        </div>
                    </form>
                <center><button type="button" className="btn btn-success btn-lg post">Answer</button></center>
            </div>
            </div>
        )
    };
}

export default AnswerList;