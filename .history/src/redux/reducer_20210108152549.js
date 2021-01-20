export function logReduer(state = { logged: false }, action) {
  switch (action.type) {
    case "logIn":
      return { logged: true };
    case "logOut":
      return { logged: false };
    default:
      return state;
  }
}
