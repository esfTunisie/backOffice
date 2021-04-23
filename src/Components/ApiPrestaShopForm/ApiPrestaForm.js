import React, {Component} from 'react'
import {
    
    CButton,
    CCard,
    CCardBody,
    
    CCardFooter,
    
    CCardHeader,
    CCol,
  
    CFormGroup,

    CInput,

    CLabel,
 
  } from '@coreui/react'
import CIcon from '@coreui/icons-react';
  
class ApiPrestaForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
           fields:{},
           errors:{}
        };
    
        
      }

      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Name cannot be empty";
        }
  
       
   
        
        if(!fields["url"]){
           formIsValid = false;
           errors["url"] = "Url cannot be empty";
        }
        if(!fields["methode"]){
            formIsValid = false;
            errors["methode"] = "Methode cannot be empty";
         }

         if(!fields["wskey"]){
            formIsValid = false;
            errors["wskey"] = "ws_key cannot be empty";
         }
  
  


       this.setState({errors: errors});
       return formIsValid;
   }

   handleSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
       console.log("submitted");
    }else{
       console.log("errors");
    }

}


handleChange(field, e){         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
}
     




    render(){
        return(
     
            <CCard>
            <CCardHeader>
              Api
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="name">Name</CLabel>
                <CInput id="name" name="name" value={this.state.fields["name"]} onChange={this.handleChange.bind(this, "name")} placeholder="Enter your Api name" required />
                <span style={{color: "red"}}>{this.state.errors["name"]}</span>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="url">URL</CLabel>
                <CInput id="url" value={this.state.fields["url"]} onChange={this.handleChange.bind(this, "url")} placeholder="https://exemple.com/ . . ." required />
                <span style={{color: "red"}}>{this.state.errors["url"]}</span>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="methode">Method</CLabel>
                <CInput id="methode" value={this.state.fields["methode"]} onChange={this.handleChange.bind(this, "methode")} placeholder="GET , POST , PUT , DELETE . . ." required />
                <span style={{color: "red"}}>{this.state.errors["methode"]}</span>
              </CFormGroup>
              
                
                  <CFormGroup>
                    <CLabel htmlFor="wskey">WS_KEY</CLabel>
                    <CInput id="wskey" value={this.state.fields["wskey"]} onChange={this.handleChange.bind(this, "wskey")} placeholder="ENTERAPIKEY54782 . . ." required="true" />
                    <span style={{color: "red"}}>{this.state.errors["wskey"]}</span>
                  </CFormGroup>
                
            </CCardBody>
            <CCardFooter>
            <CButton type="submit" size="sm" color="primary" onClick={this.handleSubmit.bind(this)}><CIcon name="cil-scrubber" /> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
          </CCardFooter>
          </CCard>
            
       
        )
    }
}

export default ApiPrestaForm;