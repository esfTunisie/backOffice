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
    <Form.Item  label="Nom complet" name="name" >
    <Input onChange={(e)=>this.props.onChangeStepOneData(e.target.value,'name',0)} value={this.props.stepOneData.name}/>
  </Form.Item>
      {this.props.stepOneError[0]&&<div style={{color:'red'}}>{this.props.stepOneErrorMsg[0]}</div>}
      <Form.Item  label="Adresse email" name="email" >
        <Input onChange={(e)=>this.props.onChangeStepOneData(e.target.value,'email',1)} value={this.props.stepOneData.email}/>
      </Form.Item>
      {this.props.stepOneError[1]&&<div style={{color:'red'}}>{this.props.stepOneErrorMsg[1]}</div>}
      <Form.Item  label="mot de passe" name="password" >
        <Input.Password onChange={(e)=>this.props.onChangeStepOneData(e.target.value,'password',2)} value={this.props.stepOneData.password}/>
      </Form.Item>
      {this.props.stepOneError[2]&&<div style={{color:'red'}}>{this.props.stepOneErrorMsg[2]}</div>}
      <Form.Item label="Confirmer mot de passe" name="password2" >
      <Input.Password onChange={(e)=>this.props.onChangeStepOneData(e.target.value,'password2',3)} value={this.props.stepOneData.password2}/>
    </Form.Item>
    {this.props.stepOneError[3]&&<div style={{color:'red'}}>{this.props.stepOneErrorMsg[3]}</div>}
   </Form>
   </>
  );
};
}
export default FirstForm


