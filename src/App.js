import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { CustomerContext, UserInformation } from './contexts/CustomerContext';
import ActivateUserPage from "./page/ActivateUserPage";
import CustomerDetailPage from "./page/CustomerDetailPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import UserKit from "./data/UserKit";


function App() {
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));
  const userKit = new UserKit();

  const [customerList, setCustomerList] = useState([]);
  const [userInfo, setUserInfo] = useState([]);


  function getUserInfo() {
    userKit
      .getLogedinUser()
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results)
        setUserInfo(data);
      });
  }
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <h1>Business Project</h1>
      <Switch>
        <CustomerContext.Provider value={{ customerList, setCustomerList }}>
        <UserInformation.Provider value={{ userInfo, setUserInfo}}>
          <Route
            path="/detail/:id"
            render={(props) => {
              return <CustomerDetailPage {...props} />
            }}
          ></Route>

          <Route path="/home">
            <HomePage />
          </Route>
          </UserInformation.Provider>
          </CustomerContext.Provider>

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
      </Switch>
    </div>
  );
}

export default App;
