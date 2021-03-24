import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const RecipeButton = ({ btnText, btnLink }) => {
  return (
    <>
      <Button className="button-main">
        <Link to={btnLink}>{btnText}</Link>
      </Button>
    </>
  );
};