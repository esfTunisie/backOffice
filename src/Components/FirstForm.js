import { Form, Input, Button, Checkbox } from 'antd';
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

const FirstForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
        <Input />
      </Form.Item>

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
      <Input />
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
        <Input.Password />
      </Form.Item>
      <Form.Item
      label="Confirmer mot de passe"
      name="password"
      rules={[
        {
          required: true,
          message: 'merci de confirmer votre mot de passe!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FirstForm