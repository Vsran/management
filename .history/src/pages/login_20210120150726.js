import React from "react";
import { connect } from "react-redux";

const LogIn = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <div>
        hello!
        <button>log out</button>
      </div>
    );
  } else {
    return (
      <div>
        please log in!
        <button>log in</button>
      </div>
    );
  }
};
const mapStateToPros = (state) => {
  let { logged } = state;
  return { logged };
};

export default connect(mapStateToPros)(LogIn);

