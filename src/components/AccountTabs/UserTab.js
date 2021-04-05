import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoggedInUser } from "../../assets/loggedInUser.context";

const UserTab = ({ recipes, mealplans }) => {
  const user = useLoggedInUser();

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Username</th>
          <th>My Recipes</th>
          <th>My Meal Plans</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{user.username}</th>
          <th>
            <Link to="/user/recipes">
              {recipes.length} {recipes.length === 1 ? "Recipe" : "Recipes"}
            </Link>
          </th>
          <th>
            <Link to="/user/meal-plans">
              {mealplans.length}{" "}
              {mealplans.length === 1 ? "Meal Plan" : "Meal Plans"}
            </Link>
          </th>
        </tr>
      </tbody>
    </Table>
  );
};
export default UserTab;
