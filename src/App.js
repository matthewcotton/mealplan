import './App.scss';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Entry, Dashboard, Account } from './pages'
import { CreateRecipe, RecipeFeed, SingleRecipe } from './pages/RecipePages'
import { CreateMealPlan, MealPlanFeed, SingleMealPlan } from './pages/MealPlanPages'
import ProtectedRoute from './components/ProtectedRoute'
import ApiClient from './assets/apiClient'


function App() {
  // shows whether the user is or isn't logged in
  const [isLoggedIn, isLoggedInHandler] = useState(true);
  let apiClient = new ApiClient();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Entry {...props} apiClient={apiClient} isLoggedInHandler={isLoggedInHandler} />} />
          <ProtectedRoute exact path="/user" isLoggedIn={isLoggedIn} component={Dashboard} />
          <ProtectedRoute exact path="/user/account" isLoggedIn={isLoggedIn} component={Account} />
          <ProtectedRoute exact path="/user/recipes" isLoggedIn={isLoggedIn} component={RecipeFeed} />
          <ProtectedRoute exact path="/user/create-recipe" isLoggedIn={isLoggedIn} component={CreateRecipe} />
          <ProtectedRoute exact path="/user/recipes/:id" isLoggedIn={isLoggedIn} component={SingleRecipe} />
          <ProtectedRoute exact path="/user/create-meal-plan" isLoggedIn={isLoggedIn} component={CreateMealPlan} />
          <ProtectedRoute exact path="/user/meal-plans" isLoggedIn={isLoggedIn} component={MealPlanFeed} />
          <ProtectedRoute exact path="/user/meal-plans/:id" isLoggedIn={isLoggedIn} component={SingleMealPlan} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;