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
    </div>
  );
};
}
export default FirstForm





/*import { Form, Input, Button, Checkbox } from 'antd';
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
export default FirstForm*/