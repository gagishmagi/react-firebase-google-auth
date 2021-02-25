import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase , {auth} from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  const signInWithGoogle = () => auth.signInWithPopup(provider);

  const handleGoogle = (event) => {
      console.log(event.target)
      signInWithGoogle();
  }

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      console.log("button", event)
      // const { email, password } = event.target.elements;
      // try {
      //   await app
      //     .auth()
      //     .signInWithEmailAndPassword(email.value, password.value);
      //   history.push("/");
      // } catch (error) {
      //   alert(error);
      // }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <button onClick={handleGoogle}>Login with google</button>
    </div>
  );
};

export default withRouter(Login);
