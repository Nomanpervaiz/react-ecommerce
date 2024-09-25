import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import AppSpinner from './Spinner';
import { themeContext } from '../context/ThemeContext';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

 function SignInForm({getLoginVal,className,loader}  ) {
  const contextTheme = useContext(themeContext)
  const { appTheme } = contextTheme
    return(
      loader ? < AppSpinner className="appSpinner" />
      :
        <div className={className}>
          <h1 className='text-center text-4xl font-semibold'>Login</h1>
        <Form
        className='mx-auto my-0  signupForm p-3'
        name="basic"

        style={{
            maxWidth: 600,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={getLoginVal}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
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

<div className='text-center'>

        <Form.Item
            name="remember"
            valuePropName="checked"
            
            >
            <Checkbox  style={{color: appTheme === "light" ? "black":"white" }}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item

        >
            <Button type="primary" htmlType="submit">
                Sign in
            </Button>
        </Form.Item>
        <Form.Item
        >
            <p  style={{color: appTheme === "light" ? "black":"white" }}>Don't have an Account? <Link to={"/signup"} style={{ color: "blue", fontWeight: 'semibold' }}> Signup</Link></p>
        </Form.Item>

          </div>
    </Form>
    </div>

    )
}

export default SignInForm