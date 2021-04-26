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
   
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTk0MjYyNzAsImV4cCI6MTYxOTQyOTg3MCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.jOtz4CADIhM5vpKv-WDqVfxgTzd9fITOBYX5eNUlcgIlr7Omc5JKU4--drYzKSH70y1vONlRWO99jAZxVngI22SRJE2UjOjZlA_SllxuZqtcP-U91x2NE_s3nlADo-8Fr_TcRS2ryNYwRmdhTDI7FZxCBDtDdnG1g3xcX8YDLqckDNyGrqOKBUtt1_VgiIqKbC9D1MAcNCj0GQb4n8-SHaPVD5iKDIw_2ItIiHiPH9UdG1phMTfmbCpikaGRSER4Bg11cPax5AyFnNXxnF1rIlxfbfKn8pL38Jy-8pJyRkwMOtR9kJeQr4hodpsAxcP7XUVHGaw9im0IfI6rBH5Psg'
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
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTk0MjYyNzAsImV4cCI6MTYxOTQyOTg3MCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.jOtz4CADIhM5vpKv-WDqVfxgTzd9fITOBYX5eNUlcgIlr7Omc5JKU4--drYzKSH70y1vONlRWO99jAZxVngI22SRJE2UjOjZlA_SllxuZqtcP-U91x2NE_s3nlADo-8Fr_TcRS2ryNYwRmdhTDI7FZxCBDtDdnG1g3xcX8YDLqckDNyGrqOKBUtt1_VgiIqKbC9D1MAcNCj0GQb4n8-SHaPVD5iKDIw_2ItIiHiPH9UdG1phMTfmbCpikaGRSER4Bg11cPax5AyFnNXxnF1rIlxfbfKn8pL38Jy-8pJyRkwMOtR9kJeQr4hodpsAxcP7XUVHGaw9im0IfI6rBH5Psg'
    
  }})
    .then(response=> response.json()).then(data=>this.setState({currentCommand:data}));
    const action = {type:"GET_CURRENT_COMMAND", value:this.state.currentCommand}
    this.props.dispatch(action)
  }
  handleClickCanceledCommand = async (id)=>{
  
    await fetch(apiURL+'/api/getCommandeAnnulee/'+id ,{headers: {

    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTk0MjYyNzAsImV4cCI6MTYxOTQyOTg3MCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.jOtz4CADIhM5vpKv-WDqVfxgTzd9fITOBYX5eNUlcgIlr7Omc5JKU4--drYzKSH70y1vONlRWO99jAZxVngI22SRJE2UjOjZlA_SllxuZqtcP-U91x2NE_s3nlADo-8Fr_TcRS2ryNYwRmdhTDI7FZxCBDtDdnG1g3xcX8YDLqckDNyGrqOKBUtt1_VgiIqKbC9D1MAcNCj0GQb4n8-SHaPVD5iKDIw_2ItIiHiPH9UdG1phMTfmbCpikaGRSER4Bg11cPax5AyFnNXxnF1rIlxfbfKn8pL38Jy-8pJyRkwMOtR9kJeQr4hodpsAxcP7XUVHGaw9im0IfI6rBH5Psg'
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
