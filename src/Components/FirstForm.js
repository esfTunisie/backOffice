import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render(){
  return (
    <div  >
      
        <input onChange={(e)=>this.props.onChangeStepOneData(e.target.value,'nom',1)}  value={this.props.stepOneData.nom}  />
      
      {this.props.stepOneError[1]&&<div style={{color:'red'}}>{this.props.stepOneErrorMsg[1]}</div>}

      <Form.Item label="Email" name="email" >
      <Input />
    </Form.Item>


      <Form.Item  label="mot de passe" name="password" >
        <Input.Password />
      </Form.Item>
      <Form.Item label="Confirmer mot de passe" name="password" >
      <Input.Password />
    </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </div>
  );
};
}

export default FirstForm