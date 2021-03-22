import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import { apiURL } from '../Config/Config';
import TableCommande from './TableCommande';
import { Route } from 'react-router';
import { CSidebarNavItem } from '@coreui/react';

class TabComponent extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      commandes: {}    };
  }
  componentDidMount(){
      this.getClients();
  }

getClients= ()=>{
    var client = [{id:"1",name:"farouk"}, {id:"2",name:"ahmed"},{id:"3",name:"mouna"}]
   const action = {type:"GET_CLIENT", value:client}
    this.props.dispatch(action)
}
    render(){
        console.log(this.props.auth.client);
        return(
    <Tabs>
    
        <TabList>
        {this.props.auth.client.map((el)=>(
           <Tab> {el.name} </Tab>
           )
           )}
        </TabList>
    
        <TabPanel>

        <Route path="/nouveaux_clients/client1" component={CSidebarNavItem} >hello from nouveaux_clients client 1</Route>
        <Route path="/commandes_annulées/client1"  component={CSidebarNavItem}>hello from commandes_annulées client 1</Route>
        <Route path="/panier_abondonnées/client1" component={CSidebarNavItem} >hello from panier_abondonnées client 1</Route>
        </TabPanel>
        <TabPanel>
          hello from client 2
        </TabPanel>
      </Tabs>
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
    