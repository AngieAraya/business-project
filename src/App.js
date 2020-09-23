import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { CustomerContext } from './contexts/CustomerContext';
import ActivateUserPage from "./page/ActivateUserPage";
import CustomerDetailPage from "./page/CustomerDetailPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";

function App() {
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  const [customerList, setCustomerList] = useState([]);
console.log(customerList);
  return (
    <div>
      <h1>Business Project</h1>
      <Switch>
        <CustomerContext.Provider value={{ customerList, setCustomerList }}>
          <Route
            path="/detail/:id"
            render={(props) => {
              return <CustomerDetailPage {...props} />
            }}
          ></Route>

          <Route path="/home">
            <HomePage />
            {/* <h1>Home</h1>
          <button onClick={getCustomerList}>Get Customer List</button> */}
          </Route>

        <Route path="/login">
          {uid && token ? (
            <ActivateUserPage
            token={token}
            setToken={setToken}
            uid={uid}
            setUid={setUid}
            />
            ) : (
              <LoginPage />
              )}
        </Route>

        <Route exact path="/">
          <RegisterPage />
        </Route>
              </CustomerContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
