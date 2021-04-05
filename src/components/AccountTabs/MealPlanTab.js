import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const MealPlanTab = ({ mealplans }) => {
  console.log(mealplans);

  let buildMealplanRows = (mealplans) => {
    if (mealplans.length !== 0) {
      return mealplans.map((mealplan) => {
        return (
          <tr key={mealplan._id}>
            <th>{mealplan.title}</th>
            <th>{mealplan.start_date}</th>
            <th>
              <span className="account-manage-icons">
                <Link to={`/user/meal-plans/${mealplan._id}`}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="book-open"
                    className="read-icon svg-inline--fa fa-book-open fa-w-18 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
                    ></path>
                  </svg>
                </Link>
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
          <th>No Meal Plans to show</th>
        </tr>
      );
    }
  };

  return (
    <Table responsive bordered>
      <thead>
        <tr>
          <th>Meal Plan</th>
          <th>Start Date</th>
          <th>Manage</th>
        </tr>
      </thead>
      <tbody>{buildMealplanRows(mealplans)}</tbody>
    </Table>
  );
};
export default MealPlanTab;
