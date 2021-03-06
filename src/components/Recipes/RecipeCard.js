import React from "react";
import { Card } from "react-bootstrap";
import DefaultImg from "../../assets/images/recipe-thumbnail.jpg";

export const RecipeCard = ({ recipe, setModalState, setSelectedRecipe }) => {
  const setRecipe = (e) => {
    e.preventDefault();
    setSelectedRecipe(recipe);
    setModalState(true);
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
      </Card.Body>
    </Card>
  );
};
