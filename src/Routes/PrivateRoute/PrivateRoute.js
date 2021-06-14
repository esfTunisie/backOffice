import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../../Components/Login';


const PrivateRoute = ({ component: Component, auth: auth, ...rest }) => (
  
  <Route
    {...rest}
    render={props =>
    
        <Component {...props} />
       
    }
  />
);



PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => {
  return {
  dispatch: (action) => {
  dispatch({type:"LOGOUT",
  token: null,
  client: null,
  new_command:null,
  current_command:null,
  canceled_command:null,
  steps1:{},
  steps2:{},
  steps3:{},
  product:null,
  isLogIn:false}, window.location='/');
  },
  };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);