import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import { apiURL } from '../Config/Config';
import TableCommande from './TableCommande';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { CSidebarNavItem } from '@coreui/react';
import NewCommand from './NewCommand';

class TabComponent extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      
             };
  }
  



    render(){
     
        return(
    <div>
    
       
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
    export default connect (mapStateToProps, mapDispatchToProps)(TabComponent)
    