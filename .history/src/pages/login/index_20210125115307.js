import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./index.scss";

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

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange = (type, event) => {
    this.setState({ [type]: event.target.value });
  };

  onFinish = (values) => {
    localStorage.setItem('user', values);
    console.log("Success:", values);
    this.props.logIn();
    console.log('props', this.props);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    let { username, password } = this.state;
    return (
      <div className='login'>
        <Form
          {...layout}
          name='basic'
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label='用户名'
            name='username'
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input
              placeholder='用户名'
              onChange={(event) => {
                this.handleChange("username", event);
              }}
              value={username}
            />
          </Form.Item>

          <Form.Item
            label='密码'
            name='password'
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input.Password
              placeholder='密码'
              onChange={(event) => {
                this.handleChange("password", event);
              }}
              value={password}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

let logIn = () => ({
  type: 'logIn'
})

export default connect(null, {logIn})(LogIn);
