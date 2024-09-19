
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import AppSpinner from './Spinner';


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export default function SignUpForm({ accountRegister, className ,loader}) {
  return (
    loader ? < AppSpinner className="appSpinner" />
    :
    <div className={className}>

      <Form
        className=' my-16 signupForm p-3'
        name="basic"

        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={accountRegister}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item

          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {

              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input placeholder="Enter your Email" />
        </Form.Item>

        <Form.Item

          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder="Enter your Password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"

        >
          <Checkbox className='text-white'>Remember me</Checkbox>
        </Form.Item>

        <Form.Item

        >
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
        <Form.Item

        >
          <p className='text-white'>Already have an Account? <Link to={"/signIn"} style={{ color: "blue", fontWeight: 'semibold' }}> Login</Link></p>
        </Form.Item>

      </Form>
    </div>

  )
}