import React from 'react'
import { Form, Input } from 'antd';
class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
  return (
    <>
    <Form
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 15,
    }}
    layout="horizontal"
   
   
   
    className="ant-form-pers"
  >
    <Form.Item  label="Nom" name="first_name" >
    <Input onChange={(e)=>this.props.onChangeStepOneData(e.target.value,'first_name',0)} value={this.props.stepOneData.first_name}/>
  </Form.Item>
      {this.props.stepOneError[0]&&<div style={{color:'red'}}>{this.props.stepOneErrorMsg[0]}</div>}

      <Form.Item  label="Prénom" name="last_name" >
      <Input onChange={(e)=>this.props.onChangeStepOneData(e.target.value,'last_name',1)} value={this.props.stepOneData.last_name}/>
    </Form.Item>
        {this.props.stepOneError[1]&&<div style={{color:'red'}}>{this.props.stepOneErrorMsg[1]}</div>}

      <Form.Item  label="Adresse email" name="email" >
        <Input onChange={(e)=>this.props.onChangeStepOneData(e.target.value,'email',2)} value={this.props.stepOneData.email}/>
      </Form.Item>
      {this.props.stepOneError[2]&&<div style={{color:'red'}}>{this.props.stepOneErrorMsg[2]}</div>}
      <Form.Item  label="mot de passe" name="password" >
        <Input.Password onChange={(e)=>this.props.onChangeStepOneData(e.target.value,'password',3)} value={this.props.stepOneData.password}/>
      </Form.Item>
      {this.props.stepOneError[3]&&<div style={{color:'red'}}>{this.props.stepOneErrorMsg[3]}</div>}
      <Form.Item label="Confirmer mot de passe" name="password2" >
      <Input.Password onChange={(e)=>this.props.onChangeStepOneData(e.target.value,'password2',4)} value={this.props.stepOneData.password2}/>
    </Form.Item>
    {this.props.stepOneError[4]&&<div style={{color:'red'}}>{this.props.stepOneErrorMsg[4]}</div>}
   </Form>
   </>
  );
};
}
export default FirstForm


