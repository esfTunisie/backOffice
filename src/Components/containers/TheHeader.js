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

// routes config



class TheHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
             };
  }
  
 handleClick = async (id)=>{

   await fetch(apiURL+'/api/getNewCommande/'+id ,{headers: {
   
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTg5OTMyODcsImV4cCI6MTYxODk5Njg4Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.UEfJfs3ho7h5RfhajknQliNf6A_Y7dioN0R6X-mxaihu5L_4GjIfXmd26bsnj9GJNFz6A6hvx5Kurs5LhF-Kl7OBPDWM8Lm3h_COk9l_-IAnG0Mn5dXlZwk7lMJsCCPpCsAyzpBnMzndJNfxXI_FgXvimN7UaByWRuvnuX5HXWw_9ex9CavQ4ZqJRvruV-DHzrhzl0q7Ygoz1Gg-uxHhn2WpNmmOnWywESlOEs71l4gMcIfndTW6vrKlj4gBQb2qS6ASjImzdM5-v3eZek8xL47P_7tcQjO1AhW-CtWnb2lL7tURxdNBVtEE-voeUK_C62RXovmeQ6WuwY-z8INn0Q'
  }})
    .then(response => response.json()).then(data => this.setState({ newCommand:data }));
    const action = {type:"GET_NEW_COMMAND", value:this.state.newCommand}
      this.props.dispatch(action)
      this.handleClickCurrent(id);
      this.handleClickCanceledCommand(id);
  }
  handleClickCurrent = async (id)=>{
    console.log('test',id);
   await fetch(apiURL+'/api/getCurrentCommande/'+id ,{headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTg5OTMyODcsImV4cCI6MTYxODk5Njg4Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.UEfJfs3ho7h5RfhajknQliNf6A_Y7dioN0R6X-mxaihu5L_4GjIfXmd26bsnj9GJNFz6A6hvx5Kurs5LhF-Kl7OBPDWM8Lm3h_COk9l_-IAnG0Mn5dXlZwk7lMJsCCPpCsAyzpBnMzndJNfxXI_FgXvimN7UaByWRuvnuX5HXWw_9ex9CavQ4ZqJRvruV-DHzrhzl0q7Ygoz1Gg-uxHhn2WpNmmOnWywESlOEs71l4gMcIfndTW6vrKlj4gBQb2qS6ASjImzdM5-v3eZek8xL47P_7tcQjO1AhW-CtWnb2lL7tURxdNBVtEE-voeUK_C62RXovmeQ6WuwY-z8INn0Q'
    
  }})
    .then(response=> response.json()).then(data=>this.setState({currentCommand:data}));
    const action = {type:"GET_CURRENT_COMMAND", value:this.state.currentCommand}
    this.props.dispatch(action)
  }
  handleClickCanceledCommand = async (id)=>{
  
    await fetch(apiURL+'/api/getCommandeAnnulee/'+id ,{headers: {

    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTg5OTMyODcsImV4cCI6MTYxODk5Njg4Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.UEfJfs3ho7h5RfhajknQliNf6A_Y7dioN0R6X-mxaihu5L_4GjIfXmd26bsnj9GJNFz6A6hvx5Kurs5LhF-Kl7OBPDWM8Lm3h_COk9l_-IAnG0Mn5dXlZwk7lMJsCCPpCsAyzpBnMzndJNfxXI_FgXvimN7UaByWRuvnuX5HXWw_9ex9CavQ4ZqJRvruV-DHzrhzl0q7Ygoz1Gg-uxHhn2WpNmmOnWywESlOEs71l4gMcIfndTW6vrKlj4gBQb2qS6ASjImzdM5-v3eZek8xL47P_7tcQjO1AhW-CtWnb2lL7tURxdNBVtEE-voeUK_C62RXovmeQ6WuwY-z8INn0Q'
  }})
    .then(response=> response.json()).then(data=>this.setState({canceledcCommand:data}));
    
    const action = {type:"GET_CANCELED_COMMAND", value:this.state.canceledcCommand}
    this.props.dispatch(action)
  }
render(){
  console.log('eesai', this.state);
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

<CSubheader>
      <Tabs>
      
      <TabList>
      {this.props.auth.client && this.props.auth.client.map((el)=>(
       
         <Tab onClick={()=>this.handleClick(el.id)}>{el.name}</Tab>
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
