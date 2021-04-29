import React from 'react';
import {
  Form,
  Input,
} from 'antd';

class SecondForm extends React.Component {
 constructor(props){
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

        <Form.Item label="Raison sociale">
          <Input className="second-form-align" onChange={(e)=>this.props.onChangeStepTwoData(e.target.value,'raison_sociale',0)} value={this.props.stepTwoData.raison_sociale}  />
        </Form.Item>
        {this.props.stepTwoError[0]&&<div style={{color:'red'}}>{this.props.stepTwoErrorMsg[0]}</div>}
        <Form.Item label="Adresse">
          <Input className="second-form-align" onChange={(e)=>this.props.onChangeStepTwoData(e.target.value,'adresse',1)} value={this.props.stepTwoData.adresse}  />
        </Form.Item>
        {this.props.stepTwoError[1]&&<div style={{color:'red'}}>{this.props.stepTwoErrorMsg[1]}</div>}
        <Form.Item label="produits">
          <Input className="second-form-align" onChange={(e)=>this.props.onChangeStepTwoData(e.target.value,'cat_produits',2)} value={this.props.stepTwoData.cat_produits}  />
        </Form.Item>
        {this.props.stepTwoError[2]&&<div style={{color:'red'}}>{this.props.stepTwoErrorMsg[2]}</div>}
        <Form.Item label="facebook">
          <Input className="second-form-align"  />
        </Form.Item>
        <Form.Item label="instagram">
          <Input className="second-form-align"  />
        </Form.Item>
        <Form.Item label="site web">
          <Input className="second-form-align"  />
        </Form.Item>
      </Form>
    </>
  );

}

};

export default SecondForm