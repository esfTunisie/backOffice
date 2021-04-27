import React, { Component } from 'react'

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import {
 
  TheSidebar,
  TheFooter,
  TheHeader
} from '../Components/containers/index'

import { apiURL } from '../Config/Config';
import { connect } from 'react-redux';
import NewCommand from '../Components/CommandePrestashopApi/NewCommand';
import CommandAbondonnée from '../Components/CommandePrestashopApi/CommandAbondonnée';
import CommandAnnulée from '../Components/CommandePrestashopApi/CommandAnnulée';
import CurrentCommand from '../Components/CommandePrestashopApi/CurrentCommand';
import ApiPrestaForm from '../Components/ApiPrestaShopForm/ApiPrestaForm';
import Formtest from '../Components/Formtest';
import StepsForms from '../Components/RegisterClientBackOff/StepsForms';
import CanceledCommand from '../Components/CommandePrestashopApi/CanceledCommand';
import Settings from '../Components/Settings';
import UpgradeOffre from '../Components/UpgradeOffre';
import ProductList from '../Components/ProductList';
import NewCommandeById from '../Components/CommandePrestashopApi/NewCommandeById';
import CurrentCommandeByRef from '../Components/CommandePrestashopApi/CurrentCommandeByRef';
import CanceledCommandByRef from '../Components/CommandePrestashopApi/CanceledCommandByRef';
import PrivateRoute from './PrivateRoute/PrivateRoute';

class MainRoute extends Component{

  constructor(props) {
    super(props);
    this.state = {
      client: {}
    };
  }
  componentDidMount(){
    this.getClients();
}

getClients= async ()=>{
const Dada = await fetch('/getClients',{
  headers:{
    'Access-Control-Allow-Origin': '*'
  }
  
});
const DataJson = await Dada.json();

  this.setState({client:DataJson});


console.log(DataJson);
//.then(response => response.json()).then(data => this.setState({ client:data }));
 const action = {type:"GET_CLIENT", value:this.state.client}
  this.props.dispatch(action)
}
  render(){
    return (
      <Router>
        <Switch>
        <div className="c-app c-default-layout">
        <Route>
        <TheSidebar/>
        </Route>
        <div className="c-wrapper">
          <Route>
          <TheHeader/>
          </Route>
          <div className="c-body">
           {/* <TapComponent />*/} 
           <Route path="/form_prestashop" component={ApiPrestaForm}/>
           <PrivateRoute path="/nouveaux_commande" component={NewCommand} auth={this.props.auth.token}   /> 
           <PrivateRoute path="/panier_abondonnées" component={CommandAbondonnée} auth={this.props.auth.token}  /> 
           <PrivateRoute path="/commandes_annulées" component={CanceledCommand} auth={this.props.auth.token}   /> 
           <PrivateRoute path="/commandes_en_cours" component={CurrentCommand} auth={this.props.auth.token}  /> 
           <PrivateRoute path="/product_list" component={ProductList} auth={this.props.auth.token}  /> 
           <PrivateRoute path="/message" component={StepsForms} auth={this.props.auth.token} />
           <PrivateRoute path="/settings" component={Settings} auth={this.props.auth.token}  />
           <PrivateRoute path="/upgrade" component={UpgradeOffre} auth={this.props.auth.token}  />
           <PrivateRoute path="/recordNewCommad/:clientId" component={NewCommandeById} auth={this.props.auth.token}  />
           <PrivateRoute path="/recordCurrentCommand/:clientRef" component={CurrentCommandeByRef} auth={this.props.auth.token}  />
           <PrivateRoute path="/recordCanceledCommand/:clientRef" component={CanceledCommandByRef} auth={this.props.auth.token}  />



           
          </div>
          <Route>
          <TheFooter/>
          </Route>
        </div>
      </div>
        </Switch>
      </Router>
    );
  };
  
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
export default connect (mapStateToProps, mapDispatchToProps)(MainRoute)