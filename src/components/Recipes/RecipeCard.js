import React from "react";
import { Card, Button } from "react-bootstrap";
import DefaultImg from "../../assets/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg";
import { useHistory } from "react-router-dom";

export const RecipeCard = ({ recipe, setModalState, setSelectedRecipe }) => {
  const setRecipe = (e) => {
    e.preventDefault();
    setSelectedRecipe(recipe);
    setModalState(true);
  };
  let history = useHistory();

  const redirectToUpdateRecipe = () => {
    history.push(`/user/update-recipe/${recipe._id}`);
  };

  return (
    <Card className="mx-0 recipe-card">
      <Card.Img className="recipe-img" src={DefaultImg} />
      <Card.Body className="recipe-body my-auto">
        <h2>{recipe.title}</h2>
        <Card.Text>
          Prep Time: {recipe.prep_time} | Cook Time: {recipe.cook_time} |{" "}
          {recipe.ingredients.length} Ingredients
        </Card.Text>
        <span className="recipe-btn-view">
          <button className="button-main" value={recipe} onClick={(e) => setRecipe(e)}>
            View
          </button>
        </span>
        <span className="recipe-btn-manage">
          <button className="button-main" onClick={redirectToUpdateRecipe}>
            Manage
          </button>
        </span>
      </Card.Body>
    </Card>
  );
};
