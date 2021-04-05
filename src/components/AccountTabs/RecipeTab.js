import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeTab = ({ recipes }) => {
  console.log(recipes)

  let buildRecipeRows = (recipes) => {
    if (recipes.length === 0) {
      return recipes.map((recipe) => {
        return (
          <tr>
            <th>{recipe.title}</th>
          </tr>
        );
      });
    } else {
      return <p className="mt-4">No Recipes to show</p>;
    }
  };

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Serves</th>
            <th>Ingredients</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>{buildRecipeRows(recipes)}</tbody>
      </Table>
    </>
  );
};
export default RecipeTab;
