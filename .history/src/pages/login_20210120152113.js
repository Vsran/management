import React, { Component } from "react";
import { connect } from "react-redux";
class LogIn extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='用户名'/>
          <input type='password' placeholder='密码'/>
        </form>
      </div>
    )
  }
}
const mapStateToPros = (state) => {
  let { logged } = state;
  return { logged };
};

export default connect(mapStateToPros)(LogIn);

