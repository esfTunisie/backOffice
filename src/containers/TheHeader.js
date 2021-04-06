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

   await fetch('/api/getNewCommande/'+id ,{headers: {
    'Access-Control-Allow-Origin': "http://localhost:8000",
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTc3MjU2NjEsImV4cCI6MTYxNzcyOTI2MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnJAaWR2ZXkuY29tIn0.HcxPz0gRBoMrT48gS2nk3NgfUFWvve6W959RDfIDql3Zod-hWAwASkWI3Prnrpu1Xxrxse8aBzrnyVHAFPoM2lPvNxHthhpmGvYyFTc6tFbwbUj9SICa8ZlRMJjyGRtZEaVd2Hq-mdknQaQ42tFcbDHRAC_xiIqHem9AaDLinbT2YOL4LI4b4851a90MChoFWXO7_VD-pZdhi4znL5HD3Ww8k14vioXoMbB-N13OsG_3SeXBLF_7XQ7uMzku2Rj--VcLLoKp_VMGmLOZVIrbSmzbM8OyLcZe8aw1mlZNGwsgqke5dljOymbuny50YqE5KzLnyqtbBMbFlTOdzoBf3Q'
  }})
    .then(response => response.json()).then(data => this.setState({ newCommand:data }));
    const action = {type:"GET_NEW_COMMAND", value:this.state.newCommand}
      this.props.dispatch(action)
      this.handleClickCurrent(id);
      this.handleClickCanceledCommand(id);
  }
  handleClickCurrent = async (id)=>{
    console.log('test',id);
   await fetch('/api/getCurrentCommande/'+id ,{headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTc3MjU2NjEsImV4cCI6MTYxNzcyOTI2MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnJAaWR2ZXkuY29tIn0.HcxPz0gRBoMrT48gS2nk3NgfUFWvve6W959RDfIDql3Zod-hWAwASkWI3Prnrpu1Xxrxse8aBzrnyVHAFPoM2lPvNxHthhpmGvYyFTc6tFbwbUj9SICa8ZlRMJjyGRtZEaVd2Hq-mdknQaQ42tFcbDHRAC_xiIqHem9AaDLinbT2YOL4LI4b4851a90MChoFWXO7_VD-pZdhi4znL5HD3Ww8k14vioXoMbB-N13OsG_3SeXBLF_7XQ7uMzku2Rj--VcLLoKp_VMGmLOZVIrbSmzbM8OyLcZe8aw1mlZNGwsgqke5dljOymbuny50YqE5KzLnyqtbBMbFlTOdzoBf3Q',
    'Access-Control-Allow-Origin': "http://localhost:8000"
  }})
    .then(response=> response.json()).then(data=>this.setState({currentCommand:data}));
    const action = {type:"GET_CURRENT_COMMAND", value:this.state.currentCommand}
    this.props.dispatch(action)
  }
  handleClickCanceledCommand = async (id)=>{
    console.log('test',id);
   const canceled = await fetch('/api/getCommandeAnnulee/'+id ,{headers: {
    'Access-Control-Allow-Origin': "http://localhost:8000",
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTc3MjU2NjEsImV4cCI6MTYxNzcyOTI2MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnJAaWR2ZXkuY29tIn0.HcxPz0gRBoMrT48gS2nk3NgfUFWvve6W959RDfIDql3Zod-hWAwASkWI3Prnrpu1Xxrxse8aBzrnyVHAFPoM2lPvNxHthhpmGvYyFTc6tFbwbUj9SICa8ZlRMJjyGRtZEaVd2Hq-mdknQaQ42tFcbDHRAC_xiIqHem9AaDLinbT2YOL4LI4b4851a90MChoFWXO7_VD-pZdhi4znL5HD3Ww8k14vioXoMbB-N13OsG_3SeXBLF_7XQ7uMzku2Rj--VcLLoKp_VMGmLOZVIrbSmzbM8OyLcZe8aw1mlZNGwsgqke5dljOymbuny50YqE5KzLnyqtbBMbFlTOdzoBf3Q'
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
