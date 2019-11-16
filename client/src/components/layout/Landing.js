import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('../UserProfile');
    }
  }
  render() {
    return (
    <div class="landing">
        <div class="dark-overlay landing-inner text-light">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 class="display-3 mb-4">Quest
                </h1>
                <p class="lead">Need to ask your teachers something? Have your questions ready.</p>
                <hr />
                <Link to="/register" class="btn btn-col btn-lg btn-info mr-2">Sign Up</Link>
                <Link to="/login" class="btn btn-lg btn-light">Login</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);