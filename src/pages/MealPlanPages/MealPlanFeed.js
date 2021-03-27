// MealPlanFeed can be found at /user/meal-plans
// this page will show a list of meal plans that have been created
import { useState, useEffect, useCallback } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { MealplanCard } from "../../components";
import { useHistory } from "react-router-dom";
import SideNavBar from "../../components/global/SideNavBar";

let MealPlanFeed = ({ apiClient, logOutFunc }) => {
  const [mealplans, setMealplans] = useState([]);

  let history = useHistory();

  const refreshPosts = useCallback(async () => {
    const mealplansFromServer = await apiClient.getAllMealplans();
    const recipesFromServer = await apiClient.getAllRecipes();
    const mealplansWithRecipeData = mealplansFromServer.map((mealplan) => {
      const mealplanWithRecipeData = mealplan.recipes.map((mealplanRecipe) => {
        const recipeData = recipesFromServer.find(
          (recipe) => recipe._id === mealplanRecipe.recipe[0]
        );
        return { ...mealplanRecipe, recipe: recipeData };
      });
      // return mealplans
      return { ...mealplan, recipes: mealplanWithRecipeData };
    });
    setMealplans(mealplansWithRecipeData);
  }, [apiClient]);

  useEffect(() => {
    refreshPosts();
  }, [refreshPosts]);

  const redirectToAddMealplan = () => {
    history.push("/user/create-meal-plan");
  };

  const buildFeed = () => {
    return mealplans.length ? (
      mealplans.map((mealplan) => {
        return (
          <Row key={mealplan._id}>
            <Col>
              <MealplanCard mealplan={mealplan} />
            </Col>
          </Row>
        );
      })
    ) : (
      <Row>
        <Col className="text-left">
          <p>No meal plans available</p>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <SideNavBar logOut={logOutFunc} />
      <Container className="pt-5 feed-container">
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={6} className="text-left">
            <h1>Meal Plans</h1>
          </Col>
          <Col xs={12} sm={6} className="text-right">
            <Button className="button-main" onClick={redirectToAddMealplan}>
              Add Mealplan
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={12}>{buildFeed()}</Col>
        </Row>
      </Container>
    </>
  );
};
export default MealPlanFeed;
