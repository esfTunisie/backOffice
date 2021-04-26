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
    this.state = {};
  }
  
 handleClick = async (id)=>{

   await fetch('/api/getNewCommande/'+id ,{headers: {
   
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTk0MzcwMDksImV4cCI6MTYyMzAzNzAwOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWhtZWQuYmVubWFraGxvdWZAeWFob28uZnIifQ.HNo8jQNQ2OtgV5xxtZH51A0RPJ6QJD6xgwVCQKl0a0ZPF7zs1kPAAWzlkfvm-5pKoJjrk77nu1QTSvrV0RT3xdQJp8DfNgGUhEb9v5W4bRqBSZ5isLc35CpOWCPvn7xhzhdlNCwgtLpVfMCPYGJf3Y8gjYdIqicBXOvbtY7DLfpxormiS--g9sL2eZ8Wkp9LqGavD_XFGXr68YcjnOCsNDgYPtbQojxx42XN2h9udzsr23JskX2vx09nDvhd9zOu-AkVw1pjSrj4ONptFT38RDgYyX_wPXcbyj6tudyJb6ZmfI94OjXrt76lVH0KppylryI6yn7Bjqn90bk4C_A0Yw'
  }})
    .then(response => response.json()).then(data => this.setState({ newCommand:data }));
    const action = {type:"GET_NEW_COMMAND", value:this.state.newCommand}
      this.props.dispatch(action)
      this.handleClickCurrent(id);
      this.handleClickCanceledCommand(id);
      this.handleClickProduct(id);
  }
  handleClickCurrent = async (id)=>{
    console.log('test',id);
   await fetch('/api/getCurrentCommande/'+id ,{headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTk0MzcwMDksImV4cCI6MTYyMzAzNzAwOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWhtZWQuYmVubWFraGxvdWZAeWFob28uZnIifQ.HNo8jQNQ2OtgV5xxtZH51A0RPJ6QJD6xgwVCQKl0a0ZPF7zs1kPAAWzlkfvm-5pKoJjrk77nu1QTSvrV0RT3xdQJp8DfNgGUhEb9v5W4bRqBSZ5isLc35CpOWCPvn7xhzhdlNCwgtLpVfMCPYGJf3Y8gjYdIqicBXOvbtY7DLfpxormiS--g9sL2eZ8Wkp9LqGavD_XFGXr68YcjnOCsNDgYPtbQojxx42XN2h9udzsr23JskX2vx09nDvhd9zOu-AkVw1pjSrj4ONptFT38RDgYyX_wPXcbyj6tudyJb6ZmfI94OjXrt76lVH0KppylryI6yn7Bjqn90bk4C_A0Yw',
    
  }})
    .then(response=> response.json()).then(data=>this.setState({currentCommand:data}));
    const action = {type:"GET_CURRENT_COMMAND", value:this.state.currentCommand}
    this.props.dispatch(action)
  }
  handleClickCanceledCommand = async (id)=>{
    console.log('test',id);
   const canceled = await fetch('/api/getCommandeAnnulee/'+id ,{headers: {
   
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTk0MzcwMDksImV4cCI6MTYyMzAzNzAwOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWhtZWQuYmVubWFraGxvdWZAeWFob28uZnIifQ.HNo8jQNQ2OtgV5xxtZH51A0RPJ6QJD6xgwVCQKl0a0ZPF7zs1kPAAWzlkfvm-5pKoJjrk77nu1QTSvrV0RT3xdQJp8DfNgGUhEb9v5W4bRqBSZ5isLc35CpOWCPvn7xhzhdlNCwgtLpVfMCPYGJf3Y8gjYdIqicBXOvbtY7DLfpxormiS--g9sL2eZ8Wkp9LqGavD_XFGXr68YcjnOCsNDgYPtbQojxx42XN2h9udzsr23JskX2vx09nDvhd9zOu-AkVw1pjSrj4ONptFT38RDgYyX_wPXcbyj6tudyJb6ZmfI94OjXrt76lVH0KppylryI6yn7Bjqn90bk4C_A0Yw'
  }})
    .then(response=> response.json()).then(data=>this.setState({canceledcCommand:data}));
    console.log("hello",canceled);
    const action = {type:"GET_CANCELED_COMMAND", value:this.state.canceledcCommand}
    this.props.dispatch(action)
  }

  handleClickProduct = async (id)=>{
  
   await fetch('/api/getAllProduct/'+id ,{headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTk0MzcwMDksImV4cCI6MTYyMzAzNzAwOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWhtZWQuYmVubWFraGxvdWZAeWFob28uZnIifQ.HNo8jQNQ2OtgV5xxtZH51A0RPJ6QJD6xgwVCQKl0a0ZPF7zs1kPAAWzlkfvm-5pKoJjrk77nu1QTSvrV0RT3xdQJp8DfNgGUhEb9v5W4bRqBSZ5isLc35CpOWCPvn7xhzhdlNCwgtLpVfMCPYGJf3Y8gjYdIqicBXOvbtY7DLfpxormiS--g9sL2eZ8Wkp9LqGavD_XFGXr68YcjnOCsNDgYPtbQojxx42XN2h9udzsr23JskX2vx09nDvhd9zOu-AkVw1pjSrj4ONptFT38RDgYyX_wPXcbyj6tudyJb6ZmfI94OjXrt76lVH0KppylryI6yn7Bjqn90bk4C_A0Yw',
    
  }})
    .then(response=> response.json()).then(data=>this.setState({product:data}));
    const action = {type:"GET_PRODUCT", value:this.state.product}
    this.props.dispatch(action)
  }
render(){
  console.log('eesaiiiiiiiiiiiiiiii', this.state);
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
