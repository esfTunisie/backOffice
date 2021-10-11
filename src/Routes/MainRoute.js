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

class MainRoute extends Component{

  constructor(props) {
    super(props);
    this.state = {
      client: {}
    };
  }


  componentDidMount(){
    
}

  render(){
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
        {this.props.auth && this.props.auth.token ?<div className="c-app c-default-layout">
        <Route>
        <TheSidebar/>
        </Route>
        <div className="c-wrapper">
          <Route>
          <TheHeader/>
          </Route>
          <div className="c-body">
           <PrivateRoute path="/form_prestashop" component={ApiPrestaForm}  />
           <PrivateRoute path="/nouveaux_commande" component={NewCommand}  /> 
           <PrivateRoute path="/panier_abondonnées" component={CommandAbondonnée}  /> 
           <PrivateRoute path="/commandes_annulées" component={CanceledCommand}   /> 
           <PrivateRoute path="/commandes_en_cours" component={CurrentCommand}   /> 
           <PrivateRoute path="/product_list" component={ProductList}   />
           <PrivateRoute path="/message" component={StepsForms}  />
           <PrivateRoute path="/settings" component={Settings}   />
           <PrivateRoute path="/shipping" component={FormShipping}   />
           <PrivateRoute path="/upgrade" component={UpgradeOffre}   />
           <PrivateRoute path="/recordNewCommad/:clientId" component={NewCommandeById}  />
           <PrivateRoute path="/recordCurrentCommand/:clientRef" component={CurrentCommandeByRef}/>
           <PrivateRoute path="/recordCanceledCommand/:clientRef" component={CanceledCommandByRef} />
           <PrivateRoute path="/dashboard" component={Dashboard}  /> 
           <PrivateRoute path="/userInfomration/:userId" component={UserInforamtion}  />
           <PrivateRoute path="/produit/:userId" component={ProduitClient}  />
          </div>
          <Route>
          <TheFooter/>
          </Route>
        </div>
      </div> : <Redirect to='/login' />}
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