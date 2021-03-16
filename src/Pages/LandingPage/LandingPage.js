import React, { Component } from "react";
import { connect } from "react-redux"
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
   
      return (
        <div>
          <h1>test</h1>
        </div>
      )

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

