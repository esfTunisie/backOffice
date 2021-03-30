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
 handleClick (id){
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTcwOTY4ODgsImV4cCI6MTYxNzEwMDQ4OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnJAaWR2ZXkuY29tIn0.XvTLgk5ItEhzFGE7VS4TPQE-AsyJzpCkrbhhyJMELL_-GT6sbJvP0Fv6qAMHQJ6mjFsXobUahQbpaHbpLgP2HlzCeXZ2JpocOT9zvOHx_jn-94U1z_N7RTHCfLmNmepwTGqgrsjeYfHJJ-C2tQ7SvEn9cKAvdOh_ksjJHgDhFMrpm24AUBdj_t16JBScJG6J--oKvDZuh8sxur2X4QpnEnakx2v_MCAR_RCRKWSfo42oRU2V7eMMt8Wey7ylr1q_sHvLUgecK--q_T2suaybadg3mRUIotRQpiuPhY02_gSNTqrzeJQhRrRETnl_wEmjVEj43qFNI_E-43zzuEXxKA");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("http://localhost:8000/api/getNewCommande/"+id, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


   /* fetch(apiURL+'/getNewCommande/api/'+id,{
      'headers': {
        'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTcwOTY3MTIsImV4cCI6MTYxNzEwMDMxMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnJAaWR2ZXkuY29tIn0.HQ-bbbhFPMutdNsEaitHb_ZtJnxg-Bsm5GRNsFdVwIqzW9DeH6gP3DTxQHtFBcFgOX5Ephtxzgof3qIqChNb1E2tA3PeyBAZbcYSH4c1XcHDjt_28Os_7T5UoeB-DYea7xxlocgfE2kxhUlzFAWWafq1pj4TKFNsrSxR07-_7pvVpkDaD3b-hQcFxEdRb0r3LwMFJL5Lm_8LMyUYGqTdJdOiVc_nqPFKqPcGEiBCE8Dm5bjKWEJ1YKU5tGla48NyW46qf9rZujlpu93_Q4SwREmqE9m_A5dkYCOYx_GsFD22PhDEAtC9a25r027goyTU9wujzTm7puhCPj2sad8Gbw'
      }
    })
    .then(response => response.json()).then(data => this.setState({ newCommand:data }));*/
    const action = {type:"GET_NEW_COMMAND", value:this.state.newCommand}
      this.props.dispatch(action)
      //this.handleClickCurrent(id);
  }
  handleClickCurrent (id){
    console.log('test',id);
    fetch(apiURL+'/getCurrentCommande/api/'+id,{
      'headers': {
        'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTcwOTY3MTIsImV4cCI6MTYxNzEwMDMxMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnJAaWR2ZXkuY29tIn0.HQ-bbbhFPMutdNsEaitHb_ZtJnxg-Bsm5GRNsFdVwIqzW9DeH6gP3DTxQHtFBcFgOX5Ephtxzgof3qIqChNb1E2tA3PeyBAZbcYSH4c1XcHDjt_28Os_7T5UoeB-DYea7xxlocgfE2kxhUlzFAWWafq1pj4TKFNsrSxR07-_7pvVpkDaD3b-hQcFxEdRb0r3LwMFJL5Lm_8LMyUYGqTdJdOiVc_nqPFKqPcGEiBCE8Dm5bjKWEJ1YKU5tGla48NyW46qf9rZujlpu93_Q4SwREmqE9m_A5dkYCOYx_GsFD22PhDEAtC9a25r027goyTU9wujzTm7puhCPj2sad8Gbw'
      }
    })
    .then(response=> response.json()).then(data=>this.setState({currentCommand:data}));
    const action = {type:"GET_CURRENT_COMMAND", value:this.state.currentCommand}
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
