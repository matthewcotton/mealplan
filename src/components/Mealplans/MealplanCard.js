import React from "react";
import { Card, Button } from "react-bootstrap";
import DefaultImg from "../../assets/images/spencer-davis-_yWhM5TZgdo-unsplash.jpg";
import { useHistory } from "react-router-dom";
import { DateTime } from "luxon";

export const MealplanCard = ({ mealplan }) => {
  let history = useHistory();

  const redirectToUpdateMealplan = () => {
    history.push(`/user/update-mealplan/${mealplan._id}`);
  };

  const startDate = DateTime.fromISO(mealplan.start_date);
  const endDate = DateTime.fromISO(mealplan.end_date);

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
          Duration: {mealplan.duration} {mealplan.duration < 1 ? "Day" : "Days"} | Start Date: {startDate.toLocaleString()} | End Date:{" "}
          {endDate.toLocaleString()}
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
