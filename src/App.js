import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'toastr/build/toastr.min.css';
import React, { useState, useEffect } from 'react'
import { useLoggedInUser, loggedInUser } from './assets/loggedInUser.context'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Entry, Dashboard, Account } from './pages'
import { CreateRecipe, RecipeFeed, SingleRecipe } from './pages/RecipePages'
import { CreateMealPlan, MealPlanFeed, SingleMealPlan } from './pages/MealPlanPages'
import ProtectedRoute from './components/ProtectedRoute'
import ApiClient from './assets/apiClient'

function App() {
  // shows whether the user is or isn't logged in
  const [isLoggedIn, isLoggedInHandler] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState({});
  let apiClient = new ApiClient();

  // fecthes UserToken from local storage on every reload
  useEffect(() => {
    if (localStorage.getItem("UserToken")) {
      isLoggedInHandler(true)
    } else {
      isLoggedInHandler(false)
    }
  }, []);


  let logInFunc = (user, userToken) => {
    isLoggedInHandler(true)
    setUserLoggedIn(user)
    window.localStorage.setItem("UserToken", userToken);
  }

  // uncomment line 31 to logout current user
  // window.localStorage.removeItem("UserToken")
  return (
    <div className="App py-5">
      <loggedInUser.Provider value={userLoggedIn} >
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Entry apiClient={apiClient} isLoggedIn={isLoggedIn} logInFunc={logInFunc} />} />
            <ProtectedRoute exact path="/user" isLoggedIn={isLoggedIn} component={Dashboard} props={{ exampleProp: "prop" }} />
            <ProtectedRoute exact path="/user/account" isLoggedIn={isLoggedIn} component={Account} />
            <ProtectedRoute exact path="/user/recipes" isLoggedIn={isLoggedIn} component={RecipeFeed} />
            <ProtectedRoute exact path="/user/create-recipe" isLoggedIn={isLoggedIn} component={CreateRecipe} />
            <ProtectedRoute exact path="/user/recipes/:id" isLoggedIn={isLoggedIn} component={SingleRecipe} />
            <ProtectedRoute exact path="/user/create-meal-plan" isLoggedIn={isLoggedIn} component={CreateMealPlan} />
            <ProtectedRoute exact path="/user/meal-plans" isLoggedIn={isLoggedIn} component={MealPlanFeed} />
            <ProtectedRoute exact path="/user/meal-plans/:id" isLoggedIn={isLoggedIn} component={SingleMealPlan} />
          </Switch>
        </Router>
      </loggedInUser.Provider>
    </div>
  );
}
export default App;