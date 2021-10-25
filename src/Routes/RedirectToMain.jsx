import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const RedirectToMain = _ => {
    return (
        <Redirect to="/" />
    );
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
  export default connect(mapStateToProps, mapDispatchToProps)(RedirectToMain);