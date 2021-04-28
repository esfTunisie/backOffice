import React from "react";
import { Button, message, Steps } from "antd";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import ThirdForm from "./ThirdForm";
import { connect } from "react-redux";
import { apiURL } from "../../Config/Config";
class StepForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current:0,
      stepOneData:{name:'',email:'',password:'',password2:'',validation:{error:[true,true,true,true],errorMsg:
        ['merci de remplir votre nom',
        'merci de remplir votre email',
        'merci de remplir votre mot de passe',
        'merci de confirmer votre mot de passe'

      ]}},
      stepOneError:[false,false,false,false],
      stepOneErrorMsg:['','','',''],
      stepTwoData:{raisonsociale:'',adresse:'',produits:'',facebook:'',instagram:'',siteweb:'',validation:{error:[true,true,true],errorMsg:
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
    onChangeStepOneData=(value,key,index)=>{
      
      let aux ={...this.state.stepOneData}
      aux[key]=value
      if(key=="name"){
        
        if(value.trim()===''){
          aux.validation.error[index]=true
          aux.validation.errorMsg[index]='merci de remplir votre nom'
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
      if(key=="raisonsociale"){
        
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
      if(key=="produits"){
        
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

    handleRegisterForm = (evt)=>{
      evt.preventDefault();
      const stepOne = this.props.auth.steps1
      console.log(stepOne.name);
   


      let formdata =new FormData()
      formdata.append('name',stepOne.name)
      formdata.append('email',stepOne.email)
      formdata.append('password',stepOne.password)
      formdata.append('password2',stepOne.password2)
      
      fetch(apiURL+'/register',{method:'POST',
      body:formdata
       
      }).then(res=>res.json())
      .catch(error => console.error('Err',error))
      .then(response => console.log('Succ',response))
    }

    handleClickDoneForm =  (evt)=>{
      evt.preventDefault();
      const stepTwo = this.props.auth.steps2
      const stepThree = this.props.auth.step3
      console.log(stepTwo.raisonsociale);
      let formdata = new FormData()

        formdata.append("raison_sociale",stepTwo.raisonsociale)
        formdata.append("adresse",stepTwo.adresse)
        formdata.append("cat_produits",stepTwo.produits)
        formdata.append("facebook",stepTwo.facebook)
        formdata.append("instagram",stepTwo.instagram)
        formdata.append("site_web",stepTwo.siteweb)
        formdata.append("offre",stepThree.offre)
        formdata.append("shop",stepThree.shop)
      
    
 
       
       fetch(apiURL+'/api/magasin',{headers:{
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTg5MDMyNDMsImV4cCI6MTYxODkwNjg0Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.n1tmNi5CB59np6Fo2gSmkeLXzpLrd_ukpVRRdhMIgWX-A2MdDjqDg-ODwhyaeouM5LtOaAzuTRIpmYx-tI7ehBfTHjttVP8-zzgKBvpZRFbJaG5nOcRA-Qiu-Br74CiCYWjeoZXDo-P0eJhcY2EcSwRrI8lBnU4ImUPi0zGyHOJSzHTGSC_lCzrtnOMrREHLZSidlNKPz4FKpX61ofyuxz2N5gKAOrd8nuevVGtyoSbphdPyUubEUvquhnQevkzxIPlWq76lF1t8qXfjtQx-PYtGhcdCQPZ61bqaE2YAZaULDiK0HUeBzf4Oz4Ca94HjPwmWJNHcSJ-6cb1Oa4QWaw'
        },
        method:'POST',
        body: formdata
      
      }).then(res=>res.json())
      .catch(error => console.error('Err',error))
      .then(response => console.log('Succ',response))
        
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
      <Steps  size="small" current={this.state.current}>
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
          this.state.current === 2 ? <ThirdForm
          onChangeStepThreeData={this.onChangeStepThreeData}
          stepThreeData={this.state.stepThreeData}
          stepThreeError={this.state.stepThreeError}
          stepThreeErrorMsg={this.state.stepThreeErrorMsg}
          /> : null
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
              onClick={this.handleClickDoneForm,this.handleRegisterForm}
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

















