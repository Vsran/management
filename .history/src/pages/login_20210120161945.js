import React, { Component } from "react";
import { connect } from "react-redux";
class LogIn extends Component {
  handleChange(type, event) {
    let value = event.target.value.trim();
    if (!value) return;

    switch (type) {
      case "username":
        if (/^([a-zA-Z0-9_\u4e00-\u9fa5]{4,16})$/.test(value)) {
          this.setState({
            username: value,
          });
        } else {
          alert("请输入正确的用户名");
        }
        break;
      case "password":
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
          this.setState({
            password: value,
          });
        } else {
          alert("密码错误！");
        }
        break;
      default:
        return;
    }
  }
  handleSubmit() {}
  render() {
    let { username, password } = this.state;

    return (
      <div>
        <form>
          <input type='text' placeholder='用户名' />
          <input type='password' placeholder='密码' />
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

export default connect(mapStateToPros)(LogIn);
