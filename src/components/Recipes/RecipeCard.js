import React from "react";
import { Card } from "react-bootstrap";
import { RecipeButton } from "./RecipeButton";
import DefaultImg from "../../assets/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg";

export const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <Card.Img src={DefaultImg} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          Prep Time: {recipe.prep_time} | Cook Time: {recipe.cook_time} |{" "}
          {recipe.ingredients.length} Ingredients
        </Card.Text>
        <RecipeButton btnText="View" btnLink={`/user/recipes/${recipe.id}`} />
        <RecipeButton btnText="Manage" btnLink="" />
      </Card.Body>
    </Card>
  );
};
