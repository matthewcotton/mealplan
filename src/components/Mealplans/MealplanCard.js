import React from "react";
import { Card, Button } from "react-bootstrap";
import DefaultImg from "../../assets/images/spencer-davis-_yWhM5TZgdo-unsplash.jpg";
import { useHistory } from "react-router-dom";

export const MealplanCard = ({ mealplan }) => {
  let history = useHistory();

  const redirectToUpdateMealplan = () => {
    history.push(`/user/update-mealplan/${mealplan._id}`);
  };

  const buildRecipeList = (recipes) => {
    return recipes.length ? (
      <ul>
        {" "}
        {recipes.map((recipe) => {
          return (
            <li key={recipe._id}>
              Day {recipe.day} - {recipe.recipe.title}
            </li>
          );
        })}{" "}
      </ul>
    ) : (
      "No recipes in this mealplan"
    );
  };

  return (
    <Card className="mx-0 mealplan-card">
      <Card.Img className="mealplan-img" src={DefaultImg} />
      <Card.Body className="mealplan-body">
        <Card.Title>{mealplan.title}</Card.Title>
        <Card.Text>
          Duration: {mealplan.duration} | Start Date: {mealplan.start_date} | End Date:{" "}
          {mealplan.end_date}
        </Card.Text>
        {buildRecipeList(mealplan.recipes)}
        <span className="mealplan-btn-view">
          <Button className="button-main" value={""} onClick={(e) => {}}>
            View
          </Button>
        </span>
        <span className="mealplan-btn-manage">
          <Button className="button-main" onClick={redirectToUpdateMealplan}>
            Manage
          </Button>
        </span>
      </Card.Body>
    </Card>
  );
};
