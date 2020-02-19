import React, { useState } from "react";
import "./App.css";
import Register from "./components/Auth/Signup";
import Login from "./components/Auth/Signin";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";

const App = () => {
  const [loginstatus, setLoginstatus] = useState(false);

  return (
    <div className="App">
      <Switch>
        {!loginstatus ? (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login setLoginstatus={setLoginstatus} />
            </Route>
          </>
        ) : (
          <Dashboard path="/dashboard" />
        )}
      </Switch>
    </div>
  );
};

export default App;
