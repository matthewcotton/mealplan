import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import {Entry, Dashboard, Account} from './pages'
import {CreateRecipe, RecipeFeed, SingleRecipe} from './pages/RecipePages'
import {CreateMealPlan, MealPlanFeed, SingleMealPlan} from './pages/MealPlanPages'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Entry} />
          <Route exact path="/user" component={Dashboard} />
          <Route exact path="/user/account" component={Account} />
          <Route exact path="/user/create-recipe" component={CreateRecipe} />
          <Route exact path="/user/recipes" component={RecipeFeed} />
          <Route exact path="/user/recipes/:id" component={SingleRecipe} />
          <Route exact path="/user/create-meal-plan" component={CreateMealPlan} />
          <Route exact path="/user/meal-plans" component={MealPlanFeed} />
          <Route exact path="/user/meal-plans/:id" component={SingleMealPlan} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;