import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../redux/store";
import { Input, Space } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange = (type, event) => {
    let value = event.target.value.trim();
    //if (!value) return;

    switch (type) {
      case "username":
        //if (/^([a-zA-Z0-9_\u4e00-\u9fa5]{4,16})$/.test(value)) {
        this.setState({
          username: value,
        });
        //} else {
        //alert("请输入正确的用户名");
        //}
        break;
      case "password":
        //if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
        this.setState({
          password: value,
        });
        //} else {
        //alert("密码错误！");
        //}
        break;
      default:
        return;
    }
  };
  handleSubmit = (event) => {
    let { username, password } = this.state;
    if (!username || !password) {
      alert("用户名和密码不能为空！");
      return;
    }
    event.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    //修改用户状态
    console.log("this.props", this.props);
    let { type } = this.props;
    store.dispatch(this.props);
  };
  render() {
    let { username, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            size='large'
            placeholder='用户名'
            prefix={<UserOutlined />}
            onChange={(event) => {
              this.handleChange("username", event);
            }}
            value={username}
          />
          <Space direction='vertical'>
            <Input.Password
              placeholder='密码'
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              nChange={(event) => {
                this.handleChange("password", event);
              }}
              value={password}
            />
          </Space>
          <button>登录</button>
        </form>
      </div>
    );
  }
}
const mapStateToPros = (state) => {
  let { logged } = state;
  return { logged };
};
const logIn = () => ({
  type: "logIn",
});

export default connect(null, logIn)(LogIn);
