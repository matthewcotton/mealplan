import React from "react";
import { Card } from "react-bootstrap";
import DefaultImg from "../../assets/images/spencer-davis-_yWhM5TZgdo-unsplash.jpg";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";

export const MealplanCard = ({ mealplan }) => {

  const startDate = DateTime.fromISO(mealplan.start_date);
  const endDate = DateTime.fromISO(mealplan.end_date);

  const buildRecipeList = (recipes) => {
    return recipes.length ? (
      <ul>
        {" "}
        {recipes.map((recipe) => {
          return (
            <li key={recipe._id}>
              Day {recipe.day} - {recipe.title}
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
      <Card.Body className="mealplan-body my-auto">
        <h2>{mealplan.title}</h2>
        <Card.Text>
          Duration: {mealplan.duration} {mealplan.duration === 1 ? "Day" : "Days"} | Start Date: {startDate.toLocaleString()} | End Date:{" "}
          {endDate.toLocaleString()}
        </Card.Text>
        {buildRecipeList(mealplan.recipes)}
        <span className="mealplan-btn-view">
          <Link to={`/user/meal-plans/${mealplan._id}`}>
          <button className="button-main">
            View
          </button>
          </Link>
        </span>
      </Card.Body>
    </Card>
  );
};
