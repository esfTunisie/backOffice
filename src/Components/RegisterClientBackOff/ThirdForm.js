import React, { useState } from 'react';
import {
  Form,
  Select,
} from 'antd';



class ThirdForm extends React.Component {
  //const [componentSize, setComponentSize] = useState('default');
  constructor(props){
    super(props);
    this.state = {
      componentSize: 'default',
      
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
          span: 14,
        }}
        layout="horizontal"

       
      
        className="ant-form-pers"
      >
        <Form.Item label="Offre">
          <Select   >
            <Select.Option value="starter">Starter</Select.Option>
            <Select.Option value="marketGrowth">marketGrowth</Select.Option>
            
            {/*<Select.Option value={this.props.stepThreeData.offre}>Market Growth</Select.Option>
            <Select.Option value={this.props.stepThreeData.offre}>pioneer</Select.Option>
      <Select.Option value={this.props.stepThreeData.offre}>Gold</Select.Option>*/}
          </Select>
        </Form.Item>
        {/*this.props.stepThreeError[0]&&<div style={{color:'red'}}>{this.props.stepThreeErrorMsg[0]}</div>*/}
        <Form.Item label="magasins">
          <Select >
            <Select.Option value="shop one">Shop 1</Select.Option>
{ /*           <Select.Option value="shop2">Shop 2</Select.Option>
            <Select.Option value="shop3">Shop 3</Select.Option>
    <Select.Option value="shop4">Shop 4</Select.Option>*/}
          </Select>
        </Form.Item>
        { /**this.props.stepThreeError[1]&&<div style={{color:'red'}}>{this.props.stepThreeErrorMsg[1]}</div> */ }
      </Form>
    </>
  );
 }
  
};

export default ThirdForm