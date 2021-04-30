import React from 'react'
import { connect } from 'react-redux';
import store from '../../Redux/Store';

export const token =(props)=> {

    console.log('auth', props);

    return (
        <div>
            
        </div>
    )
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

