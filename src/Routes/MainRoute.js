import React, { Component } from 'react'

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import {
 
  TheSidebar,
  TheFooter,
  TheHeader
} from '../containers/index'

import { apiURL } from '../Config/Config';
import { connect } from 'react-redux';
import NewCommand from '../Components/NewCommand';
import CommandAbondonnée from '../Components/CommandAbondonnée';
import CommandAnnulée from '../Components/CommandAnnulée';
import CurrentCommand from '../Components/CurrentCommand';
import ApiPrestaForm from '../Components/ApiPrestaForm';
import Formtest from '../Components/Formtest';
import StepsForms from '../Components/StepsForms';
import CanceledCommand from '../Components/CanceledCommand';
import ProductList from '../Components/ProductList';

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
           <Route path="/product_list" component={ProductList}  /> 
           <Route path="/message" component={StepsForms} />
           
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