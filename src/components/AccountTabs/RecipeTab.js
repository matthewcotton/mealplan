import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeTab = ({ recipes, deleteRecipe }) => {
  let buildRecipeRows = (recipes) => {
    if (recipes.length !== 0) {
      return recipes.map((recipe) => {
        return (
          <tr key={recipe._id}>
            <th>{recipe.title}</th>
            <th>
              <span className="account-manage-icons">
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="trash-alt"
                    className="delete-icon svg-inline--fa fa-trash-alt fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      onClick={(e) => deleteRecipe(e)}
                      id={recipe._id}
                      fill="currentColor"
                      d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                    ></path>
                  </svg>
                </span>
              </span>
            </th>
          </tr>
        );
      });
    } else {
      return (
        <tr className="mt-4">
          <th colspan="3">No Recipes to show</th>
        </tr>
      );
    }
  };

  return (
    <>
      <Table responsive bordered>
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>{buildRecipeRows(recipes)}</tbody>
      </Table>
    </>
  );
};
export default RecipeTab;
