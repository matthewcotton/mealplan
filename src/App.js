import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "toastr/build/toastr.min.css";
import React, { useState, useEffect } from "react";
import { loggedInUser } from "./assets/loggedInUser.context";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Entry, Dashboard, Account } from "./pages";
import { CreateRecipe, RecipeFeed, SingleRecipe } from "./pages/RecipePages";
import { CreateMealPlan, MealPlanFeed, SingleMealPlan } from "./pages/MealPlanPages";
import ProtectedRoute from "./components/global/ProtectedRoute";
import ApiClient from "./assets/apiClient";


function App() {
  // shows whether the user is or isn't logged in
  const [isLoggedIn, isLoggedInHandler] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState({});
  const apiClient = new ApiClient(
    () => window.localStorage.getItem("UserToken"),
    () => logOutFunc()
  );

  // fecthes UserToken/user object from local storage on every reload
  useEffect(() => {
    if (localStorage.getItem("UserToken")) {
      isLoggedInHandler(true)
      const loggedInUser = window.localStorage.getItem("User")
      setUserLoggedIn(JSON.parse(loggedInUser))
    } else {
      isLoggedInHandler(false);
    }
  }, []);

  let logInFunc = (user, userToken) => {
    isLoggedInHandler(true)
    setUserLoggedIn(user)
    window.localStorage.setItem("User", JSON.stringify(user));
    window.localStorage.setItem("UserToken", userToken);
  };

  let logOutFunc = () => {
    isLoggedInHandler(false)
    window.localStorage.removeItem("User");
    window.localStorage.removeItem("UserToken");
  }

  return (
    <div className="App py-5">
      <loggedInUser.Provider value={userLoggedIn}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Entry apiClient={apiClient} isLoggedIn={isLoggedIn} logInFunc={logInFunc} />} />
            <ProtectedRoute exact path="/user" isLoggedIn={isLoggedIn} component={Dashboard} logOutFunc={logOutFunc} />
            <ProtectedRoute exact path="/user/account" isLoggedIn={isLoggedIn} component={Account} logOutFunc={logOutFunc} />
            <ProtectedRoute exact path="/user/recipe" apiClient={apiClient} isLoggedIn={isLoggedIn} component={RecipeFeed} logOutFunc={logOutFunc} />
            <ProtectedRoute exact path="/user/create-recipe" apiClient={apiClient}isLoggedIn={isLoggedIn} component={CreateRecipe} logOutFunc={logOutFunc} />
            <ProtectedRoute exact path="/user/recipes/:id" apiClient={apiClient}isLoggedIn={isLoggedIn} component={SingleRecipe} logOutFunc={logOutFunc} />
            <ProtectedRoute exact path="/user/create-meal-plan" isLoggedIn={isLoggedIn} component={CreateMealPlan} logOutFunc={logOutFunc} apiClient={apiClient} />
            <ProtectedRoute exact path="/user/meal-plans" apiClient={apiClient} isLoggedIn={isLoggedIn} component={MealPlanFeed} logOutFunc={logOutFunc} />
            <ProtectedRoute exact path="/user/meal-plans/:id" isLoggedIn={isLoggedIn} component={SingleMealPlan} logOutFunc={logOutFunc} />
          </Switch>
        </Router>
      </loggedInUser.Provider>
    </div>
  );
}
export default App;
