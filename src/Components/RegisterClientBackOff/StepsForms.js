import React from "react";
import { Button, message, Steps } from "antd";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import ThirdForm from "./ThirdForm";
import { connect } from "react-redux";
import { apiURL } from "../../Config/Config";
import {token} from './utilFunction'
class StepForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current:0,
      stepOneData:{first_name:'',last_name:"",email:'',password:'',password2:'',validation:{error:[true,true,true,true],errorMsg:
        ['merci de remplir votre nom',
        'merci de remplir votre prénom',
        'merci de remplir votre email',
        'merci de remplir votre mot de passe',
        'merci de confirmer votre mot de passe'

      ]}},
      stepOneError:[false,false,false,false,false],
      stepOneErrorMsg:['','','',''],
      stepTwoData:{raison_sociale:'',adresse:'',cat_produits:'',facebook:'',instagram:'',site_web:'',validation:{error:[true,true,true],errorMsg:
        ['merci de remplir le raison sociale',
        'merci de remplir votre adresse',
        'merci de remplir les produits',
      ]}},
      stepTwoError:[false,false,false],
      stepTwoErrorMsg:['','',''],
      stepThreeData:{offre:"",shop:"",validation:{error:[true,true],errorMsg:
        ['merci de choisir un offre',
        'merci de choisir une template',
        
      ]}},
      stepThreeError:[false,false],
      stepThreeErrorMsg:['',''],
      passwordValue:""
   
    };
  }

  onDone (){
    this.handleClickDoneForm()
    
  }
    onChangeStepOneData=(value,key,index)=>{
      
      let aux ={...this.state.stepOneData}
      aux[key]=value
      if(key=="first_name"){
        
        if(value.trim()===''){
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='merci de remplir votre nom'
        }else{
          aux.validation.error[index]=false
          aux.validation.errorMsg[index]=''
        }
      }
      if(key=="last_name"){
        
        if(value.trim()===''){
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='merci de remplir votre prénom'
        }else{
          aux.validation.error[index]=false
          aux.validation.errorMsg[index]=''
        }
      }
      if(key=="email"){
        
        if(isEmpty(value)){
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='merci de remplir votre Email'
        } if(!isEmail(value)){
          
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='merci de remplir votre email correctement'
        }
        
        
        else{
          aux.validation.error[index]=false
          aux.validation.errorMsg[index]=''
        }
      }
      if(key=="password"){
      
        if(isEmpty(value)){
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='merci de remplir votre mot de passe'
        } if (value.length < 8)
        {
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='le mot de passe doit contient 8 caractére'
        }
        
        else{
          this.setState({passwordValue:value})
          aux.validation.error[index]=false
          aux.validation.errorMsg[index]=''
         
          
          
        }
      }
      if(key=="password2"){
        
        
        if(isEmpty(value)){
          
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='merci de confirmer votre mot de passe'
        } if (value.length < 8)
        {
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='le mot de passe doit contient 8 caractére'
        } if(value !== this.state.passwordValue){
         
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='password not match'
        }
        
        else{
          aux.validation.error[index]=false
          aux.validation.errorMsg[index]=''
        }
      }

      this.setState({stepOneData:aux})
      const action = {type:"STEP_FORM_ONE", value:aux}
      this.props.dispatch(action)
    }
    onChangeStepTwoData=(value,key,index)=>{
      let aux ={...this.state.stepTwoData}
      aux[key]=value
      if(key=="raison_sociale"){
        
        if(value.trim()===''){
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='merci de remplir votre raison sociale'
        }else{
          aux.validation.error[index]=false
          aux.validation.errorMsg[index]=''
        }
      }
      if(key=="adresse"){
        
        if(value.trim()===''){
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='merci de remplir votre adresse'
        }else{
          aux.validation.error[index]=false
          aux.validation.errorMsg[index]=''
        }
      }
      if(key=="cat_produits"){
        
        if(value.trim()===''){
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='merci de remplir votre catégorie des produits'
        }else{
          aux.validation.error[index]=false
          aux.validation.errorMsg[index]=''
        }
      }
    
      this.setState({stepTwoData:aux})
      const action = {type:"STEP_FORM_TWO", value:this.state.stepTwoData}
      this.props.dispatch(action)
    }
    onChangeStepThreeData=(value,key,index)=>{
      console.log("hello from three");
      let aux ={...this.state.stepThreeData}
      aux[key]=value
    
      
      
       if(key=="offre"){
        console.log("hello from three2",value);
        if(value.trim()===''){
          console.log("hellofarouk",value);
          aux.validation.error[index]=true
           aux.validation.errorMsg[index]='merci de choisir une offre'
           
        }else{
           aux.validation.error[index]=false
           aux.validation.errorMsg[index]=''
         }
       }
       if(key=='shop'){
       if(isEmpty(value)){
         aux.validation.error[index]=true
         aux.validation.errorMsg[index]='merci de choisir une template'
       }else{
         aux.validation.error[index]=false
         aux.validation.errorMsg[index]=''
       }
     }
 
     
    
      this.setState({stepThreeData:aux})

      const action = {type:"STEP_FORM_THREE", value:this.state.stepThreeData}
      this.props.dispatch(action)
    }

    nextStep=()=>{
      console.log('hello');
      if(this.state.current===0){
        const ERROR = [...this.state.stepOneData.validation.error]
        const ERROR_MSG=[...this.state.stepOneData.validation.errorMsg]
        this.setState({
          stepOneError:ERROR,
          stepOneErrorMsg:ERROR_MSG
        })
        if(!this.state.stepOneData.validation.error.includes(true)){
          this.setState({current: this.state.current+1})
        }
      }
      if(this.state.current===1){
        const ERROR = [...this.state.stepTwoData.validation.error]
        const ERROR_MSG=[...this.state.stepTwoData.validation.errorMsg]
        this.setState({
          stepTwoError:ERROR,
          stepTwoErrorMsg:ERROR_MSG
        })
        if(!this.state.stepTwoData.validation.error.includes(true)){
          this.setState({current: this.state.current+1})
        }
      }
    }
    prev = () => {
      this.setState({current: this.state.current-1})
    };

    handleRegisterForm =async()=>{
     
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const stepOne = this.props.auth.steps1
      let formdata =new FormData()
      formdata.append('first_name',stepOne.first_name)
      formdata.append('last_name',stepOne.last_name)
      formdata.append('email',stepOne.email)
      formdata.append('password',stepOne.password)
     
      const requestOptions = {
        method: 'POST',
        // headers: myHeaders,
        body: formdata
      };
     
     
    }
    



    handleClickDoneForm  =  ()=>{
      
      const stepTwo = this.props.auth.steps2
      const stepThreeOffre = this.props.auth.offre
      const stepThreeShops = this.props.auth.shops
      console.log(stepTwo);
      let formdata = new FormData()

        formdata.append("raison_sociale",stepTwo.raison_sociale)
        formdata.append("adresse",stepTwo.adresse)
        formdata.append("cat_produits",stepTwo.cat_produits)
        formdata.append("facebook",stepTwo.facebook)
        formdata.append("instagram",stepTwo.instagram)
        formdata.append("site_web",stepTwo.site_web)
        formdata.append("offre",stepThreeOffre)
        formdata.append("shops",stepThreeShops)

       
        fetch(apiURL+'/api/Add_magasin',{headers:{
          'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTk2OTU3NzYsImV4cCI6MTYxOTY5OTM3Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.i_S0gp5OPV9Zlabb2F0DWQS82afMUZVQhu-wLbwQaVIrlUf2FTaBEYTFMjv0ZEXSc4yJtK_NNlEFSIoewtLk7wlh6ETkTcPK6c3zJZZ1x5WTUZFxer90hXDmStwT1BIUvSH13CBQnPofRqmJWYqK-KCTFUWZ6eQXjxggB-O64FE1KvU-l0DMdKGfNQZ1-xD0ca4U8kXS7G97Sekwb5Zsce56xBYglvyI2Jbg59kCvX_oH6i_Y9qtEGdjAWL110_aV6uvGzoGvIlxGvbcr_E18NVH-HuViPG9UvJ3pOn835JaKC6QXWWanFr45t_CVU1B_9ySATuRJ86SNA32HC3KEw",
          'Content-Type': 'application/json'
        },
        method:'POST',
        body: formdata
      }).then(response => {
       
        if(response.status == 200)
        {
        console.log("res",response);
          response.json().then(result =>{
            console.log(result);
          })
        }
        }
      )  
    }
 

    
    render(){
      const {Step} = Steps
   
      const steps = [
        {
          title: "Inscription",
       
        },
        {
          title: "Données sur l'entreprise",
          
        },
        {
          title: "Offre",
          
        }
      ];
    return(
      <div>
      <Steps size="small" current={this.state.current}>
      {steps.map((item) => (
        <Step key={item.title} title={item.title} />
      ))}
    </Steps>
        <div>{this.state.current ===0 ? <FirstForm
           onChangeStepOneData={this.onChangeStepOneData}
           stepOneData={this.state.stepOneData}
           stepOneError={this.state.stepOneError}
           stepOneErrorMsg={this.state.stepOneErrorMsg}
        />:null }
        {
          this.state.current === 1 ? <SecondForm 
          onChangeStepTwoData={this.onChangeStepTwoData}
          stepTwoData={this.state.stepTwoData}
          stepTwoError={this.state.stepTwoError}
          stepTwoErrorMsg={this.state.stepTwoErrorMsg}
          /> : null
        }
        {
          this.state.current === 2 ? <ThirdForm/> : null
        }
        <div className="steps-action">
          {(this.state.current ===0 ||this.state.current ===1) && (
            <Button type="primary" onClick={ this.nextStep}>
              Next
            </Button>
          )}
          {this.state.current === 2 && (
            <Button
              type="primary"
              onClick={this.handleRegisterForm}
            >
              Done
            </Button>
          )}
          {this.state.current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={ this.prev}>
              Previous
            </Button>
          )}
        </div>
        </div>
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
export default connect (mapStateToProps, mapDispatchToProps)(StepForms)

















