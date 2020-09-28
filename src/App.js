import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { CustomerContext, UserInformation } from "./contexts/CustomerContext";
import ActivateUserPage from "./page/ActivateUserPage";
import CustomerDetailPage from "./page/CustomerDetailPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import UserKit from "./data/UserKit";
import styled from "styled-components";

const Main = styled.div`
  margin: 6% auto;
`;

function App() {
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  const [customerList, setCustomerList] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const userKit = new UserKit();
  
  function getUserInfo() {
    userKit
      .getLogedinUser()
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }

  return (
    <Main>
      <CustomerContext.Provider value={{ customerList, setCustomerList }}>
        <UserInformation.Provider value={{ userInfo, setUserInfo }}>
          <Switch>
            <Route
              path="/detail/:id"
              render={(props) => {
                return <CustomerDetailPage {...props} />;
              }}
            ></Route>

            <Route path="/home">
              <HomePage getUserInfo={getUserInfo}  />
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

          </Switch>
        </UserInformation.Provider>
      </CustomerContext.Provider>
    </Main>
  );
}

export default App;
