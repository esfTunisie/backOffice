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
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { Component } from 'react'
import { apiURL } from '../Config/Config'

// routes config



class TheHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
             };
  }
  
 handleClick = async (id)=>{

   await fetch(apiURL+'/api/getNewCommande/'+id ,{headers: {
   
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTc4NzE5ODEsImV4cCI6MTYxNzg3NTU4MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnJAaWR2ZXkuY29tIn0.HJropZil6dv5Y3OWkY-e8etYFy8Qn6erjVmESmE-j5_Lh0lz6V4LNv3lJ_DL3EFCOUipiAYH-ma_E0Qvof6AM-ucMYR7_yS6LM9F5a0vQBjygZTF1N45OCGThEyqh_kB0gWrqYpC828DUUy-GmoM-b71Ml57lU0h_YttynOwXEuCo5HakzOQPFMCtSyo_oPLfwYJu5WP-Q4RU2M4fmGvzvf2aI-48lLkJZ_OWOMSQDCeu4SYCHjlz-am4ENlAZAlbg0bSTilTjsQUpePwX7h4hfXJWVuEbpQ8KKb23VuQ4DXdzw2oDRt7pzo8It0QabWPiPU8AQ6vIJ3EyTcJOTfHg'
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
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTc4NzE5ODEsImV4cCI6MTYxNzg3NTU4MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnJAaWR2ZXkuY29tIn0.HJropZil6dv5Y3OWkY-e8etYFy8Qn6erjVmESmE-j5_Lh0lz6V4LNv3lJ_DL3EFCOUipiAYH-ma_E0Qvof6AM-ucMYR7_yS6LM9F5a0vQBjygZTF1N45OCGThEyqh_kB0gWrqYpC828DUUy-GmoM-b71Ml57lU0h_YttynOwXEuCo5HakzOQPFMCtSyo_oPLfwYJu5WP-Q4RU2M4fmGvzvf2aI-48lLkJZ_OWOMSQDCeu4SYCHjlz-am4ENlAZAlbg0bSTilTjsQUpePwX7h4hfXJWVuEbpQ8KKb23VuQ4DXdzw2oDRt7pzo8It0QabWPiPU8AQ6vIJ3EyTcJOTfHg'
    
  }})
    .then(response=> response.json()).then(data=>this.setState({currentCommand:data}));
    const action = {type:"GET_CURRENT_COMMAND", value:this.state.currentCommand}
    this.props.dispatch(action)
  }
  handleClickCanceledCommand = async (id)=>{
    console.log('test',id);
   const canceled = await fetch(apiURL+'/api/getCommandeAnnulee/'+id ,{headers: {

    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTc4NzE5ODEsImV4cCI6MTYxNzg3NTU4MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnJAaWR2ZXkuY29tIn0.HJropZil6dv5Y3OWkY-e8etYFy8Qn6erjVmESmE-j5_Lh0lz6V4LNv3lJ_DL3EFCOUipiAYH-ma_E0Qvof6AM-ucMYR7_yS6LM9F5a0vQBjygZTF1N45OCGThEyqh_kB0gWrqYpC828DUUy-GmoM-b71Ml57lU0h_YttynOwXEuCo5HakzOQPFMCtSyo_oPLfwYJu5WP-Q4RU2M4fmGvzvf2aI-48lLkJZ_OWOMSQDCeu4SYCHjlz-am4ENlAZAlbg0bSTilTjsQUpePwX7h4hfXJWVuEbpQ8KKb23VuQ4DXdzw2oDRt7pzo8It0QabWPiPU8AQ6vIJ3EyTcJOTfHg'
  }})
    .then(response=> response.json()).then(data=>this.setState({canceledcCommand:data}));
    console.log("hello",canceled);
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
          <CHeaderNavLink>Settings</CHeaderNavLink>
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
