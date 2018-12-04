import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
    <div class="landing">
        <div class="dark-overlay landing-inner text-light">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 class="display-3 mb-4">Quest
                </h1>
                <p class="lead"> A place for the curious minds. Have your questions ready.</p>
                <hr />
                <Link to="/register" class="btn btn-lg btn-info mr-2">Sign Up</Link>
                <Link to="/login" class="btn btn-lg btn-light">Login</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
export default Landing