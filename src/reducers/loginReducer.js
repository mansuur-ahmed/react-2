function loginReducer(prevState = { loggedIn: false }, action) {
  let newState;

  switch (action.type) {
    case "LOGIN":
      newState = { ...prevState, loggedIn: true };
      break;

    case "LOGOUT":
      newState = { ...prevState, loggedIn: false };
      break;

    default:
      newState = { ...prevState };
      break;
  }
  return newState;
}

export default loginReducer;
