import React, { useState } from 'react';
import {
  Form,
  Input,
} from 'antd';

class SecondForm extends React.Component {
 // const [componentSize, setComponentSize] = useState('default');
 constructor(props){
  super(props);
  this.state = {
    componentSize: 'default',
    size: null
           };
}
  
 /* const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };*/

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
          <Input className="second-form-align"  />
        </Form.Item>
        <Form.Item label="Adresse">
          <Input className="second-form-align"  />
        </Form.Item>
        <Form.Item label="produits">
          <Input className="second-form-align"  />
        </Form.Item>
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