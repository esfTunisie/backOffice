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
           <Route  path="/form_prestashop" component={ApiPrestaForm}/>
           <Route path="/nouveaux_commande" component={NewCommand}  /> 
           <Route path="/panier_abondonnées" component={CommandAbondonnée}  /> 
           <Route path="/commandes_annulées" component={CanceledCommand}  /> 
           <Route path="/commandes_en_cours" component={CurrentCommand}  /> 
           <Route path="/message" component={StepsForms} />
           <Route path="/settings" component={Settings} />
           <Route path="/upgrade" component={UpgradeOffre} />
           
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