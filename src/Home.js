import React from "react";
import {auth} from "./base";

const Home = () => {
  console.log(auth.currentUser)
  return (
    <>
      <h1>Home</h1>
      Hello {auth.currentUser.email}
      <button onClick={() => auth.signOut()}>Sign out</button>
    </>
  );
};

export default Home;
