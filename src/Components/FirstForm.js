import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react'
import isEmpty from 'validator/lib/isEmpty'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};





class  FirstForm extends React.Component {
constructor(props){
  super(props)
  this.state={
    name:"",
    email:"",
    password:"",
    password2:"",
    errorName:""
  }
}
handlesubmit(){
  console.log('success');
    if(this.state.name ==''){
      this.setState({"error name": this.state.errorName})
    }
  }
  //  onFinish = (values) => {
  //   console.log('Success:', values);
  // };

  //  onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };
 
  handleChange=(e)=>{
    console.log(e);
     this.setState({e:this.state.email})
     this.setState({e:this.state.name})
     this.setState({e:this.state.password})
     this.setState({e:this.state.password2})

   }
render(){
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      
    >
      <Form.Item
        label="Nom et Prénom"
        name="name"
        rules={[
          {
            required: true,
            message: 'merci de remplir votre nom et prénom!',
          },
        ]}
      >
        <Input onChange={(e)=>this.handleChange(e.target.value)} />
      </Form.Item>
      {this.state.errorName && this.state.errorName?<div>{this.state.errorName}</div>: null}
      <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'merci de remplir votre Email!',
        },
      ]}
    >
      <Input onChange={(e)=>this.handleChange(e.target.value)} />
    </Form.Item>
      

      <Form.Item
        label="mot de passe"
        name="password"
        rules={[
          {
            required: true,
            message: 'merci de remplir votre mot de passe!',
          },
        ]}
      >
        <Input.Password onChange={(e)=>this.handleChange(e.target.value)}/>
      </Form.Item>
      <Form.Item
      label="Confirmer mot de passe"
      name="password2"
      rules={[
        {
          required: true,
          message: 'merci de confirmer votre mot de passe!',
        },
      ]}
    >
      <Input.Password onChange={(e)=>this.handleChange(e.target.value)}/>
    </Form.Item>
    </Form>
  );

}

};
export default FirstForm