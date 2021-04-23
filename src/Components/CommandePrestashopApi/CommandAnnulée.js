import React, { Component } from 'react'
import { connect } from 'react-redux';

class CommandAnulée extends Component {


render(){
    return(
    <div>
        <h1>hello two</h1>
    </div>
    )
}
}

const mapStateToProps = (state, ownProps) => ({
        auth: state.auth
      })
      
     
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
    export default connect (mapStateToProps, mapDispatchToProps)(CommandAnulée)
