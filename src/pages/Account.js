import React, { useState, useEffect } from "react";
import SideNavBar from "../components/global/SideNavBar";
import UserTab from "../components/AccountTabs/UserTab";
import RecipeTab from "../components/AccountTabs/RecipeTab";
import { Container, Tabs, Tab } from "react-bootstrap";

let Account = ({ apiClient, logOutFunc }) => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [userMealPlans, setUserMealPlans] = useState({});

  useEffect(() => {
    apiClient.getAllRecipes().then((response) => {
      setUserRecipes(response);
    });
    apiClient.getAllMealplans().then((response) => {
      setUserMealPlans(response);
    });
  }, []);

  return (
    <>
      <SideNavBar logOut={logOutFunc} />
      <Container>
        <Tabs>
          <Tab eventKey="user" title="User">
            <UserTab recipes={userRecipes} mealplans={userMealPlans} />
          </Tab>
          <Tab eventKey="recipe" title="Recipe">
            <RecipeTab recipes={userRecipes} />
          </Tab>
          <Tab eventKey="mealplans" title="Meal Plans"></Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Account;
