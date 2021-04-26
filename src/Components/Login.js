import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { apiURL } from '../Config/Config';
import { connect } from 'react-redux';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
username:"",
password:"" ,
error:{}    
};
}



 handleSubmit(){

let formdata = new FormData()
console.log("errrror",this.state.username);
 formdata.append("username",this.state.username)
formdata.append("password",this.state.password)
const raw = JSON.stringify({
  formdata
})
const response =  fetch(`${apiURL}/api/login_check`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  'Access-Control-Allow-Origin': "*",
  redirect: 'follow',
  body: raw
})
const data =  response.json()
console.log("data:",data);
  
}
handleChangeUsername( e){         
  // let fields = this.state.fields;
  // fields[field] = e.target.value;        
  // this.setState({fields});


    this.setState({username: e.target.value});

}
handleChangePassword(e){
  this.setState({password: e.target.value});
}

    render(){

        return (
            <div className="c-app c-default-layout flex-row align-items-center">
              <CContainer>
                <CRow className="justify-content-center">
                  <CCol md="8">
                   
                      <CCard className="p-4">
                        <CCardBody>
                          <CForm>
                            <h1>Login</h1>
                            <p className="text-muted">Sign In to your account</p>
                            <CInputGroup className="mb-3">
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-user" />
                                </CInputGroupText>
                              </CInputGroupPrepend>
                              <CInput type="text" placeholder="Username" autoComplete="username" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-lock-locked" />
                                </CInputGroupText>
                              </CInputGroupPrepend>
                              <CInput type="password" placeholder="Password" autoComplete="current-password" value={this.state.password} onChange={this.handleChangePassword.bind(this)}/>
                            </CInputGroup>
                            <CRow>
                              <CCol xs="6">
                                <CButton color="primary" className="px-4" onClick={this.handleSubmit}>Login</CButton>
                              </CCol>
                              <CCol xs="6" className="text-right">
                                <CButton color="link" className="px-0">Forgot password?</CButton>
                              </CCol>
                            </CRow>
                          </CForm>
                        </CCardBody>
                      </CCard>
                     
                   
                  </CCol>
                </CRow>
              </CContainer>
            </div>
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
export default connect (mapStateToProps, mapDispatchToProps)(Login)
