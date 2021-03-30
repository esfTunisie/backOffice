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

   await fetch(apiURL+'/api/getNewCommande/'+id ,{'headers': {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTcwMTY4NjcsImV4cCI6MTYxNzAyMDQ2Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWhtZWQuYmVubWFraGxvdWZAeWFob28uZnIifQ.klJZnTLU04u6UB8L4hgsaquS4_-SWO-YOYHJEiDUqKyAiKXrwrQjHP8R8Fb8I2a7p2crsHLHzP3XTsPUKzt3J_82dB_nWWNDKMSgfUCfAVihoPGr8uq2KZSTcV-KS2FzIj-tgHoWoIMKT9HseQdusmaZuqtAu3LJBiNnon4puFp1b-mpT8US2lOIMr57m2kaSf2PfzUNTNbNppQqdSstHylroH1hF_BPeXhs1q8bbU_bIfsdVd-c3-AOxbYtcyMBsWKCsHLAssyMxqA8mCRsxP9_FoJsLPRaEkzwlv6_K-MvttG3hJoCSDbgwfq77XE_RSxdAWRlInwKebR4zhisRw'
  }})
    .then(response => response.json()).then(data => this.setState({ newCommand:data }));
    const action = {type:"GET_NEW_COMMAND", value:this.state.newCommand}
      this.props.dispatch(action)
      this.handleClickCurrent(id);
  }
  handleClickCurrent = async (id)=>{
    console.log('test',id);
   await fetch(apiURL+'/api/getCurrentCommande/'+id ,{'headers': {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTcwMTY4NjcsImV4cCI6MTYxNzAyMDQ2Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWhtZWQuYmVubWFraGxvdWZAeWFob28uZnIifQ.klJZnTLU04u6UB8L4hgsaquS4_-SWO-YOYHJEiDUqKyAiKXrwrQjHP8R8Fb8I2a7p2crsHLHzP3XTsPUKzt3J_82dB_nWWNDKMSgfUCfAVihoPGr8uq2KZSTcV-KS2FzIj-tgHoWoIMKT9HseQdusmaZuqtAu3LJBiNnon4puFp1b-mpT8US2lOIMr57m2kaSf2PfzUNTNbNppQqdSstHylroH1hF_BPeXhs1q8bbU_bIfsdVd-c3-AOxbYtcyMBsWKCsHLAssyMxqA8mCRsxP9_FoJsLPRaEkzwlv6_K-MvttG3hJoCSDbgwfq77XE_RSxdAWRlInwKebR4zhisRw'
  }})
    .then(response=> response.json()).then(data=>this.setState({currentCommand:data}));
    const action = {type:"GET_CURRENT_COMMAND", value:this.state.currentCommand}
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
