import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../../Components/Login';
import { TheFooter, TheSidebar, TheHeader } from '../../Components/containers';


const PrivateRoute = ({ component: Component, auth: auth, ...rest }) => (
  
  <Route
  {...rest}
  render={(props) =>(
      console.log("props",rest.isAuthenticated),
      rest.isAuthenticated === true ?
      <div className="c-app c-default-layout">
        <TheSidebar/>
        <div className="c-wrapper">
          <TheHeader/>
          <div className="c-body">
          <Component {...props} /> 
          </div>
          <TheFooter/>
        </div>
      </div>
        : <Redirect to='/login' />
      )         
    }
  /> 
)






PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);