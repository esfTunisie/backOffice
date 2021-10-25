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
    msgError:false,
  error:{}    
  };
}

 

 handleSubmit=()=>{

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "username": this.state.username,
      "password": this.state.password
    }),
  };
  const requestOptionsUser ={
    method: 'POST',
    headers: myHeaders,
  }
  
  fetch(apiURL+"/api/login_check", requestOptions)
    .then(response => {
      if(response.status == 200){
        response.text().then(result =>{
           fetch(apiURL+'/verifAdminOrClient/'+this.state.username, requestOptionsUser).then(data => {
             if(data.status == 200){
                console.log("dataaa",data);
                const str = JSON.stringify(result).substring(14)
                const newStr = str.substring(0, str.length - 4)
                const action = {type:"GET_TOKEN", token:newStr, isLogIn:true,username:this.state.username}
                this.props.dispatch(action)
                window.location= '/'
             }else{
              this.setState({msgError:true})
              const action = {type:"GET_TOKEN", token:'', isLogIn:false }
              this.props.dispatch(action)
              }
          }) 
        })

      }
      else{
        this.setState({msgError:true})
        const action = {type:"GET_TOKEN", token:'', isLogIn:false }
          this.props.dispatch(action)
      }
    })
    .catch(error => console.log('error', error));
 
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
                              <CInput type="text" placeholder="Username" autoComplete="username" onChange={(e)=>this.setState({username: e.target.value})} />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-lock-locked" />
                                </CInputGroupText>
                              </CInputGroupPrepend>
                              <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={(e)=>this.setState({password:e.target.value})}/>
                            </CInputGroup>
                            <CRow>
                              <CCol xs="12">
                                {this.state.msgError&& <span style={{color:"red"}}>Invalid credential</span>}
                              </CCol>
                            </CRow>
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