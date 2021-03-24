import React from "react";
import { Card } from "react-bootstrap";
import { RecipeButton } from "./RecipeButton";
import DefaultImg from "../../assets/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg";

export const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <Card className="recipe-card">
      <Card.Img className="recipe-img" src={DefaultImg} />
      <Card.Body className="recipe-body">
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          Prep Time: {recipe.prep_time} | Cook Time: {recipe.cook_time} |{" "}
          {recipe.ingredients.length} Ingredients
        </Card.Text>
        <span className="recipe-btn-view">
          <RecipeButton btnText="View" btnLink={`/user/recipes/${recipe._id}`} />
        </span>
        <span className="recipe-btn-manage">
          <RecipeButton btnText="Manage" btnLink="" />
        </span>
      </Card.Body>
    </Card>
  );
};
