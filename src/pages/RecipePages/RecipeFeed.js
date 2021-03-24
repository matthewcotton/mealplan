// RecipeFeed can be found at /user/recipes
// this page will show a list of recipes that have been created
import { useState, useEffect, useCallback } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { RecipeCard, RecipeModal } from "../../components";
import { useHistory } from "react-router-dom";

let RecipeFeed = ({ apiClient }) => {
  const [recipes, setRecipes] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({
    title: "",
    prep_time: "",
    cook_time: "",
    serves: "",
    ingredients: [{ measurement: "", unit: "", ingredient: "" }],
    steps: [{ step: "", instruction: "" }],
  });
  let history = useHistory();

  const refreshPosts = useCallback(async () => {
    const recipesFromServer = await apiClient.getAllRecipes();
    setRecipes(recipesFromServer);
  }, [apiClient]);

  useEffect(() => {
    refreshPosts();
  }, [refreshPosts]);

  const redirectToAddRecipe = () => {
    history.push("/user/create-recipe");
  };

  const buildFeed = () => {
    return recipes.length ? (
      recipes.map((recipe) => {
        return (
          <Row key={recipe._id}>
            <Col>
              <RecipeCard
                recipe={recipe}
                setModalState={setModalState}
                setSelectedRecipe={setSelectedRecipe}
              />
            </Col>
          </Row>
        );
      })
    ) : (
      <Row>
        <Col className="text-left">
          <p>No recipes available</p>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Container className="pt-5 feed-container">
        <Row className="d-flex justify-content-center">
          <Col xs={6} className="text-left">
            <h1>Recipes</h1>
          </Col>
          <Col xs={6} className="text-right">
            <Button className="button-main" onClick={redirectToAddRecipe}>
              Add Recipe
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={12}>{buildFeed()}</Col>
        </Row>
        <RecipeModal
          show={modalState}
          setModalState={setModalState}
          recipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      </Container>
    </>
  );
};
export default RecipeFeed;
