// RecipeFeed can be found at /user/recipes
// this page will show a list of recipes that have been created
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { RecipeButton, RecipeCard } from "../../components";

let RecipeFeed = ({ apiClient }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getData() {
      return await apiClient.getAllRecipes();
    }
    const recipesFromServer = getData();
    setRecipes(recipesFromServer);
  }, [apiClient]);

  const buildFeed = () => {
    return recipes.length ? (
      recipes.map((recipe) => {
        return (
          <Row>
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
          <Col className="text-left">
            <h1>Recipes</h1>
          </Col>
          <Col className="text-right">
            <RecipeButton btnText="Add Recipe" btnLink="/user/create-recipe" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              {buildFeed()}
              {/* Loop through recipes */}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default RecipeFeed;
