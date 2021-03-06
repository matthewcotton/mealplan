// RecipeFeed can be found at /user/recipes
// this page will show a list of recipes that have been created
import { useState, useEffect, useCallback } from "react";
import { Container, Col, Row} from "react-bootstrap";
import { RecipeCard, RecipeModal } from "../../components";
import { useHistory } from "react-router-dom";
import SideNavBar from '../../components/global/SideNavBar'

let RecipeFeed = ({ apiClient, logOutFunc }) => {
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
      <SideNavBar logOut={logOutFunc} />
      <Container className="pt-5 feed-container">
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={6} className="text-left">
            <h1>Recipes</h1>
          </Col>
          <Col xs={12} sm={6} className="text-right">
            <button className="button-main button-orange" onClick={redirectToAddRecipe}>
              Add Recipe
            </button>
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
