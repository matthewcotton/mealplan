import React, { useState, useEffect } from "react";
import SideNavBar from "../components/global/SideNavBar";
import UserTab from "../components/AccountTabs/UserTab";
import RecipeTab from "../components/AccountTabs/RecipeTab";
import MealPlanTab from "../components/AccountTabs/MealPlanTab";
import { Container, Tabs, Tab } from "react-bootstrap";

let Account = ({ apiClient, logOutFunc }) => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [userMealPlans, setUserMealPlans] = useState([]);

  let requestRecipes = async () => {
    const recipes = await apiClient.getAllRecipes();
    setUserRecipes(recipes);
  };
  let requestMealplans = async () => {
    const mealplans = await apiClient.getAllMealplans();
    setUserMealPlans(mealplans);
  };

  let deleteRecipe = (e) => {
    const id = e.target.id;
    apiClient.deleteRecipe(id).then(() => {
      requestRecipes();
    });
  };

  let deleteMealplan = (e) => {
    const id = e.target.id;
    apiClient.deleteMealplan(id).then(() => {
      requestMealplans();
    });
  };

  useEffect(() => {
    requestRecipes();
    requestMealplans();
  }, []);

  return (
    <>
      <SideNavBar logOut={logOutFunc} />
      <Container className="mt-5">
        <UserTab recipes={userRecipes} mealplans={userMealPlans} />
        <Tabs className="mt-5">
          <Tab eventKey="recipe" title="My Recipes">
            <RecipeTab recipes={userRecipes} deleteRecipe={deleteRecipe} />
          </Tab>
          <Tab eventKey="mealplans" title="My Meal Plans">
            <MealPlanTab
              mealplans={userMealPlans}
              deleteMealplan={deleteMealplan}
            />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Account;
