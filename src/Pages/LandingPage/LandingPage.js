import React, { Component } from "react";
import { connect } from "react-redux"
import { apiURL } from "../../Config/Config";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
     fetch(apiURL+'getClients')
    .then(response => response.json()).then(data => this.setState({ data }));
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

