import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { Component } from 'react'
import { apiURL } from '../../Config/Config'
import TheHeaderDropdown from './TheHeaderDropdown'

// routes config

class TheHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client:{}
    };
  }



  componentDidMount=()=>{
    fetch(apiURL+"/api/getAllMagasin", {headers: {
      'Authorization': 'Bearer '+this.props.auth.token}})
     .then(response => response.json()).then(data => {
      
    const action = {type:"GET_CLIENT", value:data}
     this.props.dispatch(action)});
  }


  
 handleClick = async (id)=>{

   await fetch(apiURL+'/api/getNewCommande/'+id ,{headers: {
   
    'Authorization': 'Bearer '+this.props.auth.token
  }})
    .then(response => response.json()).then(data => this.setState({ newCommand:data }) );
    const action = {type:"GET_NEW_COMMAND", value:this.state.newCommand}
      this.props.dispatch(action)
      this.handleClickCurrent(id);
      this.handleClickCanceledCommand(id);
      this.handleClickProduct(id);
  }
  handleClickCurrent = async (id)=>{
    console.log('test',id);
   await fetch(apiURL+'/api/getCurrentCommande/'+id ,{headers: {
    'Authorization': 'Bearer '+this.props.auth.token
    
  }})
    .then(response=> response.json()).then(data=>this.setState({currentCommand:data}));
    const action = {type:"GET_CURRENT_COMMAND", value:this.state.currentCommand}
    this.props.dispatch(action)
  }
  handleClickCanceledCommand = async (id)=>{
  
    await fetch(apiURL+'/api/getCommandeAnnulee/'+id ,{headers: {

      'Authorization': 'Bearer '+this.props.auth.token
  }})
    .then(response=> response.json()).then(data=>this.setState({canceledcCommand:data}));
    
    const action = {type:"GET_CANCELED_COMMAND", value:this.state.canceledcCommand}
    this.props.dispatch(action)
  }

  handleClickProduct = async (id)=>{
  
   await fetch('/api/getAllProduct/'+id ,{headers: {
    'Authorization': 'Bearer '+this.props.auth.token
  }})
    .then(response=> response.json()).then(data=>this.setState({product:data}));
    const action = {type:"GET_PRODUCT", value:this.state.product}
    this.props.dispatch(action)
  }
render(){
  
  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
       
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/settings">Settings</CHeaderNavLink>
          
        </CHeaderNavItem>
      </CHeaderNav>
      <CHeaderNav className="px-3">
        <TheHeaderDropdown/>
      </CHeaderNav>
<CSubheader>
      <Tabs>
      <TabList>
      {this.props.auth.client && this.props.auth.client.map((el)=>(
         <Tab  onClick={()=>this.handleClick(el.id)}>{el.raison_sociale}</Tab>
         )
      )}
      </TabList> 
    </Tabs>
    </CSubheader>
    </CHeader>
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
export default connect (mapStateToProps, mapDispatchToProps)(TheHeader)
