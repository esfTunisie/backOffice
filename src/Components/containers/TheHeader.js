import React from 'react'
import {  connect } from 'react-redux'
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
    this.getClients()
  }

  getClients= async ()=>{
    await fetch(apiURL+"/getClients")
     .then(response => response.json()).then(data => {
       console.log();
    const action = {type:"GET_CLIENT", value:data}
     this.props.dispatch(action)});
        
  }
  
 handleClick = async (id)=>{

   await fetch(apiURL+'/api/getNewCommande/'+id ,{headers: {
   
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjAwMzg5NDgsImV4cCI6MTYyMDA0MjU0OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.PICBKwqCfKCTTKsq8HKu8lZtDYbkHQNytH4UutWJGQO4q-NFUHnmCpbOuVpVbXMsurTb--JE5eshn1ajdIJQrz8X8xGPkWtwx-kU7AlS4dSjYP9BGnnhfwcxmpy5sEc2XB4q-Ejth_FzqddnDfjry1w6CrRfAHdvxZF-cEt3SeOSzorumSiuC1-dIh-OMtoumjVT22xIl1LxjOUPMy5HAYr2nB1ph5NIlKJnagCW5_PR_sOEP8Hapo3QYOQCaQBVbqhJ5FX2XpfCsJa8myFfzfLPOlYg4xWs9jCvz2-PtKtnSmSd_IxjDkVvcwSeyQb4Wh7crrgKUxCRiIwN_Kv4Sw'
  }})
    .then(response => response.json()).then(data => this.setState({ newCommand:data }));
    const action = {type:"GET_NEW_COMMAND", value:this.state.newCommand}
      this.props.dispatch(action)
      this.handleClickCurrent(id);
      this.handleClickCanceledCommand(id);
     // this.handleClickPanierAbondonnee(id)
      this.handleClickProduct(id);
  }
  handleClickCurrent = async (id)=>{
    console.log('test',id);
   await fetch(apiURL+'/api/getCurrentCommande/'+id ,{headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjAwMzg5NDgsImV4cCI6MTYyMDA0MjU0OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.PICBKwqCfKCTTKsq8HKu8lZtDYbkHQNytH4UutWJGQO4q-NFUHnmCpbOuVpVbXMsurTb--JE5eshn1ajdIJQrz8X8xGPkWtwx-kU7AlS4dSjYP9BGnnhfwcxmpy5sEc2XB4q-Ejth_FzqddnDfjry1w6CrRfAHdvxZF-cEt3SeOSzorumSiuC1-dIh-OMtoumjVT22xIl1LxjOUPMy5HAYr2nB1ph5NIlKJnagCW5_PR_sOEP8Hapo3QYOQCaQBVbqhJ5FX2XpfCsJa8myFfzfLPOlYg4xWs9jCvz2-PtKtnSmSd_IxjDkVvcwSeyQb4Wh7crrgKUxCRiIwN_Kv4Sw'
    
  }})
    .then(response=> response.json()).then(data=>this.setState({currentCommand:data}));
    const action = {type:"GET_CURRENT_COMMAND", value:this.state.currentCommand}
    this.props.dispatch(action)
  }
  handleClickCanceledCommand = async (id)=>{
  
    await fetch(apiURL+'/api/getCommandeAnnulee/'+id ,{headers: {

      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjAwMzg5NDgsImV4cCI6MTYyMDA0MjU0OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.PICBKwqCfKCTTKsq8HKu8lZtDYbkHQNytH4UutWJGQO4q-NFUHnmCpbOuVpVbXMsurTb--JE5eshn1ajdIJQrz8X8xGPkWtwx-kU7AlS4dSjYP9BGnnhfwcxmpy5sEc2XB4q-Ejth_FzqddnDfjry1w6CrRfAHdvxZF-cEt3SeOSzorumSiuC1-dIh-OMtoumjVT22xIl1LxjOUPMy5HAYr2nB1ph5NIlKJnagCW5_PR_sOEP8Hapo3QYOQCaQBVbqhJ5FX2XpfCsJa8myFfzfLPOlYg4xWs9jCvz2-PtKtnSmSd_IxjDkVvcwSeyQb4Wh7crrgKUxCRiIwN_Kv4Sw'
  }})
    .then(response=> response.json()).then(data=>this.setState({canceledcCommand:data}));
    
    const action = {type:"GET_CANCELED_COMMAND", value:this.state.canceledcCommand}
    this.props.dispatch(action)
  }
  // /*handleClickPanierAbondonnee = async (id)=>{
  
  //   await fetch(apiURL+'/api/getPanierAbondonnee/'+id ,{headers: {

  //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjAwMzg5NDgsImV4cCI6MTYyMDA0MjU0OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.PICBKwqCfKCTTKsq8HKu8lZtDYbkHQNytH4UutWJGQO4q-NFUHnmCpbOuVpVbXMsurTb--JE5eshn1ajdIJQrz8X8xGPkWtwx-kU7AlS4dSjYP9BGnnhfwcxmpy5sEc2XB4q-Ejth_FzqddnDfjry1w6CrRfAHdvxZF-cEt3SeOSzorumSiuC1-dIh-OMtoumjVT22xIl1LxjOUPMy5HAYr2nB1ph5NIlKJnagCW5_PR_sOEP8Hapo3QYOQCaQBVbqhJ5FX2XpfCsJa8myFfzfLPOlYg4xWs9jCvz2-PtKtnSmSd_IxjDkVvcwSeyQb4Wh7crrgKUxCRiIwN_Kv4Sw'
  // }})
  //   .then(response=> response.json()).then(data=>this.setState({panierAbondonnee:data}));
    
  //   const action = {type:"GET-PANIER-ABONDONNEE", value:this.state.panierAbondonnee}
  //   this.props.dispatch(action)
  // }*/


  handleClickProduct = async (id)=>{
  
   await fetch('/api/getAllProduct/'+id ,{headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjAwMzMwNzUsImV4cCI6MTYyMDAzNjY3NSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.ManJrTQAgJicsYlqF5TGzDfRGOOb3OC7Zss5KQUKj5TFzPsbmqLR0Vy-W7P9d2huC7VkBoWxXImoMIU4F_foT6oPb7bCqxdZUr4zLpAhkvLEoieS7vzPeWSfa04USYp5VeJRUugbdZw2eGV08OBwIL8Zs9CUGrCYwQuHwrF5hhPJEi8kB7j2e1r3jIfi3v0WKCX_Vhhd9Y0uKRKgSHc-VCt3ix4XnoM4INrosgb22picjPG2yu-tj2PE9fSon65WkcLWWh0q-qk6n6dvx2fQP8LDaCS-XHy-y8am12gD2zAQ9dcIlOgv0-d5bI9ekgNyEbq2oWxU37C7UdCX92QbZQ'
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
