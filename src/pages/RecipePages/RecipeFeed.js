// RecipeFeed can be found at /user/recipes
// this page will show a list of recipes that have been created
import { useState, useEffect, useCallback } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { RecipeButton, RecipeCard } from "../../components";

let RecipeFeed = ({ apiClient }) => {
  const [recipes, setRecipes] = useState([]);

  const refreshPosts = useCallback(async () => {
    const recipesFromServer = await apiClient.getAllRecipes();
    setRecipes(recipesFromServer);
  }, [apiClient]);

  useEffect(() => {
    refreshPosts();
  }, [refreshPosts]);

  const buildFeed = () => {
    return recipes ? (
      recipes.map((recipe) => {
        return (
          <Row key={recipe._id}>
            <Col>
              <RecipeCard recipe={recipe} />
            </Col>
          </Row>
        );
      })
    ) : (
      <Row>
        <Col className="text-left">
          <p>No recipes added</p>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Container className="pt-5 feed-container">
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={10} className="text-left">
            <h1>Recipes</h1>
          </Col>
          <Col className="text-right">
            <RecipeButton btnText="Add Recipe" btnLink="/user/create-recipe" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Container>{buildFeed()}</Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default RecipeFeed;
