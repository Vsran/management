import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
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

function LogIn(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  //constructor(props) {
  //  super(props);
  //  this.state = {
  //    username: "",
  //    password: "",
  //  };
  //}

 let handleChange = (type, event) => {
    this.setState({ [type]: event.target.value });
  };

  let updateRouter = () => {
    

    history.push('/register');
  }

  let onFinish = (values) => {
    localStorage.setItem('user', values);
    console.log("Success:", values);
    props.logIn();
    updateRouter();
    //console.log('props.history', this.props.history);
  };

  let onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //render() {
  //  let { username, password } = this.state;
    return (
      <div className='login'>
        <Form
          {...layout}
          name='basic'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
                setUsername("username", event.target.value);
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
                setPassword("password", event.target.value);
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
//  }
}

let logIn = () => ({
  type: 'logIn'
})

export default connect(null, {logIn})(LogIn);
