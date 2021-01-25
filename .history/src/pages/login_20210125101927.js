import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../redux/store";
import { Form, Input, Button, Checkbox, Space } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

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

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    let { username, password } = this.state;
    return (
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
          rules={[
            {
              required: true,
              message: "请输入用户名!",
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
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: "请输入密码!",
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
    );
  }
}
export default LogIn;
//class LogIn extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      username: "",
//      password: "",
//    };
//  }
//  handleChange = (type, event) => {
//    let value = event.target.value.trim();
//    //if (!value) return;

//    switch (type) {
//      case "username":
//        //if (/^([a-zA-Z0-9_\u4e00-\u9fa5]{4,16})$/.test(value)) {
//        this.setState({
//          username: value,
//        });
//        //} else {
//        //alert("请输入正确的用户名");
//        //}
//        break;
//      case "password":
//        //if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
//        this.setState({
//          password: value,
//        });
//        //} else {
//        //alert("密码错误！");
//        //}
//        break;
//      default:
//        return;
//    }
//  };
//  handleSubmit = (event) => {
//    let { username, password } = this.state;
//    if (!username || !password) {
//      alert("用户名和密码不能为空！");
//      return;
//    }
//    event.preventDefault();
//    localStorage.setItem("username", username);
//    localStorage.setItem("password", password);

//    //修改用户状态
//    console.log("this.props", this.props);
//    let { type } = this.props;
//    store.dispatch(this.props);
//  };
//  render() {
//    let { username, password } = this.state;

//    return (
//      <div>
//        <form onSubmit={this.handleSubmit}>
//          <Input
//            size='default size'
//            placeholder='用户名'
//            prefix={<UserOutlined />}
//            onChange={(event) => {
//              this.handleChange("username", event);
//            }}
//            value={username}
//          />
//          <Space direction='vertical'>
//            <Input.Password
//              placeholder='密码'
//              iconRender={(visible) =>
//                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//              }
//              onChange={(event) => {
//                this.handleChange("password", event);
//              }}
//              value={password}
//            />
//          </Space>
//          <button>登录</button>
//        </form>
//      </div>
//    );
//  }
//}
//const mapStateToPros = (state) => {
//  let { logged } = state;
//  return { logged };
//};
//const logIn = () => ({
//  type: "logIn",
//});

//export default connect(null, logIn)(LogIn);

//const LogIn = () => {
//  const onFinish = (values) => {
//    console.log("Success:", values);
//  };

//  const onFinishFailed = (errorInfo) => {
//    console.log("Failed:", errorInfo);
//  };

//  return (
//    <Form
//      {...layout}
//      name='basic'
//      initialValues={{
//        remember: true,
//      }}
//      onFinish={onFinish}
//      onFinishFailed={onFinishFailed}
//    >
//      <Form.Item
//        label='Username'
//        name='username'
//        rules={[
//          {
//            required: true,
//            message: "请输入用户名!",
//          },
//        ]}
//      >
//        <Input
//          placeholder='用户名'
//          onChange={(event) => {
//            this.handleChange("username", event);
//          }}
//          value={username}
//        />
//      </Form.Item>

//      <Form.Item
//        label='Password'
//        name='password'
//        rules={[
//          {
//            required: true,
//            message: "请输入密码!",
//          },
//        ]}
//      >
//        <Input.Password
//          placeholder='密码'
//          onChange={(event) => {
//            this.handleChange("password", event);
//          }}
//          value={password}
//          iconRender={(visible) =>
//            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//          }
//        />
//      </Form.Item>

//      <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
//        <Checkbox>记住密码</Checkbox>
//      </Form.Item>

//      <Form.Item {...tailLayout}>
//        <Button type='primary' htmlType='submit'>
//          Submit
//        </Button>
//      </Form.Item>
//    </Form>
//  );
//};
