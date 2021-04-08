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
          <Select>
            <Select.Option value="starter">Starter</Select.Option>
            <Select.Option value="Market Growth">Market Growth</Select.Option>
            <Select.Option value="pioneer">pioneer</Select.Option>
            <Select.Option value="gold">Gold</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="magasins">
          <Select>
            <Select.Option value="shop1">Shop 1</Select.Option>
            <Select.Option value="shop2">Shop 2</Select.Option>
            <Select.Option value="shop3">Shop 3</Select.Option>
            <Select.Option value="shop4">Shop 4</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );
 }
  
};

export default ThirdForm