import React, { Component } from 'react'

import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

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
import Dashboard from '../Components/Dashboard';
import Login from '../Components/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import FormShipping from '../Components/FormShipping';
import UserInforamtion from '../Components/UserInforamtion';
import ProduitClient from '../Components/containers/ProduitClient';
import { createBrowserHistory } from "history";
import RedirectToMain from './RedirectToMain';

class MainRoute extends Component{

  constructor(props) {
    super(props);
    this.state = {
      client: {}
    };
  }


  componentDidMount(){
    console.log(this.props.history);
}

  render(){
    return (
      <Router>
        <Switch>
          
           <PrivateRoute exact path="/form_prestashop" component={ApiPrestaForm}  />
           <PrivateRoute path="/nouveaux_commande" isAuthenticated={this.props.auth.isLogIn}  component={NewCommand}  /> 
           <PrivateRoute path="/panier_abondonnées" isAuthenticated={this.props.auth.isLogIn} component={CommandAbondonnée}  /> 
           <PrivateRoute path="/commandes_annulées" isAuthenticated={this.props.auth.isLogIn} component={CanceledCommand}   /> 
           <PrivateRoute path="/commandes_en_cours" isAuthenticated={this.props.auth.isLogIn}  component={CurrentCommand}   /> 
           <PrivateRoute path="/product_list" isAuthenticated={this.props.auth.isLogIn}  component={ProductList}   />
           <PrivateRoute path="/message" component={StepsForms}  />
           <PrivateRoute path="/settings" component={Settings}   />
           <PrivateRoute path="/shipping" component={FormShipping}   />
           <PrivateRoute path="/upgrade" component={UpgradeOffre}   />
           <PrivateRoute path="/recordNewCommad/:clientId" isAuthenticated={this.props.auth.isLogIn}  component={NewCommandeById}  />
           <PrivateRoute path="/recordCurrentCommand/:clientRef" isAuthenticated={this.props.auth.isLogIn}  component={CurrentCommandeByRef}/>
           <PrivateRoute path="/recordCanceledCommand/:clientRef" isAuthenticated={this.props.auth.isLogIn}  component={CanceledCommandByRef} />
           <PrivateRoute exact path="/" isAuthenticated={this.props.auth.isLogIn}  component={Dashboard}  /> 
           <PrivateRoute path="/userInfomration/:userId" isAuthenticated={this.props.auth.isLogIn}  component={UserInforamtion}  />
           <PrivateRoute exact path="/produit/:userId" isAuthenticated={this.props.auth.isLogIn}  component={ProduitClient}  />
          <Route path='/login' component={Login} />
          <Route component={RedirectToMain}/> 
        </Switch>
      </Router>
    );
  };
  
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
export default connect (mapStateToProps, mapDispatchToProps)(MainRoute)