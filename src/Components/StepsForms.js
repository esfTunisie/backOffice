import React from "react";
import { Button, message } from "antd";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";



class StepForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current:0,
      stepOneData:{prenom:'',nom:'',validation:{error:[false,true],errorMsg:['invalid','invalid2']}},
      stepOneError:[false,false],
      stepOneErrorMsg:['','']
    };
  }
    onChangeStepOneData=(value,key,index)=>{
      let aux ={...this.state.stepOneData}
      aux[key]=value
      if(value.trim()===''){
        aux.validation.error[index]=true
        aux.validation.errorMsg[index]='invalid'
      }else{
        aux.validation.error[index]=false
        aux.validation.errorMsg[index]=''
      }
      this.setState({stepOneData:aux})
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
    }
    
  
    prev = () => {
      this.setState({current: this.state.current-1})
    
    };
    render(){
    return(
        <div>{this.state.current ===0 ? <FirstForm
           onChangeStepOneData={this.onChangeStepOneData}
           stepOneData={this.state.stepOneData}
           stepOneError={this.state.stepOneError}
           stepOneErrorMsg={this.state.stepOneErrorMsg}
        />: this.state.current === 1? <SecondForm /> :"Last-content" }

        <div className="steps-action">
          {this.state.current ===0 && (
            <Button type="primary" onClick={ this.nextStep}>
              Next
            </Button>
          )}
          {this.state.current === 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
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
    )
}
}
export default StepForms;