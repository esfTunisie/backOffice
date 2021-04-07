import React, { useState } from 'react';
import {
  Form,
  Input,
} from 'antd';

const SecondForm = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

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
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        className="ant-form-pers"
      >

        <Form.Item label="Raison sociale">
          <Input />
        </Form.Item>
        <Form.Item label="Adresse">
          <Input />
        </Form.Item>
        <Form.Item label="Catégorie des produits">
          <Input />
        </Form.Item>
        <Form.Item label="lien de la page facebook">
          <Input />
        </Form.Item>
        <Form.Item label="lien du compte instagram">
          <Input />
        </Form.Item>
        <Form.Item label="lien du site web">
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default SecondForm